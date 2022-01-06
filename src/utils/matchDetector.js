// Receives an array with values 0 (no marker), 1 (player 1 marker), and 2 (player 2 marker)
// Receives an int for index of clicked square
// Receives a bool for player 1 (true) or player 2 (false)
// Receives an int for row count
// Receives an int for column count

//Assumes 3 in a row will result in a match (return true)
export function detectMatch(grid, currentLocation, player1, totalRows, totalColumns) {
  const matchDir = [
    {
      directionName: "Up",
      directionOrientation: [0, -1]
    },
    {
      directionName: "Up Right",
      directionOrientation: [1, -1]
    },
    {
      directionName: "Right",
      directionOrientation: [1, 0]
    },
    {
      directionName: "Down Right",
      directionOrientation: [1, 1]
    },
    {
      directionName: "Down",
      directionOrientation: [0, 1]
    },
    {
      directionName: "Down Left",
      directionOrientation: [-1, 1]
    },
    {
      directionName: "Left",
      directionOrientation: [-1, 0]
    },
    {
      directionName: "Up Left",
      directionOrientation: [-1, -1]
    }
  ]
  let currentMatchDirection = null
  let currentMatchCount = 0
  const matchMarker = player1 ? 1 : 2
  const currentPosition = [currentLocation % totalColumns, Math.floor(currentLocation/totalRows)]

  // Search each square next to the currentPosition, and if a similar marker is found, set the currentMatchDir
  // Then search in that orientation until either another match is found or reaches the edge of the board
  // Then search in the oposite orientation until either another match is found or reaches the edge of the board
  // If there is not 3 in a row, resume searching each square next to the currrentLocation

  for (let i = 0; i < 8; i++) {
    let currentSearchDirection = matchDir[i].directionOrientation
    let adjacentGridSpace = [currentPosition[0] + currentSearchDirection[0], currentPosition[1] + currentSearchDirection[1]]
    console.log(`Searching for grid index ${currentLocation + currentSearchDirection[0] + currentSearchDirection[1] * totalColumns}: ${validGridSpace(adjacentGridSpace, totalRows, totalColumns) ? `Valid adjacent grid space: ${adjacentGridSpace}` : "Invalid adjacent grid space"}`)
    if (validGridSpace(adjacentGridSpace, totalRows, totalColumns) && grid[currentLocation + currentSearchDirection[0] + currentSearchDirection[1] * totalColumns].marker === matchMarker) {
      // Found first adjacent match
      currentMatchDirection = matchDir[i].directionName
      do {
        currentMatchCount++
        console.log(`Found a match at ${adjacentGridSpace}. Grid Marker is ${grid[adjacentGridSpace[0] + adjacentGridSpace[1] * totalColumns].marker} which ${grid[adjacentGridSpace[0] + adjacentGridSpace[1] * totalColumns].marker === matchMarker ? "matches" : "does not match"} the player's marker, ${matchMarker}. Now looking for more matches in the ${currentMatchDirection} direction.`)
        adjacentGridSpace = [adjacentGridSpace[0] + currentSearchDirection[0], adjacentGridSpace[1] + currentSearchDirection[1]]
      } while (validGridSpace(adjacentGridSpace, totalRows, totalColumns) && grid[adjacentGridSpace[0] + adjacentGridSpace[1] * totalColumns].marker === matchMarker)
      console.log(`Cannot search more in the ${currentMatchDirection} direction.`)
      // Search opposite direction in case there are additional matches
      currentSearchDirection = matchDir[i + 4 < matchDir.length ? i + 4 : i - 4].directionOrientation
      currentMatchDirection = matchDir[i + 4 < matchDir.length ? i + 4 : i - 4].directionName
      console.log(`Attempting search in the ${currentMatchDirection} direction.`)
      adjacentGridSpace = [currentPosition[0] + currentSearchDirection[0], currentPosition[1] + currentSearchDirection[1]]
      if (validGridSpace(adjacentGridSpace, totalRows, totalColumns) && grid[adjacentGridSpace[0] + adjacentGridSpace[1] * totalColumns].marker === matchMarker) {
        do {
          currentMatchCount++
          console.log(`Found a match at ${adjacentGridSpace}. Grid Marker is ${grid[adjacentGridSpace[0] + adjacentGridSpace[1] * totalColumns].marker} which ${grid[adjacentGridSpace[0] + adjacentGridSpace[1] * totalColumns].marker === matchMarker ? "matches" : "does not match"} the player's marker, ${matchMarker}. Now looking for more matches in the ${currentMatchDirection} direction.`)
          adjacentGridSpace = [adjacentGridSpace[0] + currentSearchDirection[0], adjacentGridSpace[1] + currentSearchDirection[1]]
        } while (validGridSpace(adjacentGridSpace, totalRows, totalColumns) && grid[adjacentGridSpace[0] + adjacentGridSpace[1] * totalColumns].marker === matchMarker)
      }
      console.log(`Cannot search more in the ${currentMatchDirection} direction.`)
    }
    currentMatchCount = currentMatchCount > 0 ? currentMatchCount + 1 : 0
    console.log(`Found ${currentMatchCount} match${currentMatchCount === 1 ? "" : "es"}`)
    if (currentMatchCount >= 3) {
      return true
    }
    currentMatchCount = 0
  }
  return false
}

function validGridSpace(position, totalRows, totalColumns) {
  return 0 <= position[0] && position[0] < totalColumns && 0 <= position[1] && position[1] < totalRows
}
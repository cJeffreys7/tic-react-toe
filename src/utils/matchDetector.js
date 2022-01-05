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
  let currMatchDir = null

  // Search each square next to the currentLocation, and if a similar marker is found, set the currMatchDir
  // Then search in that orientation until either another match is found or reaches the edge of the board
  // Then search in the oposite orientation until either another match is found or reaches the edge of the board
  // If there is not 3 in a row, resume searching each square next to the currrentLocation

  // Location duples [row, column]
  // Current Location [1,1] (center)
  // Find square up from current location (get directionOrientation = [0, 1])
  // Convert to grid location (row * gridColumns + column)

  for (let i = 0; i < 9; i++) {
    const currDirection = matchDir[i].directionOrientation
    console.log(`Searching for grid index ${currentLocation + currDirection[0] + currDirection[1] * totalColumns}`)
    if (grid[currentLocation + currDirection[0] + currDirection[1] * totalColumns] && grid[currentLocation + currDirection[0] + currDirection[1] * totalColumns].marker === player1 ? "Player 1" : "Player 2") {
      currMatchDir = matchDir[i].directionName
      console.log(`Found a match in the ${currDirection} direction. Now looking for more matches in the ${currMatchDir} direction.`)
    }
  }
}
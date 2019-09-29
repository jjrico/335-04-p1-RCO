// Turk and Propp's Ant #12
// Langston's Ant Cellular Automaton altered to include four colors
// Blue, Yellow, Red, Black with LLRR
// Ant turns left on blue and yellow
// Ant turns right on red and black
// Done on a 41 x 41 grid

// Link to canvas in HTML doc
var canvas = document.getElementById( "grid" );

// Create canvas object
var c = canvas.getContext('2d');

// Function to create a 2D array filled with zeros of the specified dimensions
function zeros(rows, columns) {
  // Creating the matrix in the following way allows for individual elements
  // to be edited without changing an entire row
 var array = (new Array(columns)).fill().map(function(){ return new Array(rows).fill(0);});

 return array;
}

// Grid of zeros used to represent the colors
var grid = zeros(41,41);
// Define colors
var black = 0; var red = 1; var yellow = 2; var blue = 3;
// Define direction
// Add 1 = turn right
// Subtract 1 = turn left
var north = 0; var east = 1; var south = 2; var west = 3;
var it = 0; // Counter for number of iterations to be used in the main loop
var iterations = 5000 // number of iterations preferred

// Ant Class
var ant = {
  // Ant begins in center of grid (21, 21) and heading west
  xpos: 21,
  ypos: 21,
  dir: west,

  // turnLeft(): decrements direction by one while keeping the value between
  // zero and three by using modulus and absolute value
  turnLeft: function() {
    this.dir = Math.abs((this.dir - 1) % 4);
  },

  // turnRight(): increments direction by one while keeping value between zero
  // and three
  turnRight: function() {
    this.dir = (this.dir + 1) % 4;
  },

  // moveForward(): alters Ant x and y attributes depending on direction value
  // Since top left of grid is (0, 0), moving the ant up decrements y and
  // moving down increments y.
  moveForward: function() {
    if (this.dir == north) {
      this.ypos--;
    } else if (this.dir == east) {
      this.xpos++;
    } else if (this.dir == south) {
      this.ypos++;
    } else if (this.dir == west) {
      this.xpos--;
    }
  }
};

// Variables to expand the grid to the canvas (see below)
var x_gridToCanvas_multiplier;
var y_gridToCanvas_multiplier;
var pixelBoxSize;

// Main loop
while (++it <= iterations) {

  // Since grid is 41x41 and canvas is 410x410, x and y positions must be
  // multiplied by 10.
  x_gridToCanvas_multiplier = ant.xpos * 10;
  y_gridToCanvas_multiplier = ant.ypos * 10;
  pixelBoxSize = 10;   // To increase visibility, the size of each box will be
                       // 10x10px

  // First, increment the color of the square the ant is currently on
  // First iteration Example:
  //    Ant is on (21, 21)
  //    grid[21][21] = 0 (black)
  //    print a black square at (21*10, 21*10) of the canvas of size 10x10px
  switch (grid[ant.xpos][ant.ypos]++) {
    case black:
      c.fillStyle = "black";
      c.fillRect(x_gridToCanvas_multiplier, y_gridToCanvas_multiplier,
          pixelBoxSize, pixelBoxSize);
      break;
    case red:
      c.fillStyle = "red";
      c.fillRect(x_gridToCanvas_multiplier, y_gridToCanvas_multiplier,
          pixelBoxSize, pixelBoxSize);
      break;
    case yellow:
      c.fillStyle = "yellow";
      c.fillRect(x_gridToCanvas_multiplier, y_gridToCanvas_multiplier,
          pixelBoxSize, pixelBoxSize);
      break;
    case blue:
      c.fillStyle = "blue";
      c.fillRect(x_gridToCanvas_multiplier, y_gridToCanvas_multiplier,
          pixelBoxSize, pixelBoxSize);
      break;
  }

  // Then move the ant forward
  // First iteration Example:
  //    Ant is at (21, 21) and facing west
  //    Therefore derement x value by one
  //    Ant is now at (20, 21)
  ant.moveForward();

  // Now change the ant's direction based on the color (value of the grid at
  // Ant(x,y)) of the square the ant is currently on
  // First iteration Example:
  //    Ant is at (20, 21)
  //    grid[20][21] = 0 (black)
  //    Ant turns right (add one to dir)
  switch (grid[ant.xpos][ant.ypos]) {
    case black:
      ant.turnRight();
      break;
    case red:
      ant.turnRight();
      break;
    case yellow:
      ant.turnLeft();
      break;
    case blue:
      ant.turnLeft();
      break;
  }
  // Ant is now at (20, 21) and facing north
  // Return to top of loop to continue each step from the Ant's new position
}

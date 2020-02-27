README: Notes on how to run project1
Time-stamp: <2019-09-24 20:31:18 Jeremy Rico>
------------------------------------------------------------

335 - 04
Project 1 Asgwilanga Caverns
Team: Jeremy Rico
Contents: index.html, caverns2.0.js, project2.odf README.txt

Intro:
project1.html has some simple CSS commands as well as the main timing function.
It waits 1000ms before completing the next step from cave to cave. It also uses
some simple logic to create a new ring around an existing room, and a new Node for
when the algorithm travels to a new room

project.js the main algorithm. It works by taking in a room array. It holds the first
value the same then increments the second value and decrements the third value to
search for a new room. If a new room is found, it outputs that room and adds it to 
a hash set. If no new room is found, it decrements the second value and increments
the third until [1] is at 0 or [2] is at max. It does this for each three values until
it finds a new room. If the end of the loop is reached and no new room was found,
the current room is cleared from the hash set and the bot goes back to the last room 
to look for a new room.

This file also contains some canvas programs to draw the circles and rings for the
algorithm visualization

project1bigO.odt contains an analysis of the programs time complexity

How to run: 
Drag and drop project1.html into a web browser.


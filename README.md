# Color Flipper JS Project

This is a basic project to practice javascript with html and css. The project is based off of (but not following) the tutorial from [John Smilga](https://www.youtube.com/watch?v=3PHXvlpOkf4&t=421s).  This is the first in a group of project suggestions from [freeCodeCamp](https://www.freecodecamp.org/news/javascript-projects-for-beginners/).  

The main concepts are to use :
  *  arrays
  *  document.getElementById()
  *  document.querySelector()
  *  addEventListener()
  *  ELEMENT.style.setProperty()
  *  Math.floor()
  *  Math.random()
  *  array.length

This project will be different in that instead of having a simple view and a hex view, I will have three views:
  * simple
  * rgb
  * hex

Additionally, instead of having different pages for each view, I plan to have everything in the same index.html page, and switch between views through the JS page only.

## Project Steps

To start I'm going to set up the HTML and CSS pages with a header, a title that'll show the color of the background, and a button to change the color of the background.  I'll then set up the JS page to listen for the button click and change the color to a chosen color.

Just like the original app, this one will be a simple color flipper that has a fixed, standard list of colors stored in an array.  I'll probably just use the colors of the rainbow and maybe a few extra. The colors will just be color names, not rgb or hex values.  The colors will be chosen at random when the user clicks on the button.

The next iteration, will be to use rgb and get random colors when the change color button is clicked.

The third iteration will use hex values chosen randomly when the change color button is clicked.

The original project called for using document.body.style.backgroundColor() to change the background color.  I decided that I wanted to use a variable in the CSS so that I could use the same color wherever I needed. This causedme to change what was being set to ELEMENT.style.setProperty(), where ELEMENT is the :root selector.

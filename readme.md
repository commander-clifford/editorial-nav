# Clifford Ryan Nelson's + Critical Mass

Take home assessment test:

##### SCENARIO:
You're building an interactive editorial piece about cities around the world, and want to include a
navigation component that will allow the reader to learn about a different city.
Create a simple, minimalist navigation bar based on the video example and JSON file provided. Match
the design as closely as you can. The navigation bar should have a sliding bar that indicates a selected
item, and that bar should resize itself to match the width of the selected item text.

* On resize, the sliding indicator bar should update its position and size to match text.
* Code should be optimized for Safari. Support for other browsers is not necessary.
* Please limit library usage. ES6 and CSS as much as possible. React and SASS are permissible.
* You will have 24 hours to complete the exercise.

##### BONUS:
Display the current time of the selected city. You have creative license
on how this should look and behave.

##### Example:
_slider-nav.mov_

##### Completed Assessment Git repo:
https://github.com/commander-clifford/editorial-nav/

##### Notes:

* Time Format: I formatted the time as a fairly standard AM/PM setup. This wasn't my first pass I left the old time in a comment that localized the date per location. I switched this because it didn't fit the user scenario well but I didn't want to delete the work.
* Scrolling: I added some scroll interaction with css 'vh' height hack. I added a blank element, that is taller than the page, in effort to force scrollability in the demo. Check out the 'sticky-ness' of the nav bar.
* JSON data: I added data to the JSON object to aid the timezone specs, among other things.
* JSON: I also modified the JSON file structure so I could import the file locally without having to run a server environment. I would have likely handled this with a fetch command if using something like React.
* RWD: I set a min-width on the root of the app because responsive web design was not a requirement. At about 900 pixel width the nav starts to break. If I were to adapt this nav: Instead of setting a min-width I would have used a media query to re-arrange the elements at a smaller screen size, likely with an expandable/collapsable side nav with vertically aligned link items.
* Resize: the line indicator will re-evaluate it's width/position when the screen size changes.
* ~~Ripple: I added a ripple effect because I saw a circle in the demo file: I assume it is an artifact of the recording or the web browser but I had an extra moment to fit it in anyway. (see ripple-artifact.png)~~ I decided to comment this effect out.

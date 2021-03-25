# Pre-work - *Memo-vania*

**Memo-vania** is a Light & Sound Memory game with an Undertale theme to apply for CodePath's SITE Program. 

Submitted by: **Qusai Ghabrah**

Time spent: **4** hours spent in total

Link to project: (https://glitch.com/edit/#!/memo-vania)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. (In my case, I used different pictures instead of lighting the old ones up)
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons (Due to dificulty in finding appropriate characters)
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added the charcater Sans from Undertale to the top of the page
- [x] Added elements (images) of Undertale characters to the game buttons
- [x] Added visuals for when the players guesses incorrectly (alert message with how many mistakes you can still afford represented by hearts)
- [x] Added custom fonts to the page


## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://github.com/QAGatPurdue/pre-work/blob/main/Ij9tfuDCOD.gif)


![](https://github.com/QAGatPurdue/pre-work/blob/main/2nd.gif)

The second GIF is to demonstrate the change of speed feature better.


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    https://www.computerhope.com/issues/ch001613.html
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
    https://stackoverflow.com/questions/7394884/css-how-do-you-stretch-to-fit-and-maintain-the-aspect-ratio
    https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
    https://www.google.com/imghp (all url's used to get the pictures are found in style.css, with one in the beginning of index.html)
    https://cartr.gitlab.io/undertale-fonts/
    https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts



2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

    Everything seemed straight forward and easy. I was following the instructions, and when I was done, I was working on adding my own touch to the website. That was until I started working on the time limit user story.

    The time limit seemed simple, but I could not really figure out where and when to call the setInterval() and clearInterval() functions, but I decided to start at the end of the stopTone() function. It also seemed to me that setInterval() and clearInterval() are not exactly the functions that I needed, even though it was given in the instructions. The alert message I was using to test setInterval() kept re-popping over and over again even though I was using clearInterval() too.

    I tried to look for the problem for 20 minutes and I was a little bit stressed, so I took a 5-minute music break, got me some coffee, and tried to visualize the execution path of the functions I was using. I even got my debugging duck to help me.

    After following this approach, I found out that I was calling setInterval() multiple times because of the playSequence() and I am only using clearInterval() on the most recent interval object. To solve that, I realized that clearing the interval object at the beginning of the stopTone() function will always lead to me only having the last interval object, which is the one that starts right after the last given tone in the sequence and exactly where I wanted my timer to start. This allowed me to bypass the problem caused by playSequence() and also allowed me to set up my timer in a way that resets the timer every time the player takes a guess It took some time, but there is nothing impossible when I have my music, my coffee, and my trusty debugging ducky.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    During this year, software and web development attracted my attention intensely. Before I got into Purdue, I decided to follow cybersecurity as a specialization in my Computer Science major. However, after the coding classes I took and the IOS development course offered by CodePath, I now know that I finally found my passion: writing code and creating products.

    As I worked on the submission, I asked myself if there was a way to use machine learning on my website to figure out which patterns (and size of patterns) are the most hard to remember so I can use them more frequently than other random patterns. I also thought about how transaction features are implemented, how complex animations are added to HTML elements, and whether there are new ways of interacting with websites other than clicking on buttons. I really find all of these questions interesting, but the one question that I feel is the most important out of them was how I can create an interactive user interface that gets people hooked on my website.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

    I would have spent the time on adding some Undertale sound effects instead of the tones, finding better images to use as the game buttons' backgrounds, and added some options for different difficulties (easy, normal, hard). I would have liked to have a settings tab where the player could choose the length of the pattern and how fast would it play. I also thought about adding an animation of Sans (the character at the top of the page) to make the page seem more interactive. I would've also liked to add some sound effects for when the player wins or losses the game.



## License

    Copyright Qusai Ghabrah

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

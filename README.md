## Website Performance Optimization portfolio project

After completing required Nanodegree courses on performance optimization I am attempting to address performance issues in this project.

My Goal: to complete this project before the end of this month.

Mary Eckmeier

Key elements to address: optimize index.html (per instructions from pagespeed insights)
Resized pizzeria.jpg into 2 sizes (one for index, and one for pizza)
Created a GULP workflow to compress all the files. and constructed a build folder

1. Forked repository.
2. Re configure git bash / as my computer failed since i took the course and I can't remember all the setup tasks.
    a. git init
    b. git clone <http link>
    c. git add
    d. git commit

To run a local server for viewing the app: I created a bat file with this command:
   python -m SimpleHTTPServer 8080
   and placed in the BUILD directory (i am using the root as my dev environment.)
   (continuing to look at browsersync to help with this task)

To create a http site for Pagespeed to evaluate, I used ngrok
(I did try to use the NGROK task in Gulp, but was not successful in implementing it)
    Run NGROK.cmd -- which brings up a new window and navigate to the BUILD directory and type
       ngrok http 8080
   I add a BUILD directory for the compressed files.

To test pagespeed insights - i copied the server.bat above to the build folder, so it would run these files instead.


####Part 2: Optimize Frames per Second in pizza.html
1. Identified that the biggest issue for running is the UpdatePositions code.
* Reduced the number of pizza objects
* Replaced queryselectorALL with getElementsByClassName
* Add structure to use requestAnimationFrame (based on things I got from the forums)
* Moved variable assignments outside of the loop structure.

2. Addressed issues in resize pizza slider tool
* Replaced queryselectorALL with getElementsByClassName
* moved variables outside the loop structure.

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

I will continue to work on the following in the next project
* automating with gulp by adding in watch files functionality
* using something to get gulp to do the pagespeed insights.
* using gulp to set up my local server

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).
Keeping these as I think I still need to read up on these tasks:

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>

# My Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 3| MVP (Oracle Cards)| Complete
|Day 4 & 5| MVP & Bug Fixes| Complete
|Day 5| Beautify + Final Touches | Complete
|Day 6| Present (DONE WOOHOO!) | Incomplete


## Project Description

This is my first portfolio website where I get to show my creativity and skills. I had a lot of fun playing with it, on the edge of going crazy at times but my willpower held up. There's something so satisfying about coding because you know that you added every single element that you see. The little animations, hover effects, subtle details, even if nobody notices, I still know I put the work in to get it to function.

I had a lot of difficulty with where to start because I felt a little overwhelmed. However, once I just started with the layout and focused on one section at a time, it slowly started coming together. Thanks to the help of Bootstrap, the GA instructional team, and google searches, I was able to put together a version of my website portfolio that I'm not ashamed of.

When you start at the top, you'll immediately notice the animated background where a glowing light follows your cursor. I was looking online for some guides/resources and I found this one that I included in my project. I can't take ownership for it because it's so complex but I was addicted to it like a cat and a laser beam. 

[Here's the link to where I found CSS animated background effects](https://www.sliderrevolution.com/resources/css-animated-background/)

[Here's the link to what I used as an example for the animated social media icons](https://codepen.io/michaelrossi/pen/NPRzwO)

[Here's the link for the Oracle Cards I used](https://www.aeclectic.net/tarot/cards/clair-de-lune-lenormand/#deck_info)

[Here's the link for the Half Page Image Slider Header from Bootstrap](https://startbootstrap.com/snippets/half-slider)

[Here's the link for the Bootstrap Navbar with Logo Image](https://startbootstrap.com/snippets/navbar-logo)

I used [Canva](https://www.canva.com/) for my custom logo.


## My Wireframes
I created some mock-ups of what my portfolio website will eventually look like... and I'm 80% sure I'll be changing this by the time we get to my end-product. But here's a rough draft! 

- [Mobile](https://imgur.com/YSZnNxd)
- [Tablet](https://imgur.com/v9KmAmT)
- [Desktop](https://imgur.com/q1TRXPa)

## Time/Priority Matrix 

[Link](https://imgur.com/OdLibY3)

For the basic skeleton, editing, layouts, animation, and game logic, I'm looking at an estimated 10 hours. However, I'm sure with the debugging and fluctuations in willpower, we'll see the final total hours that it takes for this project. 

#### MVP

- Create playable Oracle Card game 
- Flex/CSS Layouts
- Make sure all aspects of the page loads correctly
- Make sure interactive content works
- Ensure links are correctly added

#### PostMVP 

- Readability is A1
- Theme complete
- Incorporate some kind of UI/UX design
- Consistency in theme/aesthetics
- Continue to beautify the pages

## Functional Components (Oracle Cards)

Being ambitious and including a fully-functional Oracle card game so that it's a fun bonus accessory to my website. I think it'l show my extra flair, also I really like games. Oracle cards are for self-reflection and it's completely up to the person to interpret it how they'd like. I think the staying on the theme of self-reflection and playfulness is a great thing to incorporate into my portfolio. It adds a bit of "me" flair.

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | H | 1hr | 1hr |
| Oracle Card Game | H | 2hr | 2hr |
| Project Previews | H | 4hr | 5hr |
| Logo Nav Bar | H | 1.5hr | 2hr |  
| Other sections | M | 4hr | 6hr|
| Contact/Social Media | M | 2hr |  2hr |
| Total | H | 15.5hrs| 18hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Catalogue | M | 3hr | 2hr |
| Interactive Banner | M | 4hr | 3hr |
| Materialize | H | 4hr | 4hr |
| Bootstrap | H | 3hr | 3hr |
| Beautify Page | M | 3hr | 4hr |
| Total | H | 17hrs| 17hrs |

## Additional Libraries
Animated Wallpaper: https://cdnjs.cloudflare.com/ajax/libs/three.js/88/three.min.js

Social Media Footer: https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css

Bootstrap: https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
<div class="center">
<div id="social">    
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
  <h2 class = "social-header">Social Media</h2>
  <ul>
    <li class="facebook">
      <button class="border"><i class="fa fa-facebook"></i></button>
    </li>

    <li class="twitter">
      <button class="border"><i class="fa fa-twitter"></i></button>
    </li>

    <li class="instagram">
      <button class="border"><i class="fa fa-instagram"></i></button>
    </li>
  </ul>
</div>
  </div>

```

```
.center {
    background-color: black;
    display: table;
    width: 100%;
    height: 10vh;
  }
  .social-header {
      color: white;
      text-align: center;
      padding: 10px
  }
  
  #social {
    display: table-cell;
    vertical-align: middle;
    padding-bottom: 20px;
  }
  
  #social ul {
    text-align: center;
    padding-left: 0px;
    margin: 0 auto;
  }
  
  #social li {
    display: inline-block;
    list-style-type: none;
  }
  ```

## Issues and Resolutions
Where do I start...

It was a bit difficult at first working with Bootstrap because I wasn't sure how to integrate it with my HTML aspects. For example the animated background that is behind my "Hi! I'm Tiffany" was a nightmare to try to set up. I was panicking because I didn't know if I could have it so that it would overlap with the text without making the entire page explode from confusion.

Then when I was working on the social media icons, it probably took me about an hour to try to get the table and spacing correctly. To me, the table display has been always confusing to me but I knew I needed practice. So I had the CodePen open first to take a look at it. Then, I went to go try it myself without any help with the positioning. It took me a long time to get the spacing right but I finally got it after over an hour.

I also had a lot of trouble with the carousel template because it wouldn't accept my images and constantly showed a blank. The "inspect" tool ont he browser really saved me during the adjusting. I think this project is the most I've used the inspect element and I'm really happy I'm more comfortable with it.

I had some problems because I had created separate javascript/css files. Then I wondered if I could just include it in my HTML directly, rather than trying to link an external js/css file. 

I also fell into a rabbit hole where I wasted a lot of time working with SASS/SCSS... I spent hours trying to work and implement and use cool effects on my page to really WOW my viewer. At the end of the day, I didn't end up using any of these and so I semi-wasted my time. However, at least I know how to merge these files in my Terminal if i ever want to implement it into my future projects.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

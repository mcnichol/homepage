const articles = [{
    "id" : 2,
    "title": "It's Been A While",
    "category": "general",
    "date": "November 13, 2017",
    "content": [
        "A little over a month before a recent post..might be a stretch before receiving some updates.  I'll need to work on the speed of changes. As the winter weather comes closer to Chicago's urban sprawl I've learned there's a group sentiment of everyone migrating away and the city going into a productive state of hibernation. Perhaps I am entering into a mental hibernation phase of my own.",
        "Kind of a beautiful thing",
        "For moving quicker on the site, I've dug into a course from Tyler McGinnis on React Fundamentals. It's a subscription based service that isn't too bad. The fundamentals course is thorough. Ties everything together and covers some essentials but on the parts you may already now, it can be a little 'youthful'. I get the sense it was built with a specific timeline in mind and then things were adjusted after the fact. Despite the reality this just happens to be the way projects turn out and is understandable, it's slightly jarring.",
        "He has other things like React Native, React Router and a few others. It's worth checking out although I should mention it has a $20/month subscription fee. There are references to the free React Fundamentals course..they are not free, sorry you were too late.",
        "With this update I'm going to be adding mobile support. Using flexbox is an ideal approach towards laying out the user interface in any easy to reason about manner. I like SCSS for the more programmatic syntax which feels more natural while working within javascript.",
        "Interestingly enough it's a hop, skip, and jump from Lisp or Closure when you think about it from the nested syntax; the curly before, a little magic, some more curlies and you can walk away with a nice shiny {'thing': [{'thing':{'thing'... Implement Djikstra's two stack algorithm as a daily kata and all will be natural.",
        "So a mobile ready site, category tags, and then some information in the 'About Me' section. Those are the pieces that I know need some love at the moment. Having a filter that would easily organize on category would be nice..but first it'll need some categories! Also we'll need to deal with the 'media-sharing' links will require some state. An inexpensive store where I can throw a simple table would be ideal for that.",
        "Got the bill for AWS..$20 bucks for this site..maybe it doesn't seem like much but I know I can drive it down to at least below ten using EC2 directly. Currently I enjoy the convenience of Dockerfiles on Elastic Beanstalk a little too much...too much at least to let it go. We drop the instance size down first and iterate from there"
    ],
    "keywords": ["general", "blog"],
},{
    "id" : 1,
    "title": "Changes Changes Changes",
    "category": "general",
    "date": "October 04, 2017",
    "content": [
        "Styling has arrived!",
        "The front page is starting to look like a front page now. Thank goodness for that. Part of me wants to take a picture to look at the state it's in a year from now...",
        "Alright...brief timeout...picture taken. On the one year of this article I'll need to remind myself to write that article..slackbot perhaps. How about a calendar event for now.",
        "I don't really have an approach yet for inserting images into these articles. Currently everything is placed in a data file that exports a json object. This is imported into the appropriate pages that iterates over the articles to separate the 'model' from the 'view'.",
        "Ultimately I'd like to..I will (Have to commit right?) build out a web editor wherein I can type out an article and it will save it into the data file mapping to the JSON structure. I envision an editor similar to TinyMCE / CKEditor that I can conveniently type up a blog from my phone or on the go, touch a button or two, and really start pumping out some stuff.",
        "Before I get too far, I'll need to get this pipeline straightened out. I've already fallen guilty to being a little cowboy on this one. I'm using a Dockerfile and building off a Yarn base...needless to say I've been making small changes in the way I've configured webpack which broke in the linux node but worked fine on my Mac. Having the constant feedback from a dev pipeline will keep me in the good graces of good habit and prevent things from going untouched and getting too stale.",
        "For the pipeline, it's going to be just a basic Concourse pipeline. I've come to love it because of the flexibility and how well it plays to the strengths of full-stack engineers with a solid scripting and container foundation. Anything you can do in linux, you can do in concourse. They don't try to solve the world with plugins, but instead let you coherently organize your pipe using three basic premises. You have Jobs which consume Resources and perform Tasks. The job may be something like running all unit tests, the resource may be a git repository, and the task may be one or more scripts you kick off. This can output a resource which may or may not kick off other steps. It need not be sequential, some things occur in parallel, you decide. The UI is pretty slick and most importantly...clean.",
        "If I had to complain about one thing..it would be this.",
        "Polling",
        "Probably my biggest pet peeve. I think it reeks anytime I stumble across polling. I haven't touched it in a few months so things may have changed. I'm sure it's on their roadmap but boy just talking about it get's me fired up. If it's still there I'll throw a blog together about making a controller endpoint that can be a trigger which we'll use as a webhook. Perhaps a good idea no matter what the state of concourse webhooks to alleviate this brute force approach to getting updates. It's 2017 folks! Seriously, we're better than this..",
        "Ok </rant>",
        "Good news is I've updated the Dockerfile to point to the correct endpoint. Also dealt with a small issue around embedding the index.html launch page  inside the dist folder...because /dist get's generated when running `webpack` and the index.html file is not part of this step...we can see there is a problem. Either move it out of /dist (which I placed it there for a technical reason) or create a process to copy an html template as part of the webpack step..or just keep write it from scratch each time and tell myself it's for muscle memory...heyoh!"
    ],
    "keywords": ["general", "blog"],
}, {
    "id" : 0,
    "title": "Getting Started",
    "category": "general",
    "date": "September 22, 2017",
    "content": [
        "Alright, we're started.",
        "Right now it's setup mode getting everything off the ground, expect things to change moving forward. Using the simplicity of ReactJS components alongside the chaos that is transpiling, we've got some SCSS, ES6 running through Webpack using several module loaders...simply put, a boatload of excitement leaving us with a single bundled file. Is it worth it?  Yes!",
        "This is the place that I can share my passions. Along the way my hope is to make it easy to re-use so you can have a platform to share your passions.",
        "Over the years my passions have turned into concrete (and heartfelt) viewpoints. To say that I'm opinionated is an understatement. I would consider myself driven towards closing the gap between desire and willpower. I think that's a critical aspect to a meaningful and fulfilling life.",
        "What do I mean by this?",
        "In the smallest aspects of your life you show your true nature. How you eat your cereal, how many times you hit the snooze on your alarm clock, how consistent you are in making it to the gym or going on that run you committed to.",
        "These inconsistencies can seem small...almost hard to spot (especially in ourselves). We easily see our strengths and struggle to see these inconsistencies. They are a problem, a problem that compounds over time robbing us of achieving our goals. If we see it, then we must change it...that change is hard. In other words, if we lack the discipline to endure change yet don't want to consider ourselves crazy, we have to ignore these inconsistencies so that we can continue operating as we are without having to change anything!",
        "What is it that Einstein said, 'Crazy is doing the same thing over and over expecting a different result.'",
        "Nailed it...",
        "This blog will be an exercise for me in product engineering the world around me so I can achieve the success I need to unify my limited discipline with my seemingly unbounded desire. Along this journey I'll be everaging technology to guide my behaviors to achieve the goals I know I want, even when the habits I've created are fighting to move in the opposite direction.",
        "This engineering will consist of many different realms, so I've created dedicated sections for each and I'll call them out with tags and keywords.",
        "In doing this, you should be able to quickly navigate to the areas that interest you most, or fork this away and customize it to fit your style."
    ],
    "keywords": ["general", "blog"],
}];

module.exports = articles;
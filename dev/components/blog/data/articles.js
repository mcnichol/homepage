const articles = [{
    "id" : 1,
    "title": "Changes Changes Changes",
    "category": "general",
    "date": "October 04, 2017",
    "content": [
        "Styling has arrived!",
        "The front page is starting to look like a front page now. Thank goodness for that. Part of me wants to take a picture to look at the state it's in a year from now...",
        "alright, it's done ",
        "I don't really have an approach yet for inserting images into these articles. Currently everything is placed in a data file that exports a json object. This is imported into the appropriate pages that iterates over the articles to separate the 'model' from the 'view'.",
        "Ultimately I'd like to....I will (Have to commit right?) build out a web editor wherein I can type out an article and it will save it into the data file mapping to the JSON structure. I envision an editor similar to TinyMCE / CKEditor that I can conveniently type up a blog from my phone or on the go, touch a button or two, and really start pumping out some stuff.",
        "Before I get too far, I'll need to get this pipeline straightened out. I've already fallen guilty to being a little cowboy on this one. I'm using a Dockerfile and building off a Yarn base...needless to say I've been making small changes in the way I've configured webpack which broke in the linux node but worked fine on my Mac. Having the constant feedback from a dev pipeline will keep me in the good graces of good habit and prevent things from going untouched and getting too stale.",
        "For the pipeline, it's going to be just a basic Concourse pipeline. I've come to love it because of the flexibility and how well it plays to the strengths of full-stack engineers with a solid scripting and container foundation. Anything you can do in linux, you can do in concourse. They don't try to solve the world with plugins, but instead let you coherently organize your pipe using three basic premises. You have Jobs which consume Resources and perform Tasks. The job may be something like running all unit tests, the resource may be a git repository, and the task may be one or more scripts you kick off. This can output a resource which may or may not kick off other steps. It need not be sequential, some things occur in parallel, you decide. The UI is pretty slick and most importantly...clean.",
        "If I had to complain about one thing....it would be this.",
        "Polling",
        "Probably my biggest pet peeve. I think it reeks anytime I stumble across polling. I haven't touched it in a few months so things may have changed. I'm sure it's on their roadmap but boy just talking about it get's me fired up. If it's still there I'll throw a blog together about making a controller endpoint that can be a trigger which we'll use as a webhook. Perhaps a good idea no matter what the state of concourse webhooks to alleviate this brute force approach to getting updates. It's 2017 folks! Seriously, we're better than this....",
        "Ok </rant>",
        "Good news is I've updated the Dockerfile to point to the correct endpoint. Also dealt with a small issue around embedding the index.html launch page  inside the dist folder...because /dist get's generated when running `webpack` and the index.html file is not part of this step...we can see there is a problem. Either move it out of /dist (which I placed it there for a technical reason) or create a process to copy an html template as part of the webpack step....or just keep write it from scratch each time and tell myself it's for muscle memory...heyoh!"
    ],
    "keywords": ["general", "leadership", "product engineering"],
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
    "keywords": ["general", "leadership", "product engineering"],
}];

module.exports = articles;
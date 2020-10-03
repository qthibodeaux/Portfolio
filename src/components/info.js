
const projects = [    
    {
        "name": "React Full Stack Skeleton",
        "headline": "Full Stack Template",
        "caption": "A Full Stack template that uses React, ExpressJS, Knexjs, postgres, and other technologies. I use this as a jumping point to start personal full stack projects.",
        "hasGithub": true,
        "githubrepo": "https://github.com/qthibodeaux/ReactFullStackSkeleton",
        "hassite": "hidden",
        "site": "",
        "gif": "ReactSkele.gif",
        "tags": {"html5/css": true, "react":true, "expressjs":true, "postgres":true, "axios": true},
    },
    {
        "name": "Sidelined",
        "headline": "React Webpage",
        "caption": "Sidelined is a Power Rangers themed card game. The genius of the card game is the reduction of luck to empower players skill of deduction. Designed to take advantage of React-Redux's strengths of state management. The front end process handle various states including various list for cards. Back end state management adjust calculations on the fly. Presenting real time information on the cards that are in play to, which helps the player wager on making efficient or uncanny decisions.",
        "hasGithub": true,
        "githubrepo": "https://github.com/qthibodeaux/Sidelined",
        "hassite": "hidden",
        "site": "",
        "gif": "sideline.gif",
        "tags": {"html5/css": true, "bootstrap":true, "react":true, "redux":true }
    },
    {
        "name": "Comment Moderator 2020",
        "headline": "Full Stack Application",
        "caption": "Comment Moderator is an snarky take on internet the internet commenting community. The user of the site is assigned the duties to moderate an online forum. Using handlebars for the front end, users are able to navigate lorem news articles/comment sections. Express.js is used to handle backend REST request and update the backend database.",
        "hasGithub": true,
        "githubrepo": "https://github.com/KevinWithrow/SleekForum",
        "hassite": "hidden",
        "site": "",
        "gif": "forum.gif",
        "tags": {"html5/css": true, "bootstrap": true, "handlebars":true, "expressjs":true, "postgres":true }
    },
    {
        "name": "Pokemon",
        "headline": "Front End Webpage",
        "caption": "The Pokemon webpage is an ambitous Bootstrap page to simulate the battle system of the actual game. Using AJAX request for API information from two sites. The first acquires Pokemon sprites from a fan site. The other API request is to GIPHY to acquire an appropriate gif to mimic battle animations.",
        "hasGithub": true,
        "githubrepo": "https://github.com/timevans8392/Phase-1",
        "hassite": "visible",
        "site": "https://optimistic-sammet-666216.netlify.app/",
        "gif": "pokemon.gif",
        "tags": {"html5/css": true, "bootstrap": true }
    },
    {
        "name": "Champions Coffee",
        "headline": "Front End Webpage",
        "caption": "Everyone loves coffee. Emulating popular sites using basic tools to create a lively and aesthetically pleasure front end webpage.",
        "hasGithub": true,
        "githubrepo": "https://github.com/qthibodeaux/DCFirstGroupProject",
        "hassite": "hidden",
        "site": "",
        "gif": "coffee.gif",
        "tags": {"html5/css" : true }
    },
]

const blogs = [
    {
        title: "Spooky SZN",
        image: "skelecrop.png",
        subtitle: "Still at it!",
        p1: "This week’s update came a little later than I planned. I am currently juggling multiple projects that I am trying to finish. I don’t have an issue juggling the projects and I have done well with time management. I just have to remember that programming takes much longer than I think it is going to take. Even when I have it planned out, have my resources readily available, and reduce scope of the project, it will rarely come together as fast as I hope it is.",
        p2: "On that note, when I am comfortable and in my zone, I can crank out some code! I am getting pretty efficient in my comfort areas. I am happy with my progress in working with Bootstrap, React, Express, and knex. It is really encouraging and more than a sign that I can do it. But I know I can be great at this coding thing.",
        p3: "On the opposite side of that, I have to remember to push myself. Don’t just settle for doing the things I am good at. But to practice those new skills and become comfortable with those. It took some tooling to get comfortable with Bootstrap. I know my blindspots and will continue to improve. I am really grateful for the circle I have. My mentors continue to push me but remain great resources of knowledge when I am in a rut. ",
        p4: "Wrapping this up, I am excited for the projects I have coming up. The few solo projects are coming to a close. One is a major project that would’ve taken me WEEKS to finish earlier this year. I cranked out most of the code last weekend before the week’s task beat me up and delayed my progress. Soon I will also start collaborating with some of my bootcamp friends. Those guys are awesome and it’s fun to communicate and watch us grow together. ",
        p5: "",
        date: "October 1, 2020",
    },
    {
        title: "Be Someone",
        image: "besomeonecrop.jpg",
        subtitle: "",
        p1: "Excitement! Major site update. I decided to add a blog and update notes to my site. The purpose of my blog is to log my journey as a software developer and express my thoughts on my experience/journey. My personal site has undergone a few major revisions and will continue to do so. I have more ideas for what I want to do and will chronicle that here as I continue to develop in software development.",
        p2: "I have gotten so much more comfortable with React and Bootstrap. I am not fighting with alignments much anymore, which allows me to play around with javascript which is more my preference. I love backend equations and algorithms. Figuring out new and inventive ways to manipulate and change data is exciting. I like the challenge.",
        p3: "I have gotten back into C#, getting reacquainted with the language. It is like riding a bike. The transition back was not as hard as I thought. Even though it is a much more strictly typed language, it still feels familiar.",
        p4: "Planned site changes add recent projects I have been working on. That section is pretty sparse, so I definitely want to get that packed. Also, I want to flesh out the older projects. The gifs are nice but the dom manipulation or dynamic state changes needs to be put on full display. It will be fun implementing that into the site. ",
        p5: "Software development is fun. I’ve enjoyed the learning experience the past year. I want to continue to grow. I want to continue to challenge myself. I want to try to make some cool stuff. I want to Be Someone. If you’ve made it this far, thank you for reading. ",
        date: "September 24, 2020",
    },
]

const updates = [
    {date: "1 Octobner 2020 ", content: "Update: Added ReactFullStackSkeleton Projec, updated Blog, and changed the updates tab."},
    {date: "24 September 2020 ", content: "Update: Addded tabs to main component. Three tabs for Projects, Blog, and Site Update. Added React component for each tab."},
]

export { blogs, projects, updates }
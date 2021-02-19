import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Language from '@material-ui/icons/Language'

// import Digital from '../assets/image/digital.gif'

export default {
    name: 'Sungpil An',
    title: 'Full-Stack Developer',

    email: 'ansungpil1@gmail.com',
    phone: '706-987-0141',
    location: 'Johns Creek, GA',

    socials: {
        GitHub: {
            link: 'https://github.com/ahnlok',
            text: 'Click Here',
            icon: <GitHubIcon />,
        },

        LinkedIn: {
            link: 'https://www.linkedin.com/in/an-sungpil-95ab8490/',
            text: 'Click Here',
            icon: <LinkedInIcon />,
        },

        Facebook: {
            link: 'https://www.facebook.com/sungpil.an.9',
            text: 'Click Here',
            icon: <FacebookIcon />,
        },

        Instagram: {
            link: 'https://www.instagram.com/sung_an_/',
            text: 'Click Here',
            icon: <InstagramIcon />,
        },
    },

    about:
        "Greetings, I am an upcoming Full Stack Developer familiar with wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Collaborative team player with excellent technical abilities. Also, I am always eager to learn new programming languages and tools.",       

    experiences: [
        {
            title: 'Junior Sous Chef - Wallse',
            date: 'Nov 2019 - Oct 2020',
            description: 'Develope seasonal menu items, train new line cooks, and manage protein and sauce sections.'
        },
        {
            title: 'Entremet - Marea',
            date: 'May 2019 - Nov 2019',
            description: 'Develope seasonal menu items, train new line cooks, and manage entremet sections.'
        },
        {
            title: 'Chef de Partie - Public Kitchen by Jean-George',
            date: 'Dec 2017 - May 2019',
            description: 'Managing team of eight line cooks with sous chefs during the service, create new seasonal menus, and train new line cooks.'
        },
        {
            title: 'Social Media Associate - TIC Restaurant Group',
            date: 'Jan 2017- Dec 2017',
            description: 'Managing Facebook, Twitter, Instagram, and Yelp pages of each restaurant, train new interns, and connect with various influencer for social media marketing purpose.'
        },
    ],

    educations: [
        {
            title: 'Georgia Tech Full-Stack Bootcamp',
            date: 'Dec 2020 - Mar 2021',
            description: 'Certificate, Full-Stack Development'
        },
        {
            title: 'Institute of Culinary Education',
            date: 'Mar 2016 - Oct 2016',
            description: 'Diploma, Culinary Arts and Restaurant Management'
        },
        {
            title: 'University of Kansas',
            date: 'Aug 2011 - Dec 2015',
            description: 'Bachelor, Journalism & History'
        },
        {
            title: 'Columbus Magnet High School',
            date: 'Aug 2008 - May 2011',
            description: 'Top high school in the state of Georgia in 2010'
        },
    ],

    skills: [
        {
            title: "Front-End",
            description: [
                "HTML5",
                "CSS",
                "Bootstrap",
                "Materialize",
                "Material UI",
                "Javascript",
                "React JS",
            ],
        },
        {
            title: "Back-End",
            description: [
                "Node JS",
                "Python",
            ],
        },
        {
            title: "Database",
            description: [
                "Firebase",
                "My SQL",
                "Mongo DB",
                "AWS",
            ],
        },
        {
            title: "Source Control",
            description: [
                "Git",
                "GitHub",
            ]
        }
    ],

    address: '10020 Grandview Square',

     projects: [
        {   
            // Project 1
            tag: 'Front-End',
            image: '../images/digital.gif',
            title: 'Digital Coffee',
            caption: 'HTML5, CSS(Bootstrap), JQuery, API, AJAX',
            description: 'Simple API/AJAX project utilizing HTML5/CSS and Jquery to improve blendness of Google Search page with weather information, and randomly generated quotes and images.',
            links: [
                {link: 'https://ahnlok.github.io/digital-coffee/', icon: <Language />},
                {link: 'https://github.com/ahnlok/digital-coffee', icon: <GitHubIcon />},
            ] 
                
        },
        {
            // Project 2
            tag: 'Front-End',
            image:'../images/bb.gif',
            title: 'Breaking Bad Character Searcher',
            caption: 'React, HTML5, CSS, JavaScript, API, AJAX',
            description: 'This app uses the Breaking Bad API utilizing React hooks. This program allows user to search for their favorite Breaking Bad character information by searching names of the characters. Lastly, this is a practice using the example from the Traversy Media video Breaking Bad API. Video link is in the Credit section of ReadMe.',
            links: [
                {link: 'https://ahnlok.github.io/breaking-bad-api-react/', icon: <Language />},
                {link: 'https://github.com/ahnlok/breaking-bad-api-react', icon: <GitHubIcon />},
            ] 
                
        },
        {
            // Project 3
            tag: 'Back-End',
            image: '../images/fit.gif',
            title: 'Fitness Tracker',
            caption: 'MongoDB/mongoose',
            description: 'With the use of MongoDB and Mongoose, this app allows users to track their workout information by "add", "continue", "complete". "see statistics" depends on API paths',
            links: [
                {link: 'https://pacific-mesa-01605.herokuapp.com/?id=6022b16a5a8abd00150fb5d4', icon: <Language />},
                {link: 'https://github.com/ahnlok/workout-tracker', icon: <GitHubIcon />},
            ] 
                
        },
        {   
            // Project 4
            tag: 'Front-End',
            image: '../images/employeed.gif',
            title: 'Employee Directory',
            caption: 'React, HTML5, CSS, JavaScript, API, and AJAX',
            description: 'With the use of the "Random User API": https://randomuser.me/, This program allows user to search for the employees information by searching employees name',
            links: [
                {link: 'https://ahnlok.github.io/employee-directory/', icon: <Language />},
                {link: 'https://github.com/ahnlok/employee-directory', icon: <GitHubIcon />},
            ]      
        },
        {   
            // Project 5
            tag: 'Front-End',
            image: '../images/example.gif',
            title: '3D Darth Vader Card',
            caption: 'HTML5, CSS, JavaScript',
            description: 'This is "3D Darth Vader Card" using HTML5, CSS, and Javascript with the use of "rotate" and "transform" function in Javascript',
            links: [
                {link: 'https://ahnlok.github.io/darth-vader-3D-card/', icon: <Language />},
                {link: 'https://github.com/ahnlok/darth-vader-3D-card', icon: <GitHubIcon />},
            ]      
        },
        {   
            // Project 6
            tag: 'Full-Stack',
            image: '../images/freshdev.gif',
            title: 'Fresh Dev',
            caption: 'Node.JS, MySQL, HTML5, CSS, JavaScript, API, AJAX',
            description: 'Fresh-Dev is a online platform for students to showcase their work and portfolios for recruiters and hiring managers to view and search for base on specific programming languages',
            links: [
                {link: 'https://fresh-dev.herokuapp.com/', icon: <Language />},
                {link: 'https://github.com/ahnlok/fresh-dev', icon: <GitHubIcon />},
            ]      
        },

        {   
            // Project 7
            tag: 'Back-End',
            image: '../images/employee.gif',
            title: 'Employee Management Tracker',
            caption: 'MySQL(inquirer), Node.JS JavaScript',
            description: 'This program allows the user to view, add, delete, and update: employee, department, and role.',
            links: [
                // {link: 'https://fresh-dev.herokuapp.com/', icon: <Language />},
                {link: 'https://github.com/ahnlok/employee-tracker', icon: <GitHubIcon />},
            ]      
        },

        {   
            // Project 8
            tag: 'Full-Stack',
            image: '../images/notetaker.gif',
            title: 'Note Taker',
            caption: 'Node.JS (express), JavaScript, HTML5, CSS',
            description: 'This program allows the user to write, save, and delete notes.',
            links: [
                {link: 'https://infinite-inlet-33096.herokuapp.com/', icon: <Language />},
                {link: 'https://github.com/ahnlok/note-taker', icon: <GitHubIcon />},
            ]      
        },
        {   
            // Project 8
            tag: 'Full-Stack',
            image: '../images/burger.gif',
            title: 'Eat Burger',
            caption: 'Node.JS, MySQL, ORM, Handlebar JavaScript, HTML5, CSS',
            description: "This program allows user to 'Add' or 'Pick' burgers from the burger list. If the user is decided to 'Eat' the burger, click 'Eat' button, then the user's choice of burger will move to 'Burgers That You Ate' list. Moreover, if the user is full, the user can simply click 'I'm Full' button, then the burger will move back to 'Burger List",
            links: [
                {link: 'https://stormy-bayou-11683.herokuapp.com/', icon: <Language />},
                {link: 'https://github.com/ahnlok/eat-burger', icon: <GitHubIcon />},
            ]      
        },
    ]
};
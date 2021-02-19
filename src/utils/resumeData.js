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
            caption: 'HTML5, CSS(Bootstrap), JQuery, API, and AJAX',
            description: 'Simple API/AJAX project utilizing HTML5/CSS and Jquery to improve blendness of Google Search page with weather information, and randomly generated quotes and images.',
            links: [
                {link: 'https://ahnlok.github.io/digital-coffee/', icon: <Language />},
                {link: 'https://github.com/ahnlok/digital-coffee', icon: <GitHubIcon />},
            ] 
                
        },
        {
            // Project 2
            tag: 'Front-End',
            image:'/digital.gif',
            title: 'Digital Coffee',
            caption: 'HTML5, CSS(Bootstrap), JQuery, API, and AJAX',
            description: 'Simple API/AJAX project utilizing HTML5/CSS and Jquery to improve blendness of Google Search page with weather information, and randomly generated quotes and images.',
            links: [
                {link: 'https://ahnlok.github.io/digital-coffee/', icon: 'Digital Coffee Page'},
                {link: 'https://github.com/ahnlok/digital-coffee', icon: <GitHubIcon />},
            ] 
                
        },
        {
            // Project 3
            tag: 'Back-End',
            image: '/digital.gif',
            title: 'Digital Coffee',
            caption: 'HTML5, CSS(Bootstrap), JQuery, API, and AJAX',
            description: 'Simple API/AJAX project utilizing HTML5/CSS and Jquery to improve blendness of Google Search page with weather information, and randomly generated quotes and images.',
            links: [
                {link: 'https://ahnlok.github.io/digital-coffee/', icon: 'Digital Coffee Page'},
                {link: 'https://github.com/ahnlok/digital-coffee', icon: <GitHubIcon />},
            ] 
                
        },
        {   
            // Project 4
            tag: 'Back-End',
            image: '/digital.gif',
            title: 'Digital Coffee',
            caption: 'HTML5, CSS(Bootstrap), JQuery, API, and AJAX',
            description: 'Simple API/AJAX project utilizing HTML5/CSS and Jquery to improve blendness of Google Search page with weather information, and randomly generated quotes and images.',
            links: [
                {link: 'https://ahnlok.github.io/digital-coffee/', icon: 'Digital Coffee Page'},
                {link: 'https://github.com/ahnlok/digital-coffee', icon: <GitHubIcon />},
            ] 
                
        },
    ]
};
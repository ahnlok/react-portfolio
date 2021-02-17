import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

export default {
    name: 'Sungpil An',
    title: 'Full-Stack Developer',

    email: 'ansungpil1@gmail.com',
    phone: '706-987-0141',
    location: 'Johns Creek, GA',

    socials: {
        GitHub: {
            link: 'https://github.com/ahnlok',
            text: 'MyGithub',
            icon: <GitHubIcon />,
        },

        LinkedIn: {
            link: 'https://www.linkedin.com/in/an-sungpil-95ab8490/',
            text: 'MyLinkedIn',
            icon: <LinkedInIcon />,
        },

        Facebook: {
            link: 'https://www.facebook.com/sungpil.an.9',
            text: 'MyFacebook',
            icon: <FacebookIcon />,
        },

        Instagram: {
            link: 'https://www.instagram.com/sung_an_/',
            text: 'MyInstagram',
            icon: <InstagramIcon />,
        },
    },
};
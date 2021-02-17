import { Typography } from '@material-ui/core';
import React from 'react';
import './Profile.css';
import ProfileImg from '../../assets/image/profile.jpg'

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>
                    Sungpil An
                </Typography>
                <Typography className='title'>
                    Full-Stack Developer
                </Typography>
            </div>

            <figure className='profile_image'>
                <img src={ ProfileImg } alt=""/>
            </figure>

            <div className='profile_information'>
                Timeline
                <br />
                <button>Download CV</button>
            </div>
        </div>
    );
};

export default Profile;

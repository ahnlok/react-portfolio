import { Typography } from '@material-ui/core';
import React from 'react';
import CustomTimeline from '../Timeline/Timeline'
import './Profile.css';
import ProfileImg from '../../assets/image/profile.jpg'
import resumeData from '../../utils/resumeData';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>
                    {resumeData.name}
                </Typography>
                <Typography className='title'>
                    {resumeData.title}
                </Typography>
            </div>

            <figure className='profile_image'>
                <img src={ ProfileImg } alt=""/>
            </figure>

            <div className='profile_information'>
                <CustomTimeline />
                <br />
                <button>Download CV</button>
            </div>
        </div>
    );
};

export default Profile;

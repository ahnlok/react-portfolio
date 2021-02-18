import React from 'react'
import  { Grid, Paper, TextField, Typography } from '@material-ui/core';
import CustomTimeline, { CustomTimeLineSeparator } from '../../components/Timeline/Timeline';
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work';
import resumeData from '../../utils/resumeData';
import SchoolIcon from '@material-ui/icons/School';
import CustomButton from '../../components/Button/Button';

import './Resume.css';

const Resume = () => {
    return (
        <>
            {/* About Me */}
            <Grid container className='section pb_45 pt_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
                </Grid>
            </Grid>

            {/* Education & Experience */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>Resume</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className='resume_timeline'>
                    {/* Experience */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Experience' icon={<WorkIcon />}>
                                {resumeData.experiences.map(experience => (
                                <TimelineItem>
                                    <CustomTimeLineSeparator />
                                    <TimelineContent className='timeline_content'>
                                        <Typography className='timeline_title'>{experience.title}</Typography>
                                        <Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
                                        <Typography variant='body2' className='timeline_description'>{experience.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    {/* Education */}
                        <Grid item sm={12} md={6}>
                        <CustomTimeline title='Education' icon={<SchoolIcon />}>
                                {resumeData.educations.map(education => (
                                <TimelineItem>
                                    <CustomTimeLineSeparator />
                                    <TimelineContent className='timeline_content'>
                                        <Typography className='timeline_title'>{education.title}</Typography>
                                        <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                                        <Typography variant='body2' className='timeline_description'>{education.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Skills */}
            <Grid 
                container 
                className='section graybg pb_45 p_50'>
                    <Grid item xs={12}>
                        <Grid container justify="space-between" spacing={3}>
                        {resumeData.skills.map(skill => (
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper elevation={0} className='skill'>
                                <Typography variant='h6' className='skills_title'>
                                    {skill.title}
                                </Typography>
                                {skill.description.map(element => (
                                    <Typography variant='body2' className='skill_description'>
                                        <TimelineDot variant={'outlined'} className='timeline_dot' />
                                        {element}
                                    </Typography>
                                ))}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
                        
        {/* Contact */}
        <Grid container spacing={7} className='section pt_45 pb_45'>
            {/* Contact Form */}
            <Grid item xs={12} lg={7}>
                <Grid container>
                    <Grid item className='section_title mb_30'>
                        <span></span>
                        <h6 className='section_title_text'>Contact Form</h6>
                    </Grid>
                    <Grid item xs={12}> 
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth name='name' label='Name' />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth name='email' label='E-Mail' />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth name='message' label='Message'  multiline rows={4}/>
                            </Grid>
                            <Grid item xs={12}>
                                <CustomButton text='Submit' />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* Contact Info */}
            <Grid item xs={12} lg={5}>
                <Grid container>
                    <Grid item className='section_title mb_30'>
                        <span></span>
                        <h6 className='section_title_text'>Contact Information</h6>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                        <Grid item xs={12}>
                            {/* Name */}
                            <Typography className='contactInfo_item'>
                                <span>Sungpil An</span>
                            </Typography>
                            </Grid>
                            {/* Address */}
                            <Grid item xs={12}>
                                <Typography className='contactInfo_item'>
                                    <span>Address: </span> {resumeData.address}
                                </Typography>
                            </Grid>
                            {/* Phone */}
                            <Grid item xs={12}>
                                <Typography className='contactInfo_item'>
                                    <span>Phone: </span> {resumeData.phone}
                                </Typography>
                            </Grid>
                            {/* Email */}
                            <Grid item xs={12}>
                                <Typography className='contactInfo_item'>
                                    <span>Email: </span> {resumeData.email}
                                </Typography>
        
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Social Media Icon */}
                    <Grid item xs={12}>
                        <Grid container className='contactInfo_socialsContainer'>
                            {Object.keys(resumeData.socials).map(key => (<Grid item className='contactInfo_social'>
                                <a href={resumeData.socials[key].link}>{resumeData.socials[key].icon}</a>
                            </Grid>
                            ))}
                        </Grid>
                    </Grid>           
                </Grid>
            </Grid>
        </Grid>
    </>
    )
}

export default Resume;

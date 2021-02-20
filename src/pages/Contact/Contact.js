
import  { Grid, Paper, TextField, Typography } from '@material-ui/core';
import CustomTimeline, { CustomTimeLineSeparator } from '../../components/Timeline/Timeline';
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work';
import resumeData from '../../utils/resumeData';
import SchoolIcon from '@material-ui/icons/School';
import CustomButton from '../../components/Button/Button';
import './Contact.css';

const Contact = () => {
    return (
        <div>
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
        </div>
    )
}

export default Contact

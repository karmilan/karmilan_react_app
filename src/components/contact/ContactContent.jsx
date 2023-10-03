import React from 'react'
import {
    Paper,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    Divider,
    ListItemText,
    Grid,
    IconButton
} from "@mui/material";
import {EmailRounded, Facebook, GitHub, Instagram, LinkedIn, LocalPhoneRounded} from '@mui/icons-material';
import {globalStyle} from '../../style/GlobalStyles';
import { contactStyle } from './ContactStyle';

const ContactContent = () => {
    return (
        <>
            <Paper elevation={8}
                sx={contactStyle.contactPaperStyle}>
                <List sx={
                    {
                        width: '100%',
                        maxWidth: 360,
                        // bgcolor: '#fff',
                    }
                }>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar> {/* <ImageIcon /> */}
                                <EmailRounded/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={
                                {
                                    ...globalStyle.textColor,
                                    '.MuiListItemText-secondary': {
                                        ...globalStyle.textColor
                                    }
                                }
                            }
                            primary="Email"
                            secondary="delftkarmilan@gmail.com"/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar> <LocalPhoneRounded /> </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={
                                {
                                    ...globalStyle.textColor,
                                    '.MuiListItemText-secondary': {
                                        ...globalStyle.textColor
                                    }
                                }
                            } primary="Phone" secondary="0772392866"/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar> <GitHub /> </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={
                                {
                                    ...globalStyle.textColor,
                                    '.MuiListItemText-secondary': {
                                        ...globalStyle.textColor
                                    }
                                }
                            } primary="Github" secondary="@karmilan"/>
                    </ListItem>
                </List>

                <Grid container justifyContent='center'>
                    <IconButton href='https://www.linkedin.com/in/mahendrarasa-karmilan-0552b119b/'>
                        <LinkedIn color='primary' />
                    </IconButton>

                    <IconButton href='https://www.facebook.com/mahendrarasa.karmilan'>
                        <Facebook color='primary' />
                    </IconButton>

                    <IconButton href='https://www.instagram.com/mahenthirarasakarmilan/'>
                        <Instagram color='primary' />
                    </IconButton>
                </Grid>
            </Paper>
        </>
    )
}

export default ContactContent

import {Card, CardContent, Grid, Typography} from '@mui/material'
import React from 'react'
import {experienceStyle} from './ExperienceStyle'
import {globalStyle} from '../../style/GlobalStyles'
// import logo from '../../logo.svg'

const ExperienceContent = ({logo, role, date, company, info}) => {
    
    return ( 
        <>
            <Card sx={
                    experienceStyle.experienceCard
                }
                elevation={8}>
                <CardContent>
                    <Grid container>
                        <Grid xs={4}>
                        
                            <img src={logo } width='100%' />
                            
                        </Grid>
                        <Grid xs={8}
                            m='auto'>
                            <Typography component='h1'
                                sx={
                                    globalStyle.textColor
                                }
                                fontSize='24px'>{role}</Typography>
                            <Typography component='h4' color='rgb(169, 173, 184)' fontSize='13px'>{date}</Typography>
                            <Typography component='h4'
                                sx={
                                    globalStyle.textColor
                                }
                                fontSize='13px'>{company}</Typography>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid xs={12}
                            mt={2}>
                            <Typography component='p' color='rgb(169, 173, 184)' textAlign='justify'>&nbsp;&nbsp;&nbsp;{info}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default ExperienceContent

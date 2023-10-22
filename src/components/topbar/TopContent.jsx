import React from 'react'
import {Grid, Typography} from '@mui/material'
import {globalStyle} from '../../style/GlobalStyles'
import {topBarStyle} from './TopBarStyle'
import Button from '@mui/material/Button';
import resume from '../../assets/Resume-Karmilan-FullStack-v1.pdf'

const TopContent = () => {
    // const resume = '../../assets/Resume-Karmilan-FullStack-v1.pdf'
    return (
        <>
            <Grid sx={
                topBarStyle.topContent
            }>
                <Typography component='h1'
                    sx={
                        globalStyle.textColor
                    }
                    fontSize={{xs:'20px', md:'30px'}}>Mr. MAHENDRARASA KARMILAN</Typography>
                <Typography component='p'
                    sx={
                        globalStyle.textColor
                }>A professional Software Developer</Typography>

                <Grid container
                    mt={{xs:3, md:4}}>
                    {/* <Button href={resume} size="large" variant="contained" */}
                    {/* <Button href='https://bitly.ws/WwL6' size="large" variant="contained" */}
                    <Button href='https://bitly.ws/Y5CV' size="large" variant="contained"
                        sx={{
                            ...globalStyle.secondaryBgColor, '&:hover':{backgroundColor:'#1a0b2ed1'}
                    }}>Dowload CV</Button>

                    <Button href='https://github.com/karmilan' size='large' variant="outlined"
                        sx={
                            {
                                ...globalStyle.textColor,
                                borderColor: '#ffff',
                                ml: 2, '&:hover':{borderColor:'#ffff'}
                            }
                    }>my work</Button>

                </Grid>
            </Grid>
        </>
    )
}

export default TopContent

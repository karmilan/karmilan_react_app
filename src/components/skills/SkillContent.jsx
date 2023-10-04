import {Box, Grid, LinearProgress, Typography} from '@mui/material'
import React from 'react'
import {globalStyle} from '../../style/GlobalStyles'
import {skillStyle} from './SkillStyle'

const SkillContent = () => {
    return (<>
        <Grid mt='10px' >
            <Typography component='h2'
                sx={
                    globalStyle.textColor
                }
                fontSize='30px'>Skills</Typography>

            <Grid mt={2}>
                <Typography component='h5'
                    sx={
                        globalStyle.textColor
                }>React</Typography>
                <LinearProgress sx={
                        skillStyle.skillProgressStyle
                    }
                    variant="determinate"
                    value={75}/>


                <Typography component='h5'
                    sx={
                        globalStyle.textColor
                }>Node js</Typography>
                <LinearProgress sx={
                        skillStyle.skillProgressStyle
                    }
                    variant="determinate"
                    value={50}/>

                <Typography component='h5'
                    sx={
                        globalStyle.textColor
                }>AWS</Typography>
                <LinearProgress sx={
                        skillStyle.skillProgressStyle
                    }
                    variant="determinate"
                    value={65}/>

                <Typography component='h5'
                    sx={
                        globalStyle.textColor
                }>DynamoDB</Typography>
                <LinearProgress sx={
                        skillStyle.skillProgressStyle
                    }
                    variant="determinate"
                    value={70}/>

                <Typography component='h5'
                    sx={
                        globalStyle.textColor
                }>MongoDB</Typography>
                <LinearProgress sx={
                        skillStyle.skillProgressStyle
                    }
                    variant="determinate"
                    value={50}/>

                <Typography component='h5'
                    sx={
                        globalStyle.textColor
                }>AdobeXD</Typography>
                <LinearProgress sx={
                        skillStyle.skillProgressStyle
                    }
                    variant="determinate"
                    value={80}/>

            </Grid>
        </Grid>
    </>)
}

export default SkillContent

import {Grid, Typography} from '@mui/material'
import React from 'react'
import {topBarStyle} from './TopBarStyle'
import dpq from '../../assets/dp.jpg'
import TopContent from './TopContent'


const TopContainer = () => {
    const styleGr = {
        color: 'green',
        // backgroundUrl: ({dp})
    }
    return (
        <>
           <Grid sx={topBarStyle.topContainer}>
            <TopContent />
           </Grid>
        </>
    )
}

export default TopContainer

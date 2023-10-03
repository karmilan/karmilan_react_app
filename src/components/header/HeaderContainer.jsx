import {Grid, IconButton, Typography} from '@mui/material'
import React from 'react'
import HeaderContent from './HeaderContent'
import {MenuRounded} from '@mui/icons-material'

const HeaderContainer = () => {
    return (
        <>
            {/* <Grid container
                spacing={2}
                height='70px'
                mt='auto'
                bgcolor='#1A0B2E'
                color='#ffff'
                justifyContent={{md:'space-evenly'}}
                alignItems={{md:'center'}}
                flexDirection={{xs:'column', md:'row'}}>
                <Grid container justifyContent='space-evenly' alignItems='center'>
                    <Typography fontFamily='Alata' fontSize='32px'>KARMILAN</Typography>
                    <IconButton sx={{color:'#ffff'}}>
                        <MenuRounded />
                    </IconButton>
                </Grid>
                <Grid  bgcolor='red'>
                    <HeaderContent />
                </Grid>
            </Grid> */}
            <HeaderContent />
        </>
    )
}

export default HeaderContainer

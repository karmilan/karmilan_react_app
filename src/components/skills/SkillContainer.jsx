import {Grid} from '@mui/material'
import React from 'react'
import skillImg from '../../assets/skillimg.jpg'
import { skillStyle } from './SkillStyle'
import SkillContent from './SkillContent'

const SkillContainer = () => {
    return (
        <>
            <Grid container sx={{background:'radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0.00) 100%)'}} flexDirection={{xs:'column', md:'row'}} alignItems={{xs:'center'}} my='130px' >
                <Grid xs={12} md={6} container justifyContent='center'>
                    <img src={skillImg} style={skillStyle.skillImgStyle} />
                </Grid>
                <Grid xs={12} md={6} width='100%' padding={{xs:2}}>
                    <SkillContent />
                </Grid>
            </Grid>
        </>
    )
}

export default SkillContainer

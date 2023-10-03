import { Grid, Typography } from '@mui/material'
import React from 'react'
import { globalStyle } from '../../style/GlobalStyles'
import ProjectContent from './ProjectContent'

const ProjectContainer = () => {
  return (
   <>
    <Grid ml='20px'>
    <Typography sx={globalStyle.textColor} component='h2' fontSize='30px' textAlign='center'>Projects</Typography>
    </Grid>
    <Grid m={3}  mb='130px' sx={{background: 'radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0.00) 100%)'}}>
        <ProjectContent />
    </Grid>
    </>
  )
}

export default ProjectContainer
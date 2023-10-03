import React from 'react'
import { globalStyle } from '../../style/GlobalStyles'
import { Grid, Typography } from "@mui/material";
import ContactContent from './ContactContent';

const ContactContainer = () => {
  return (
    <>
    <Grid ml='20px'>
    <Typography sx={globalStyle.textColor} component='h2' fontSize='30px' textAlign='center'>Contact</Typography>
    </Grid>
    <Grid m={3} sx={{background: 'radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0.00) 100%)'}}>
        <ContactContent />
    </Grid>
    </>
  )
}

export default ContactContainer
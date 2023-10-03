import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { globalStyle } from '../../style/GlobalStyles';
import proj2 from '../../assets/proj2.jpg'
import proj3 from '../../assets/proj3.PNG'
import proj4 from '../../assets/proj4.PNG'
import proj5 from '../../assets/proj5.jpeg'
import proj1 from '../../assets/proj1.png'
import { Card, Grid } from '@mui/material';

export default function ProjectContent() {
  return (
   <>
   <Grid  maxHeight={450} sx={{overflowY:'auto'}}>
    {/* <ImageList sx={{height: 450 }}> */}
    <Grid container>
      {itemData.map((item) => (
         <Grid md={6}>
           <Card sx={{m:1, backgroundColor:'rgb(16 20 24)'}} elevation={8}>
           <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>Technologies: {item.author}</span>}
            position="below"
            sx={{color:globalStyle.textColor}}
          />
        </ImageListItem>
           </Card>
        </Grid>
      ))}
      </Grid>
    {/* </ImageList> */}
    </Grid>
   </>
  );
}

const itemData = [
  {
    img: `${proj1}`,
    title: 'Todo APP',
    author: 'React, Node, Graphql, AWS and MUI',
  },
  {
    img: `${proj2}`,
    title: 'Phone Book',
    author: 'React, Bootstrap, MockAPI',
  },
//   {
//     img: `${proj3}`,
//     title: 'Camera',
//     author: '@helloimnik',
//   },
  {
    img: `${proj4}`,
    title: 'MERN Todo',
    author: 'MonboDB, ExpressJs, React Node',
  },
  {
    img: `${proj5}`,
    title: 'Food Ordering UI',
    author: 'HTML, CSS, Bootstrap',
  },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//   },

];

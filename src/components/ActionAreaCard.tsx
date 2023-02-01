import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';

interface Props{
  heading: string,
  content: string,
}

export default function ActionAreaCard({ heading, content }:Props) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Button size="small" color="primary">
          report
        </Button>
      </CardActions>
    </Card>
  );
}
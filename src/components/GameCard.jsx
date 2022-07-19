import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SportsScoreIcon from '@mui/icons-material/SportsScore';




const GameCard = ({editors_choice,genre,platform,score,title}) => {
  return (
    <Card sx={{ maxWidth: 345 ,cursor:"pointer"}}>
      <p></p>
    <CardMedia
      component="img"
      height="140"
      image="./images/banner.jpg"
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {platform}
      </Typography>
    </CardContent>
    <CardActions>
        <SportsScoreIcon />
        <p>{score }</p>
        <p>{genre}</p>
    </CardActions>
  </Card>
  )
}

export default GameCard
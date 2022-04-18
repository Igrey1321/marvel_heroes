import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import { CardHeroProps } from './types';
import { useStyles } from './index.style';
import { useNavigate } from 'react-router-dom';

export default function CardHero({ data }: CardHeroProps) {
  const { image, name, occupation, gender, id } = data;
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card className={classes.wrapper} onClick={() => navigate(`/hero/${id}`)}>
      <CardActionArea>
        <CardMedia
          className={classes.image}
          component="img"
          image={image}
          alt={name}
        />

        <CardContent>
          <Typography
            className={classes.text}
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
          </Typography>

          <Typography
            className={classes.text}
            variant="body1"
            color="text.secondary"
          >
            {gender}
          </Typography>

          <Typography
            className={classes.text}
            variant="body2"
            color="text.secondary"
          >
            {occupation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './course-card.scss';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CourseCard = () => {
  const classes = useStyles();

  return (
    <div className="card">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://ezoterikabg.net/wp-content/uploads/2018/08/ezoterikabg.net-2018-%D0%A0%D0%B5%D0%BF%D1%82%D0%B8%D0%BB%D0%B8%D1%82%D0%B5-%D1%81%D0%B0-%D0%A1%D1%80%D0%B5%D0%B4-%D0%9D%D0%B0%D1%81-%D0%A1%D0%B0%D0%BC%D0%BE-%D0%B7%D0%B0-%D0%9F%D0%BE%D1%81%D0%B2%D0%B5%D1%82%D0%B5%D0%BD%D0%B8-32-1024x543.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              How to be a repteloid
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
            <div className="card__time">
            <span className="card__time-duration">15 min</span>
            <span className="card__time-date">July 24</span>
          </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall"
            to="/courses/edit"
            >
            Edit
           </Link>
          <Button size="small" color="primary">
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CourseCard;
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

const CourseCard = ({ date, id, authors, imageSrc, title, description, duration }) => {
  const classes = useStyles();
  const authorsText = authors.join(' ,');

  return (
    <div className="card">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imageSrc}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {authorsText}
            </Typography>
            <div className="card__time">
              <span className="card__time-duration">{duration}</span>
              <span className="card__time-date">{date}</span>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall"
            to={`/courses/edit/${id}`}
          >
          Edit
           </Link>
        <Button size="small" color="primary">
          Delete
          </Button>
        </CardActions>
      </Card>
    </div >
  );
}

export default CourseCard;
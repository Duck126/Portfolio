import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/Portfolio';


function DisplayCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            End Game
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Try It!
          </Button>
          <Button size="small" color="primary">
            Read Me
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

DisplayCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisplayCard);
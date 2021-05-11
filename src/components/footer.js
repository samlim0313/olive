import * as React from "react"
import { Typography, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
  },
  footer: {
    paddingTop: '3rem',
    color: theme.palette.grey[400],
  }
}));

function Footer () {
  const classes = useStyles();
  return (
    <Container maxWidth='md'>
      <Grid container direction='column' alignItems='center' className={classes.footer}>
        <Grid item container justify='space-around' alignItems='stretch'>
          <Grid item>
            <Typography component={Link} to='/about' color='inherit' variant='body2' className={classes.link}>
              교회소개
            </Typography>
          </Grid>
          <Grid item>
            <Typography component={Link} to='/sermon' color='inherit' variant='body2' className={classes.link}>
              설교
            </Typography>
          </Grid>
          <Grid item>
            <Typography component={Link} to='/forest' color='inherit' variant='body2' className={classes.link}>
              올리브 숲
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant='overline'>
            &copy; {(new Date().getFullYear())} Olive Mission Church
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}


export default Footer

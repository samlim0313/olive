import * as React from "react"
import { AppBar, Container, Toolbar, Grid, MenuList, MenuItem, Paper, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Link } from 'gatsby-theme-material-ui';

import logo from '../images/logo.svg';

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: theme.palette.action.hover,
  },
  menuHover: {
    '& .MuiGrid-root:hover .MuiPaper-root': {
      display: 'block'
    }
  },
  menu: {
    display: 'none',
    position: 'absolute',
    '& .MuiGrid-item:hover .MuiPaper-root': {
      display: 'block'
    }
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    padding: '10px',
    width: '100px',
  },
  gap: {
    flexGrow: 1,
  },
}));

function Header () {
  const classes = useStyles();
  return (
    <AppBar color='default'>
      <Container maxWidth='md'>
        <Toolbar>
          <Grid container alignItems='center' spacing={1} className={classes.menuHover}>
            <Grid item className={classes.center}>
              <Link to='/' className={classes.center}>
                <img src={logo} alt='olive vision church' className={classes.logo}></img>
              </Link>
            </Grid>
            <Grid item className={classes.gap} />
            <Grid item>
              <Button to='/' activeClassName='MuiButton-containedPrimary'>
                홈
              </Button>
            </Grid>
            <Grid item>
              <Button to='/about' activeClassName='MuiButton-containedPrimary'>
                교회소개
              </Button>
              <Paper className={classes.menu}>
                <MenuList>
                  <MenuItem>섬기는 분들</MenuItem>
                  <MenuItem>예배안내</MenuItem>
                  <MenuItem>오시는 길</MenuItem>
                </MenuList>
              </Paper>
            </Grid>
            <Grid item>
              <Button to='/sermon' activeClassName='MuiButton-containedPrimary'>
                설교
              </Button>
              <Paper className={classes.menu}>
                <MenuList>
                  <MenuItem>주일예배</MenuItem>
                  <MenuItem>~</MenuItem>
                  <MenuItem>~</MenuItem>
                </MenuList>
              </Paper>
            </Grid>
            <Grid item>
              <Button to='/forest' activeClassName='MuiButton-containedPrimary'>
                올리브 숲
              </Button>
              <Paper className={classes.menu}>
                <MenuList>
                  <MenuItem>~</MenuItem>
                  <MenuItem>~</MenuItem>
                  <MenuItem>~</MenuItem>
                </MenuList>
              </Paper>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header

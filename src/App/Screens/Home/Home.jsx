import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import BidCard from '../../Components/BidCard';
import ThemeLayout from '../../Components/ThemeLayout';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { stringify } from 'uuid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchActiveBids } from '../../Redux/Actions/home';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 function Album() {
  const classes = useStyles();
const history = useHistory()
const allBids = useSelector(({home}) => home.allBids)
const dispatch = useDispatch()
const [auctionData, setauctionData] = useState([])

useEffect(() => {
  dispatch(fetchActiveBids())



}, [])
  return (
    <>
    <div >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Digital Auction
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Digital Auction makes it easy and safe to buy and sell unclaimed vehicles from the comfort of your home or office.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" onClick={()=> history.push('/signup')} color="primary" >
                    Sign Up today!
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    View all auctions
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} >
          {/* End hero unit */}
          <Grid container spacing={4}>
            {allBids.map((item) => (
              <BidCard  data={item} key={item.auctionId}/>
            ))}
          </Grid>
        </Container>
        </>
    
  );
}
export default Album

import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  CardHeader,
} from "@material-ui/core";
import { Colors, Helpers } from "../Theme";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function BidCard() {
  const classes = useStyles();
  return (
    <Grid click item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardHeader subheader="Lot #:44"></CardHeader>
        <CardMedia
          className={classes.cardMedia}
          image="https://c.imgix.net/ItemPicsOrganized/2021/April/14/512759_1.jpg?w=800&auto=format&q=75"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" component="h2">
          <Link className="card-header" to={`/detail/${"wqweqe"}`}>Cashier Station - 96"x 32"x 42"</Link>
          </Typography>
          <Typography>Auction: Old Country Buffet - Kent</Typography>
        </CardContent>
        <div>
          <div
            style={{
              backgroundColor: "#C5E8C1",
              height: 53,
              flexDirection: "row",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#395836",
                height: 53,
                width: 60,fontSize:14,fontWeight:'bold',
                textAlign: "center",
                color: Colors.white,
              }}
            >
                <div style={{marginTop:17}}>
              BID
              </div>
              <div className={"auction-anchor"} ></div>
            </div>
            <div style={{marginRight:10}}>
              <div style={{fontSize:14,fontWeight:'bold',color:'#555'}}>Current Bid</div>
              <div style={{fontSize:18,fontWeight:'bold',textAlign:'right'}}>50.00</div>
            </div>
          </div>
        </div>
      </Card>
    </Grid>
  );
}

export default BidCard;

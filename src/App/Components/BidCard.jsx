import React from "react";
import {
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  makeStyles,
  CardHeader,
} from "@material-ui/core";
import { Card, Button, Typography } from "antd";

import { Colors, Helpers } from "../Theme";
import { Link, useHistory } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setBidding, setBiddingsOnClick } from "../Redux/Actions/home";
const { Title } = Typography;
const { Meta } = Card;
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
  cardItem: {
    borderRadius: 12,
    boxShadow: "0 2px 8px rgb(0 0 0 / 8%)",
    border: "none",
    overflow: "hidden",
  },
  holder: {
    position: "relative",
    padding: 10,
  },
}));

function BidCard({type="normal",data}) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch()
  function onPress(id) {
const biddingData = {
  currentBid: data.currentBid,
  auctionId: data.auctionId,
  biddings: [],
  currentBidEndTime:data.endDateTime*1000
}
    dispatch(setBiddingsOnClick(biddingData))
    history.push(`/detail/${id}`,{selectedItem:data});
  }
  return (
    <Grid onClick={() => onPress(data.auctionId)} item xs={12} sm={6} md={type==='category'?3:4}>
      <Card
        hoverable
        className={classes.cardItem}
        cover={
          <img
          style={{height:250}}
            alt="example"
            src={data.images[0]}
          />
        }
        actions={[]}
      >
        <div className={classes.holder}>
          <Meta
          style={{height:100,overflow:'hidden'}}
            title={data.auctionItemName!== undefined?data.auctionItemName:"Cashier Station"}
            description={data.description}
          />
          <Button type="text" className="btn-heart" icon={<HeartOutlined />} />
        </div>
        <div>
          <div
            style={{
              backgroundColor: "#01182c14",
              height: 53,
              flexDirection: "row",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: Colors.primary,
                height: 53,
                width: 60,
                fontSize: 14,
                fontWeight: "bold",
                textAlign: "center",
                color: Colors.white,
              }}
            >
              <div style={{ marginTop: 17 }}>BID</div>
              <div className={"auction-anchor"}></div>
            </div>
            <div style={{ marginRight: 10 }}>
              <div style={{ fontSize: 14, fontWeight: "bold", color: "#555" }}>
                Current Bid
              </div>
              <div
                style={{ fontSize: 18, fontWeight: "bold", textAlign: "right" }}
              >
                ${data.currentBid}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Grid>
  );
}

export default BidCard;

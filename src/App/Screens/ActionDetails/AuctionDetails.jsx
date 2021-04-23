import React, { useState, useRef } from "react";
// import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import {
  AppBar,
  Toolbar,
  //   Typography,
  Button,
  Breadcrumbs,
  makeStyles,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Divider,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  withStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import Info from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import { Colors } from "../../Theme";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { Typography, Alert } from "antd";
import { Statistic } from "antd";
import { Timeline,notification } from 'antd';

import {
  ShopOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  LoadingOutlined,CheckCircleTwoTone,
  PlusCircleTwoTone,
  MinusCircleTwoTone,
} from "@ant-design/icons";
import ThemeLayout from "../../Components/ThemeLayout";

const { Countdown } = Statistic;
const { Title } = Typography;
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 10, 10, 15),
  },
}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    fontWeight: "bold",
  },
}))(TableCell);
function AuctionDetails() {
  const openNotification = () => {
    notification.open({

      icon:<CheckCircleTwoTone twoToneColor={Colors.green} />,
      message: 'Bid Placed',
      description:
        'Your bid has been placed successfully. To claim the product, please wait until the bid time is over',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  const data = [
    { name: "Lot #", value: "2" },
    { name: "Auction ID:", value: "51112" },
    { name: "Seller:", value: "Ehli Auctions" },
    { name: "Quantity", value: "1" },
    { name: "Buyers Premium:", value: "15%" },
    { name: "Item Unit:", value: "1" },
    { name: "Current Bid:", value: "$ 50.00 No Reserve" },
    { name: "Bid Increment:", value: "$ 10.00" },
    { name: "Next Bid:", value: "$ 60.00" },
  ];
  const dataa = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
  const [selectedImage, setSelectedImage] = useState(0);
  const classes = useStyles();
  const ref = useRef(null);

  const goToImage = (item) => {
    setSelectedImage(item);
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideTo(item);
    }
  };
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
  const [currentBid, setcurrentBid] = useState(635);
  return (
    <div>
      <div style={{width:'100%',backgroundColor:'#e6f7ff'}}>
      <Alert style={{width: "50%",margin: 'auto'}} action={
        <Button size="small" type="text">
          Set reminder
        </Button>
      } message="This vehicle is in an auction that starts Thu, Apr 22 at 7:30 PM." banner type="info" showIcon />
      </div>
      {/* <div
        style={{
          height: 41,
          backgroundColor: "#E9F6FE",
          textAlign: "center",
          fontSize: 14,
          paddingTop: 5,
        }}
      >
        <Info color="primary" />
        This vehicle is in an auction that starts Thu, Apr 22 at 7:30 PM.
        <Button href="#text-buttons" color="primary" style={{ marginTop: -3 }}>
          Set reminder
        </Button>
      </div> */}
      <div className={classes.heroContent}>
        <Title>Cashier Station - 96"x 32"x 42"</Title>
        <Grid container spacing={2} md="10">
          <Grid item md="8">
            <Card>
              <Swiper ref={ref} {...params}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
                  <img
                    src="https://c.imgix.net/ItemPicsOrganized/2021/April/14/512759_1.jpg?w=800&auto=format&q=75"
                    alt=""
                  />
                ))}
              </Swiper>
            </Card>
            <Grid item xs={12}>
              <Grid container style={{ marginTop: 10 }}>
                {/* <Grid item spacing={3} style={{ marginTop: 10 }}> */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
                  <div
                    onClick={() => goToImage(item)}
                    style={{
                      height: 80,
                      width: 80,
                      overflow: 'hidden',
                      borderRadius: 5,
                      border:
                        selectedImage === item
                          ? "3px solid green"
                          : "0px solid green",

                      // borderColor:selectedImage===item?'red':'#000',
                      marginRight: 10,
                      marginBottom: 5,
                      // backgroundImage:`url("https://c.imgix.net/ItemPicsOrganized/2021/April/14/512759_1.jpg?w=800&auto=format&q=75")`
                    }}
                  >
                    <img
                      style={{
                        height: 80,
                        width: 80,
                        borderRadius: 5,
                      }}
                      src="https://c.imgix.net/ItemPicsOrganized/2021/April/14/512759_1.jpg?w=800&auto=format&q=75"
                    />
                  </div>
                ))}
                {/* </Grid> */}
              </Grid>
            </Grid>

            <Grid item md="4">
              <Title level={4}>Seller Info</Title>
              <List>
                {[
                  {
                    title: "AutoReturn - Indianapolis",
                    icon: <ShopOutlined />,
                  },
                  { title: "abc@gmail.com", icon: <MailOutlined /> },
                  { title: "+13173084479", icon: <PhoneOutlined /> },
                  {
                    title: "2451 S. Belmont Ave Indianapolis, In 46221",
                    icon: <EnvironmentOutlined />,
                  },
                ].map((item) => (
                  <ListItem>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      style={{ color: Colors.lightGrey }}
                      primary={item.title}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
          <Grid item md="4">
            <Card style={{ textAlign: "center", paddingTop: 20 }}>
              <div className="bid-amount">$ 625</div>
              <div style={{ fontSize: 14, marginBottom: 20 }}>
                Current Bid (97 bids)
              </div>
              <Divider />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <MinusCircleTwoTone
                  twoToneColor={currentBid === 635 ? "#ddd" : Colors.secondary}
                  style={{ fontSize: 40 }}
                  onClick={() => setcurrentBid(currentBid - 15)}
                />
                <Title
                  style={{
                    marginRight: 20,
                    marginLeft: 20,
                    marginTop: 5,
                    color: Colors.lightGrey,
                  }}
                  level={2}
                >
                  $ {currentBid}
                </Title>
                <PlusCircleTwoTone
                  onClick={() => setcurrentBid(currentBid + 15)}
                  twoToneColor={Colors.secondary}
                  style={{ fontSize: 40, color: Colors.secondary }}
                />
              </div>
              <Button
              onClick={()=>openNotification()}
                variant="contained"
                color="secondary"
                style={{ margin: 20, color: Colors.white }}
              >
                Place Bid
              </Button>
              <Divider />
              <CardContent className={classes.cardContent}>
                <Table className={classes.table} aria-label="customized table">
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <TableCell align="right">{row.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <Countdown
                    title="Time Left"
                    value={deadline}
                    format="HH:mm:ss"
                  />
                  <Timeline style={{ marginTop:20 }}>
                  {[0, 1, 2, 3, 4].map((item) => ( <Timeline.Item><strong>$17,350</strong> by Bidder{" "}
                          <em class="timestamp">4 minutes ago</em></Timeline.Item>))}
   
  </Timeline>
                  {/* <Timeline style={{ marginLeft: -100 }}>
                    {[0, 1, 2, 3, 4].map((item) => (
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot color="primary" />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          {" "}
                          <strong>$17,350</strong> by Bidder{" "}
                          <em class="timestamp">4 minutes ago</em>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline> */}
                </div>
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
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#555",
                      }}
                    >
                      Current Bid
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        textAlign: "right",
                      }}
                    >
                      50.00
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AuctionDetails;

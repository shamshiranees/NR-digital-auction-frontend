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
import { Typography, Alert, Row, Col, Progress } from "antd";
import { Statistic } from "antd";
import { Timeline, notification } from "antd";
import Countdown from "react-countdown";
import {
  ShopOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  LoadingOutlined,
  CheckCircleTwoTone,
  PlusCircleTwoTone,
  MinusCircleTwoTone,
} from "@ant-design/icons";
import ThemeLayout from "../../Components/ThemeLayout";
import flag from "../../../assets/Images/flagCheck.png";
import { useEffect } from "react";
import moment from 'moment'
import { useDispatch, useSelector } from "react-redux";
import { getAuctionBiddings, placeNewBid } from "../../Redux/Actions/home";
import { months } from "moment";
import { initiateSocket,sendMessage,onNewMessage} from './SocketIO';
  // import { io } from "socket.io-client";
  // CommonJS
  import { io } from "socket.io-client";

  
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





function AuctionDetails({location,match}) {





  
// console.log("----route",location.state.selectedItem);
// console.log("----route",match.params.id);
const auctionId = match.params.id
const selectedData = location.state.selectedItem
const dispatch = useDispatch()
const biddings = useSelector(({home}) => home.auctionBiddings)
console.log("ppppppp",biddings);



useEffect(() => {
  initiateSocket()
  onNewMessage().then(ff=>{
    console.log("gggpppppp",ff);
    
  })
dispatch(getAuctionBiddings(match.params.id))
return () => {
 
}
}, [])

  const openNotification = (currentBid) => {
  const existingBids = JSON.parse(JSON.stringify(biddings))

const newbid =  {
  auctionId:auctionId,
userId:'xxxxx',
  username:'shamshir anees',
  bidAmount:currentBid,
  bidTime: moment().unix()
}
const newArray = existingBids.concat([newbid])

const params = { currentBid:currentBid,
auctionId:auctionId,biddings:newArray}
console.log("params",params);
//  dispatch(placeNewBid(params))
sendMessage('sss',"shasmhir Anees")
    notification.open({
      icon: <CheckCircleTwoTone twoToneColor={Colors.green} />,
      message: "Bid Placed",
      description:
        "Your bid has been placed successfully. To claim the product, please wait until the bid time is over",
      onClick: () => {
        console.log("Notification Clicked!");
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
    { name: "Lot #", value: selectedData.lotNo},
    { name: "Auction ID:", value: selectedData.auctionId },
    { name: "Seller:", value:selectedData.sellerName },
    { name: "Quantity", value: selectedData.quantity },
    { name: "Buyers Premium:", value: selectedData.buyersPremium+'%' },
    { name: "Item Unit:", value: selectedData.itemUnit },
    { name: "Current Bid:", value: "$ 50.00 No Reserve" },
    { name: "Bid Increment:", value: "$"+selectedData.bidIncrement },
    { name: "Next Bid:", value: "$"+ Number(selectedData.bidIncrement+selectedData.currentBid) },
  ];
 
  const [selectedImage, setSelectedImage] = useState(0);
  const [progress, setProgress] = useState(10);
  const [deadline, setdeadline] = useState(selectedData.endDateTime*1000);
  const classes = useStyles();
  const ref = useRef(null);

  const goToImage = (item) => {
    setSelectedImage(item);
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideTo(item);
    }
  };
  const bidTimesUp = (item) => {
    setProgress(0);
  };
  const onCounterValueChange = (item) => {
    console.log(item.seconds);

    setProgress(item.seconds);
    setdeadline(Date.now() + item.total);
  };

  const [currentBid, setcurrentBid] = useState(selectedData.currentBid);
  return (
    <div>
      
      {selectedData.startDateTime<new Date() &&
      <div style={{ width: "100%", backgroundColor: "#e6f7ff" }}>
        <Alert
          style={{ width: "50%", margin: "auto" }}
          message={
            <span>
              Bidding starts <strong>{moment(selectedData.startDateTime*1000).format('llll')}</strong>
              <a>
                <strong> Set reminder</strong>
              </a>
            </span>
          }
          banner
          type="info"
          showIcon
        />
      </div>}

      <Row
        gutter={{ xs: 16, sm: 16, md: 24, lg: 32 }}
        style={{ marginTop: 30 }}
      >
        <Col className="gutter-row" span={16}>
          <Title>{selectedData.auctionItemName}</Title>
          <Card>
            <Swiper ref={ref} {...params}>
              {selectedData.images.map((item) => (
                <img
                style={{height:'auto'}}
                  src={item}
                  alt=""
                />
              ))}
            </Swiper>
          </Card>

          <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
            {selectedData.images.map((item,index) => (
              <Col span={3}>
                <div
                  onClick={() => goToImage(index)}
                  style={{
                    height: 80,
                    width: 80,
                    overflow: "hidden",
                    borderRadius: 5,
                    border:
                      selectedImage === index
                        ? "3px solid green"
                        : "0px solid green",

                    marginRight: 10,
                    marginBottom: 5,
                  }}
                >
                  <img
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 5,
                    }}
                    src={item}
                  />
                </div>
              </Col>
            ))}
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col>
              <Title level={4}>Seller Info</Title>
              <List>
                {[
                  {
                    title: selectedData.sellerName,
                    icon: <ShopOutlined />,
                  },
                  { title: selectedData.sellerEmail, icon: <MailOutlined /> },
                  { title: selectedData.sellerPhone, icon: <PhoneOutlined /> },
                  {
                    title: selectedData.sellerAddress,
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
            </Col>
          </Row>
        </Col>

        <Col className="gutter-row" span={8}>
          <Card style={{ textAlign: "center", paddingTop: 20 }}>
            {progress === 0 ? (
              <div>
                <img src={flag} style={{ height: 150, width: 150 }} />
                <div className="bid-amount">SOLD $ {selectedData.currentBid}</div>
              </div>
            ) : (
              <div>
                <div className="bid-amount">${selectedData.currentBid}</div>
                <div style={{ fontSize: 14, marginBottom: 20 }}>
                  Current Bid (97 bids)
                </div>
                <Divider />

                {selectedData.startDateTime>new Date() &&   <Countdown
                  className="ant-statistic-content"
                  onComplete={bidTimesUp}
                  daysInHours={true}
                  date={deadline}
                  onTick={(s) => onCounterValueChange(s)}
                />
                }
                {progress < 10 ? (
                  <Progress
                    percent={10 - progress === 0 ? 100 : (10 - progress) * 10}
                    size="small"
                    status="exception"
                    showInfo={false}
                  />
                ) : (
                  <Divider />
                )}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <MinusCircleTwoTone
                    twoToneColor={
                      currentBid === selectedData.currentBid ? "#ddd" : Colors.secondary
                    }
                    style={{ fontSize: 40 }}
                    onClick={() => currentBid === selectedData.currentBid ?setcurrentBid(currentBid):setcurrentBid(currentBid - selectedData.bidIncrement)}
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
                    $ {currentBid + selectedData.bidIncrement}
                  </Title>
                  <PlusCircleTwoTone
                    onClick={() => setcurrentBid(currentBid + selectedData.bidIncrement)}
                    twoToneColor={Colors.secondary}
                    style={{ fontSize: 40, color: Colors.secondary }}
                  />
                </div>
                <Button
                  onClick={() => openNotification(currentBid + selectedData.bidIncrement)}
                  variant="contained"
                  color="secondary"
                  style={{ margin: 20, color: Colors.white }}
                >
                  Place Bid
                </Button>
              </div>
            )}
            <Divider />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Timeline style={{ marginTop: 35, marginBottom: -20 }}>
                {biddings.map((item) => (
                  <Timeline.Item>
                    <strong>${item.bidAmount}</strong> by Bidder
                    <em class="timestamp">4 minutes ago</em>
                  </Timeline.Item>
                ))}
              </Timeline>
            </div>
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
            </CardContent>
            {/* <div>
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
            </div> */}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AuctionDetails;

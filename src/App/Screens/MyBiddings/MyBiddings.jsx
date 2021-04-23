import React from "react";
import { Tabs, Typography, Card, Image, Tag, Row, Col } from "antd";
import MyBiddingCard from "../../Components/MyBiddingCard";
import Item from "antd/lib/list/Item";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function MyBiddings() {
  return (
    <Row>
      <Col  >
      <Title>My Biddings</Title>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="All" key="1">
          {[0,1,2,3,4,5,6].map(item=>(


<MyBiddingCard/>
          ))}
        </TabPane>
        <TabPane tab="Favorites" key="2">
        {[0,1,2,3,4,5,6].map(item=>(


<MyBiddingCard favorite={true}/>
          ))}
        </TabPane>
        <TabPane tab="Active Bids" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      </Col>
    </Row>
  );
}

export default MyBiddings;

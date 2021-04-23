import React from 'react'
import { Tabs, Typography, Card, Image, Tag } from "antd";
import {
    HeartFilled,HeartOutlined
  } from "@ant-design/icons";
import { Colors } from '../Theme';
const { Title, Text } = Typography;
function MyBiddingCard({favorite=false}) {
    return (
        <Card
        hoverable
        style={{
          width: 400,
          height: 100,
          padding: "0px !important",
          borderRadius: 8,
          overflow: "hidden",marginTop:10
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Image
            style={{ height: 100, width: 100 }}
            src="https://c.imgix.net/ItemPicsOrganized/2021/April/14/512759_1.jpg?w=800&auto=format&q=75"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              marginTop: 5,
            }}
          >
            <Text
              style={{ maxWidth: 200, height: 20, overflow: "hidden" }}
              strong
            >
              Cashier Station - 96"x 32"x 42"
            </Text>
            <Text>Ant Design (default)</Text>
            <Text>Last bid: 4 minutes ago</Text>
            <Tag style={{ width: 60 }} color="green">
              Active
            </Tag>
          </div>
          <div>
          {favorite&& <HeartFilled style={{color:Colors.red,float:'right',marginRight:10,marginTop:10}}  />}
          <Title style={{ marginTop: 25, marginRight: 10 }} level={3}>
            $625
          </Title>
          </div>
        </div>
      </Card>
    
    )
}

export default MyBiddingCard

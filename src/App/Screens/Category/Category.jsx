import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import { Grid } from "@material-ui/core";
import BidCard from "../../Components/BidCard";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";



const { Title } = Typography;

const { Meta } = Card;
function Category() {
  return (
    <>
      <Title>Kerala</Title>
      {[0, 1, 2, 3, 4].map((item) => (
        <CategoryCard />
      ))}
    </>
  );
}

export default Category;

function CategoryCard() {
const allBids = useSelector(({home}) => home.allBids)

  return (
    <div style={{marginTop:30}}>
      <Row>
        <Col span={24}>
          <Card
            className="card-state"
            // className={classes.cardItem}
            cover={
              <div
                class="images"
                style={{
                  backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/digital-auction.appspot.com/o/LAX-CA%2Fregion_headline%2Foriginal.jpg?alt=media&token=9e0833d4-890b-495b-9595-2b09d5672a1e")`,
                }}
              >
                <Row className="ant-row-flex">
                  <Col span={24}>
                    <Title level={2}>Kochi</Title>
                  </Col>
                </Row>
              </div>
            }
            actions={[]}
          >
            <Row style={{ padding: 20,fontSize:14 }} className="top-panel">
                <Col span={24}>
              <Title level={4} style={{ marginBottom: 20 }}>
                Upcoming Auctions
              </Title>
              <Button type="text" className="link-view-all">
      View all<ArrowRightOutlined />
    </Button>
              </Col>
              <Col>
              <Grid container spacing={4}>
                {allBids.map((item) => (
                  <BidCard data={item} key={item.auctionId} type="category" />
                ))}
              </Grid>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

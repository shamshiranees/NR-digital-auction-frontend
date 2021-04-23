import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import { useSelector } from "react-redux";
import PicturesWall from "./PhotoUpload";
import { Typography } from "antd";
import { useHistory } from "react-router-dom";
import SelectCategory from "../../Components/SelectCategory";

const { Title } = Typography;
const { TextArea } = Input;
const CreateAuction = () => {
  const [componentSize, setComponentSize] = useState("default");
  const formValue = useSelector((state) => state.auctionReducer.createAuction);
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const history = useHistory();

  return (
    <>
      <Title level={3}>Create New Bid</Title>

      <Form
        size="large"
        labelCol={{
          // flex:1
          //  offset:10
          span: 2,
        }}
        wrapperCol={{
          span: 6,
          // offset:10,

          //    span: 12
        }}
      >
        <Form.Item label="Title">
          <Input value={formValue.name} />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea value={formValue.description} rows={4} />
          {/* <Input  value={formValue.description}/> */}
        </Form.Item>
        <Form.Item label="Category">
          <SelectCategory />
        </Form.Item>
      </Form>
      <Form size="large" labelCol={{}} wrapperCol={{}} layout="inline">
        {Object.keys(formValue.params).map((keyName, i) => (
          <Form.Item key={i} label={keyName}>
            <Input value={formValue.params[keyName]} />
          </Form.Item>
        ))}

        <Form.Item label="Bid ending time">
          <DatePicker format="YYYY-MM-DD HH:mm" showTime />
        </Form.Item>
      </Form>
      <Form.Item label="Product Images">
        <PicturesWall />
      </Form.Item>
      <Button
        onClick={() => history.push("/createsuccess")}
        style={{ marginLeft: 140, width: "80%", height: 50 }}
        block
        type="primary"
        size="large"
      >
        Submit
      </Button>
    </>
  );
};

export default CreateAuction;

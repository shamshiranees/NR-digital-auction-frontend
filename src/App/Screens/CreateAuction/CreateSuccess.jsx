import { Result, Button } from 'antd';
import React from 'react'

function CreateSuccess() {
    return (
        <Result
        status="success"
        title="Bid Added Successfully!"
        subTitle="Bid number: 2017182818828182881 server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key="console">
            Go Home
          </Button>,
          <Button key="buy">Create Another</Button>,
        ]}
      />
    )
}

export default CreateSuccess

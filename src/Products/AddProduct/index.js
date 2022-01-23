import { Button, Col, DatePicker, Form, Input, Modal, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import moment from "moment";
import React from "react";

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const AddProduct = (props) => {
  const { isModalVisible, setIsModalVisible, handleSubmit } = props;

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title={<div className="h1">Add Product</div>}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="600px"
        footer={null}
      >
        <Form
          name="number-form"
          {...formItemLayout}
          layout="vertical"
          initialValues={{ inventory_date: moment(new Date()) }}
          onFinish={handleSubmit}
        >
          <Row gutter={50}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Product Name"
                rules={[{ required: true, message: "Required" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={50}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true, message: "Required" }]}
              >
                <TextArea rows={3} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={50}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item
                name="price"
                label="Price"
                rules={[
                  { required: true, message: "Required" },
                  {
                    pattern: /^[0-9][0-9]*$/i,
                    message: "Only numbers are allowed",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item
                name="inventory_date"
                label="Inventory Date"
                rules={[{ required: true, message: "Required" }]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24} className="justify-end">
              <Button type="primary" htmlType="submit">
                {" "}
                Add Product
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default AddProduct;

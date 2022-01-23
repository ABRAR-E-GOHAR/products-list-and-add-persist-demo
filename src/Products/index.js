import { Button, Col, Input, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addProduct, populateProducts } from "./actions";
import AddProduct from "./AddProduct";
import columns from "./columns";
import { makeSelectProducts } from "./selectors";

function Products(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [search, setSearch] = useState("");

  const [filteredData, setFilteredData] = useState(props.products);

  useEffect(() => {
    setFilteredData(props.products);
  }, [props.products]);

  useEffect(() => {
    props.populateProducts();
  }, []);

  const addProductHandler = () => {
    setIsModalVisible(true);
  };

  const handleSubmit = (values) => {
    setIsModalVisible(false);
    props.onSubmit(values);
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    let value = e.target.value.toLowerCase();
    if (value && props.products.length > 0) {
      let searchedData = props.products.filter((item) => {
        return (
          item.name.toLowerCase().includes(value) ||
          item.description.toLowerCase().includes(value) ||
          item.price.toLowerCase().includes(value)
        );
      });
      setFilteredData(searchedData);
    } else {
      setFilteredData(props.products);
    }
  };

  return (
    <div className="products-container">
      <Row className="products-header">
        <Col span={6} className="h1" style={{ padding: "6px" }}>
          Products
        </Col>

        <Col
          xs={{ span: 18 }}
          sm={{ span: 12 }}
          className="flex-center"
          style={{ padding: "6px" }}
        >
          <Input
            placeholder="Search..."
            value={search}
            onChange={onSearchChange}
          />
        </Col>

        <Col
          xs={{ span: 24 }}
          sm={{ span: 6 }}
          className="justify-end"
          style={{ padding: "6px" }}
        >
          <Button type="primary" onClick={addProductHandler}>
            Add Product
          </Button>
        </Col>
      </Row>
      <Table
        dataSource={filteredData}
        columns={columns.map((column) => {
          return { ...column, key: column.key };
        })}
      />
      {isModalVisible && (
        <AddProduct
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

Products.propTypes = {};

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (data) => {
      return dispatch(addProduct(data));
    },

    populateProducts: () => {
      return dispatch(populateProducts());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

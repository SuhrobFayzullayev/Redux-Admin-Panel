// React and other hooks
import React, { useState } from "react";
import { useSelector } from "react-redux";

// React bootstrap components
import { Button, Card, Col, Form, Row } from "react-bootstrap";

// Redux's actions
import { addProduct } from "../../../../Redux/Actions/DashboardAction.js";

export default function Products() {
  // getData
  const goods = useSelector((state) => state.dashboard.add.goods);
  // Form state
  const [value, setValue] = useState(goods[0]);

  // Form change function
  const form = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  // SetUI function
  const handleAddProduct = (v) => addProduct(v);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Row>
            <Col className="me-1">
              <Form.Control
                type="text"
                placeholder="Rasmga yo’l"
                required
                name="url"
                value={value.url}
                onChange={(e) => {
                  form(e);
                }}
              />
            </Col>
            <Col className="ms-1">
              <Form.Control
                name="name"
                value={value.name}
                onChange={(e) => {
                  form(e);
                }}
                type="text"
                required
                placeholder="Taom nomi"
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            name="description"
            value={value.description}
            onChange={(e) => {
              form(e);
            }}
            as="textarea"
            required
            placeholder="Ta'rif"
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Row>
            <Col className="me-1">
              <Form.Control
                name="price"
                value={value.price}
                onChange={(e) => {
                  form(e);
                }}
                type="number"
                required
                placeholder="Narxi"
              />
            </Col>
            <Col className="ms-1">
              <Form.Select
                aria-label="Default select example"
                name="category"
                onChange={(e) => form(e)}
              >
                <option>--Kategoriya--</option>
                <option>Quyuq ovqatlar</option>
                <option>Suyuq ovqatlar</option>
                <option>Salatlar</option>
                <option>Ichimliklar</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      <Row className="d-flex justify-content-center align-items-center mb-5">
        <Col lg={1} className=" ps-0 ms-0">
          <Button
            variant="warning"
            children="Qo'shish"
            className="fw-bold"
            onClick={() => {
              handleAddProduct(value);
              setValue(goods[0]);
            }}
          />
        </Col>
      </Row>

      <Row>
        {goods.map((v, i) => {
          if (v !== goods[0])
            return (
              <Col key={i + "card"} className="mb-3" lg={4}>
                <Card>
                  <Card.Img variant="top" src={v.url} />
                  <Card.Body>
                    <Card.Title>{v.name}</Card.Title>
                    <Card.Text>
                      {v.description}
                      <br />
                      {v.category}
                    </Card.Text>
                    <p>{v.price} 000 so'm</p>
                  </Card.Body>
                </Card>
              </Col>
            );
        })}
      </Row>
    </div>
  );
}

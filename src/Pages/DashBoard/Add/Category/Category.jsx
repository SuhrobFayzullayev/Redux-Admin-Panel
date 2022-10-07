// React and other hooks
import React, { useState } from "react";
import { useSelector } from "react-redux";

// React bootstrap components
import { InputGroup, Form, Row, Button, Col } from "react-bootstrap";

// Redux's actions
import { addCategory } from "../../../../Redux/Actions/DashboardAction.js";

export default function Category() {
  // getData
  const category = useSelector((state) => state.dashboard.add.category);

  // Category change state
  const [value, setValue] = useState("");

  // SetUI new category function
  const handleAddCategory = (v) => v && addCategory(v);

  return (
    <div>
      <InputGroup className="mb-3 me-5">
        <Form.Control
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Kategoriya nomi"
        />
      </InputGroup>
      <Row className="d-flex justify-content-center align-items-center">
        <Col lg={1}>
          <Button
            variant="warning"
            children="Qo'shish"
            className="fw-bold"
            onClick={() => {
              handleAddCategory(value);
              setValue("");
            }}
          />
        </Col>
      </Row>
      <div>
        {category.map((v, i) => (
          <Button
            key={i + "category"}
            variant="secondary"
            children={v}
            className="mx-1 mt-5"
          />
        ))}
      </div>
    </div>
  );
}

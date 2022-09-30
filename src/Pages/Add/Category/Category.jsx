// React and other hooks
import React, { useState } from "react";

// React bootstrap components
import { InputGroup, Form, Row, Button, Col } from "react-bootstrap";
export default function Category() {
  // Category change state
  const [value, setValue] = useState("");

  // Data state
  const [data, setData] = useState([]);

  // SetUI new category function
  const addCategory = (v) => {
    const copy = [...data];
    copy.push(v);
    setData(copy);
    setValue("");
  };

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
            onClick={() => addCategory(value)}
          />
        </Col>
      </Row>
      <div>
        {data.map((v, i) => (
          <Button
            key={i + "category"}
            variant="secondary"
            children={v}
            className="mx-1"
          />
        ))}
      </div>
    </div>
  );
}

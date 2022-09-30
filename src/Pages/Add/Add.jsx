// React bootstrap components
import { Button, Container } from "react-bootstrap";

// React router dom components
import { Outlet, NavLink } from "react-router-dom";

// styled components
import styled from "styled-components";
const Div = styled.div`
  padding: 20px;
`;

export default function Add() {
  return (
    <Div className="p-4">
      <h2>Qo'shish</h2>
      <p className="text-secondary">Yangi kategoriya/taom qo’shish</p>
      <NavLink to="" className="me-2 ">
        <Button variant="warning" children="Kategoriya" className="fw-bold" />
      </NavLink>
      <NavLink to="goods" className="me-2 ">
        <Button variant="warning" children="Taom" className="fw-bold" />
      </NavLink>
      <Container className="py-3 px-0 ">
        <Outlet />
      </Container>
    </Div>
  );
}

// React bootstrap components
import { Container } from "react-bootstrap";

// React router dom components
import { Outlet, NavLink } from "react-router-dom";

// styled components
import styled from "styled-components";
const Div = styled.div`
  padding: 20px;
  .active {
    background-color: #ffe755;
    &:hover {
      background-color: #ffe755;
    }
  }
`;

export default function Add() {
  return (
    <Div className="p-4">
      <h2>Qo'shish</h2>
      <p className="text-secondary">Yangi kategoriya / taom qo’shish</p>
      <NavLink
        to="category"
        children="Kategoriya"
        className="fw-bold btn btn-outline-light border-0 text-dark"
      ></NavLink>
      <NavLink
        to="goods"
        children="Taomlar"
        className="fw-bold btn btn-outline-light border-0 text-dark ms-2 goods"
      ></NavLink>

      <Container className="py-3 px-0 ">
        <Outlet />
      </Container>
    </Div>
  );
}

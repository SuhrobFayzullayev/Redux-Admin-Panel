// React-bootstrap
import { Row, Col, Button, ListGroup } from "react-bootstrap";

// Icons
import { FaBars } from "react-icons/fa";
import { RiDonutChartLine } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";

// React Router Dom
import { Routes, Route, NavLink, Outlet } from "react-router-dom";

// Components
import Delivered from "./Pages/Delivered";
import Applications from "./Pages/Applications";
import Users from "./Pages/Users";

// Styled Components
import styled from "styled-components";
import Add from "./Pages/Add";
import Category from "./Pages/Add/Category";
import Products from "./Pages/Add/Products";
const Container = styled.div`
  .row {
    .aside {
      height: 100vh;
      background-color: #fffcede3;
      .list-group {
        margin-top: 30px;
        a {
          text-decoration: none;
          &.active div {
            /* background-color: #ffdc03a6; */
            padding: 0;
          }
        }
        .list-group-item {
          background-color: transparent;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px !important;
          margin-bottom: 10px;
          background-color: rgba(0, 0, 0, 0.025);
          border-radius: 5px;
          cursor: pointer;
          .icon {
            margin-right: 10px !important;
            padding: 0;
            font-size: 25px;
          }
          .text {
            width: 100%;
            padding: 0;
            margin: 0;
            h6 {
              padding: 0;
              margin: 0;
            }
            p {
              font-size: 12px !important;
              padding: 0;
              margin: 0;
            }
          }
        }
      }
    }
    .right-side {
      main {
        padding: 20px !important;
      }
    }
  }
`;

function App() {
  return (
    <Container className="container-xl border">
      <Row>
        <Col className="aside" lg={3}>
          <div className="img p-3 m-0 d-bold">
            <img
              src="https://express24.uz/img/header-logo.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <ListGroup>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/"
            >
              <ListGroup.Item>
                <div className="icon">
                  <RiDonutChartLine />
                </div>
                <div className="text">
                  <h6>Arizalar</h6>
                  <p>Yetib kelgan arizalarni kuzatishingiz mumkin</p>
                </div>
              </ListGroup.Item>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/delivered"
            >
              <ListGroup.Item>
                <div className="icon">
                  <BsCheckLg />
                </div>
                <div className="text">
                  <h6>Yetkazilgan</h6>
                  <p>Yetkazilgan taomlar ro’yxati bilan tanishing</p>
                </div>
              </ListGroup.Item>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/plus"
            >
              <ListGroup.Item>
                <div className="icon">
                  <AiOutlinePlus />
                </div>
                <div className="text">
                  <h6>Qo’shish</h6>
                  <p>Yangi kategoriya/taom qo’shish </p>
                </div>
              </ListGroup.Item>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/users"
            >
              <ListGroup.Item>
                <div className="icon">
                  <HiOutlineUserGroup />
                </div>
                <div className="text">
                  <h6>Foydalanuvchilar</h6>
                  <p>Rollarni biriktirishingiz mumkin</p>
                </div>
              </ListGroup.Item>
            </NavLink>
          </ListGroup>
        </Col>
        <Col className="right-side p-0" lg={9}>
          <header className="shadow-sm">
            <Button variant="outline-light border" className="pt-1 m-2">
              <FaBars className="text-dark" />
            </Button>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Applications />}></Route>
              <Route path="/delivered" element={<Delivered />}></Route>
              <Route path="/plus" element={<Add />}>
                <Route path="" element={<Category />} />
                <Route path="goods" element={<Products />} />
              </Route>
              <Route path="/users" element={<Users />}></Route>
            </Routes>
          </main>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

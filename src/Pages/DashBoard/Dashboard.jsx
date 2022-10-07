// React-bootstrap
import { Row, Col, Button, ListGroup } from "react-bootstrap";
import styled from "styled-components";

// Icons
import { RiDonutChartLine } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";

// React Router Dom
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";

// Components
import Delivered from "./Delivered";
import Applications from "./Applications";
import Users from "./Users";
import Add from "./Add";
import Category from "./Add/Category";
import Products from "./Add/Products";
import { setLogin } from "../../Redux/Actions/LoginAction";

// data
const data = [
  {
    icon: <RiDonutChartLine className="mb-1" />,
    title: "Arizalar",
    text: "Yetib kelgan arizalarni kuzatishingiz mumkin",
    to: "aplications",
    class: "aplications",
  },
  {
    icon: <BsCheckLg className="mb-1" />,
    title: "Yetkazilgan",
    text: "Yetkazilgan taomlar ro’yxati bilan tanishing",
    to: "delivered",
    class: "delivered",
  },
  {
    icon: <AiOutlinePlus className="mb-1" />,
    title: "Qo’shish",
    text: "Yangi kategoriya/taom qo’shish",
    to: "plus",
    class: "plus",
  },
  {
    icon: <HiOutlineUserGroup className="mb-1" />,
    title: "Foydalanuvchilar",
    text: "Rollarni biriktirishingiz mumkin",
    to: "users",
    class: "users",
  },
];

// Styled Components
const Container = styled.div`
  .row {
    .aside {
      height: 100vh;
      background-color: #fffcede3;
      .list-group {
        margin-top: 30px;
        margin-left: -3px;
        a {
          text-decoration: none;
          &.active div {
            background-color: #ffdc03a6;
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
            background-color: transparent;
          }
          .text {
            background-color: transparent;
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

// function component
function Dashboard() {
  const navigate = useNavigate();

  return (
    <Container className="container-xl border">
      <Row>
        <Col className="aside" lg={3}>
          <div className="img p-2 m-0 d-bold">
            <img
              src="https://express24.uz/img/header-logo.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <ListGroup>
            {data.map((v, i) => (
              <NavLink
                key={i + "links"}
                className={`my-2 ${v.class}`}
                to={`${v.to}`}
              >
                <ListGroup.Item className="m-0 p-0">
                  <div className="icon">{v.icon}</div>
                  <div className="text">
                    <h6>{v.title}</h6>
                    <p>{v.text}</p>
                  </div>
                </ListGroup.Item>
              </NavLink>
            ))}
          </ListGroup>
        </Col>
        <Col className="right-side p-0" lg={9}>
          <header className="shadow-sm py-4">
            <Button
              variant="warning"
              className="pt-1 position-absolute top-0 end-0 m-1 me-3"
              onClick={() => {
                navigate("/");
                setLogin(false);
              }}
            >
              Log Out
            </Button>
          </header>
          <main>
            <Routes>
              <Route path="/aplications" element={<Applications />}></Route>
              <Route path="/delivered" element={<Delivered />}></Route>
              <Route path="/plus" element={<Add />}>
                <Route path="category" element={<Category />} />
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

export default Dashboard;

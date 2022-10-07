// React bootstrap components
import { Button } from "react-bootstrap";

// React router dom
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../Redux/Actions/LoginAction";

// Expess24 img
import img from "./../../Images/expess24.jpg";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex align-items-start "
      style={{ padding: "0 150px", backgroundColor: "#FFEC00" }}
    >
      <img src={img} className="w-100" style={{ height: "100vh" }} />
      <Button
        children="SignIn"
        className="ms-5 mt-2"
        onClick={() => {
          navigate("/dashboard/aplications");
          setLogin(true);
        }}
      />
    </div>
  );
}

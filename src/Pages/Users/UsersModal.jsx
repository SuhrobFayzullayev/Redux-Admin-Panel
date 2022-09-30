import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function UsersModal(props) {
  return (
    <Modal
      onHide={props.onHide}
      show={props.show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Foydalanuvchi uchun rol tanglang
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Select
          onChange={(e) => {
            props.editRole(e.target.value);
          }}
          aria-label="Default select example"
        >
          <option>--Tanlang--</option>
          <option>Admin</option>
          <option>Yetkazuvchi</option>
          <option>Foydalanuvchi</option>
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

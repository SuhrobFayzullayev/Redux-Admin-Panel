// React bootstrap components
import { Form, Button, Modal } from "react-bootstrap";

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
          onChange={(e) => props.handleEditUserRole(e.target.value)}
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

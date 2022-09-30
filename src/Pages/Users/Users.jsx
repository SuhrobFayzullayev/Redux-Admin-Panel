// UserData
import UserData from "../../Data/UserData";
import { Button } from "react-bootstrap";
import { BsPen, BsTrash } from "react-icons/bs";
import React, { useState } from "react";
import UsersModal from "./UsersModal";

export default function Users() {
  // Modal show state
  const [modalShow, setModalShow] = React.useState(false);

  // User state
  const [data, setData] = useState(UserData);

  // User Value
  const [val, setVal] = useState(null);

  // Edit user role function
  const editRole = (v) => {
    const copy = [...data];
    copy[val].roli = v;
    console.log(copy);
    setData(copy);
  };

  // Delete user role function
  const deleteUser = (i) => {
    const copy = [...data];
    copy.splice(i, 1);
    setData(copy);
  };

  return (
    <div className="p-4">
      <h2>Foydalanuvchilar</h2>
      <p className="text-secondary">Rollarni biriktirishingiz mumkin.</p>
      <table className="table table-striped bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>To'liq ismi</th>
            <th>Telefon raqami</th>
            <th>Roli</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={i + "user"}>
                <td>{i + 1}</td>
                <td>{v.fullName}</td>
                <td>{v.phoneNum}</td>
                <td>{v.roli}</td>
                <td>
                  <Button
                    variant="outline-white"
                    onClick={() => {
                      setModalShow(true);
                      setVal(i);
                    }}
                  >
                    <BsPen className="text-dark" />
                  </Button>
                  <Button variant="outline-white" onClick={() => deleteUser(i)}>
                    <BsTrash className="text-dark" />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Modal */}
      {modalShow && (
        <UsersModal
          editRole={editRole}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
    </div>
  );
}

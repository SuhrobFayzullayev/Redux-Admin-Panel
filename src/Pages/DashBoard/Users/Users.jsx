// UserData
import { Button } from "react-bootstrap";
import { BsPen, BsTrash } from "react-icons/bs";
import React, { useState } from "react";
import UsersModal from "./UsersModal";
import { useSelector } from "react-redux";
import {
  deleteUser,
  editUserRole,
} from "../../../Redux/Actions/DashboardAction.js";

export default function Users() {
  // getData
  const userData = useSelector((state) => state.dashboard.userData);

  // Modal show state
  const [modalShow, setModalShow] = React.useState(false);

  // Edit user role function
  let [index, setIndex] = useState(null);
  const handleEditUserRole = (v) => editUserRole(v, index);

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
          {userData.map((v, i) => {
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
                      setIndex(i);
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
          handleEditUserRole={handleEditUserRole}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
    </div>
  );
}

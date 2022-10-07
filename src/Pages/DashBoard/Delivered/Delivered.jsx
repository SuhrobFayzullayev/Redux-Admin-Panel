import { useSelector } from "react-redux";

export default function Delivered() {
  let allPrice = 0;
  // getData
  const delivered = useSelector((state) => state.dashboard.data);

  return (
    <div className="p-4">
      <h2>Yetkazilgan</h2>
      <p className="text-secondary">
        Yetkazib berilgan arizalarni kuzatishingiz mumkin.
      </p>
      <table className="table table-striped bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>To'liq ismi</th>
            <th>Ovqat nomi</th>
            <th>Narxi</th>
            <th>Soni</th>
            <th>Umumiy narx</th>
            <th>Telefon raqam</th>
            <th>Izoh</th>
          </tr>
        </thead>

        <tbody>
          {delivered.map((v, i) => {
            allPrice += v.price * v.num;
            return (
              <tr key={i + "delivered"}>
                <td>{i + 1}</td>
                <td>{v.fulName}</td>
                <td>{v.foodName}</td>
                <td>{v.price}</td>
                <td>{v.num}</td>
                <td>{v.price * v.num} 000</td>
                <td>{v.phoneNum}</td>
                <td>Yetkazildi</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        <p>Jami</p>
        <p className="fw-bold">{allPrice} 000</p>
      </div>
    </div>
  );
}

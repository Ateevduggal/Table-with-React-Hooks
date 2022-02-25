import React from "react";

const ReadOnly = ({ data, Edit, Delete }) => {
  return (
    <>
      <tr>
        <td>{data.fullName}</td>
        <td>{data.userName}</td>
        <td>{data.phoneNumber}</td>
        <td>{data.website}</td>
        <td>{data.companyName}</td>
        <td>{data.email}</td>
        <td className="d-flex justify-content-between border-0">
          <button className="btn btn-dark" onClick={() => Edit(data)}>
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="btn btn-danger" onClick={() => Delete(data.id)}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default ReadOnly;

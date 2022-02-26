import React from "react";

const EditRow = ({
  tableData,
  Cancel,
  setTableData,
  editData,
  setEditData,
}) => {
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setEditData({ ...editData, [name]: value });
  };

  const Save = (e) => {
    e.preventDefault();
    let filterData = tableData.filter((e) => e.id !== editData.id);
    let updatedData = [...filterData, { ...editData }].sort((a, b) =>
      a.id > b.id ? 1 : -1
    );
    setTableData(updatedData);
    // const delData = tableData.filter((tbd) => {
    //   return editData.id !== tbd.id;
    // });
    // setTableData(delData);
  };
  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Enter a name..."
            onChange={handleEditChange}
            value={editData.fullName}
          />
          <input
            type="text"
            name="userName"
            required
            placeholder="Enter user name..."
            onChange={handleEditChange}
            value={editData.userName}
          />
          <input
            type="text"
            name="phoneNumber"
            required
            placeholder="Enter a phone number..."
            onChange={handleEditChange}
            value={editData.phoneNumber}
          />
          <input
            type="text"
            name="website"
            required
            placeholder="Enter website..."
            onChange={handleEditChange}
            value={editData.website}
          />
          <input
            type="text"
            name="companyName"
            required
            placeholder="Enter company name..."
            onChange={handleEditChange}
            value={editData.companyName}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter an email..."
            onChange={handleEditChange}
            value={editData.email}
          />
        </td>
        <td className="d-flex justify-content-center">
          <button className="btn btn-success" type="submit" onClick={Save}>
            <i class="fa-solid fa-floppy-disk"></i>
          </button>
          <button className="btn btn-danger" type="button" onClick={Cancel}>
            <i class="fa-solid fa-ban"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default EditRow;

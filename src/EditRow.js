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
    setTableData([...tableData, { ...editData, id: Math.random() }]);
    console.log(tableData);
    const delData = tableData.filter((tbd) => {
      return editData.id !== tbd.id;
    });
    setTableData(delData);
  };
  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            required
            placeholder="Enter a name..."
            name="fullName"
            value={editData.fullName}
            onChange={handleEditChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required
            placeholder="Enter an address..."
            name="address"
            value={editData.address}
            onChange={handleEditChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required
            placeholder="Enter a phone number..."
            name="phoneNumber"
            value={editData.phoneNumber}
            onChange={handleEditChange}
          ></input>
        </td>
        <td>
          <input
            type="email"
            required
            placeholder="Enter an email..."
            name="email"
            value={editData.email}
            onChange={handleEditChange}
          ></input>
        </td>
        <td className="d-flex justify-content-evenly">
          <button className="btn btn-success" type="submit" onClick={Save}>
            Save
          </button>
          <button className="btn btn-danger" type="button" onClick={Cancel}>
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
};

export default EditRow;

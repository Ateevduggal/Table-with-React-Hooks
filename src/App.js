import React, { useState } from "react";
import { data } from "./Data";
import Form from "./Form";
import ReadOnly from "./ReadOnly";
import EditRow from "./EditRow";
const App = () => {
  const [tableData, setTableData] = useState(data);
  const [toggle, setToggle] = useState(null); //for data ids
  const [editData, setEditData] = useState({
    fullName: "",
    userName: "",
    address: "",
    phoneNumber: "",
    email: "",
    website: "",
    companyName: "",
  });
  const [order, setOrder] = useState("asc"); //for sorting

  const Delete = (del) => {
    const delData = tableData.filter((tbd) => {
      return del !== tbd.id;
    });
    setTableData(delData);
  };

  const Edit = (data) => {
    setToggle(data);
    setEditData(data);
  };

  const Cancel = () => {
    setToggle(null);
  };
  const Sort = (sort) => {
    if (order === "asc") {
      const sorted = [
        ...tableData.sort((a, b) => (a[sort] > b[sort] ? 1 : -1)),
      ];
      console.log(sorted);
      setTableData(sorted);
      setOrder("desc");
    } else if (order === "desc") {
      const sorted = [
        ...tableData.sort((a, b) => (a[sort] < b[sort] ? 1 : -1)),
      ];
      console.log(sorted);
      setTableData(sorted);
      setOrder("asc");
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <form className="table">
            <table>
              <thead>
                <tr>
                  <th onClick={() => Sort("fullName")}>Name</th>
                  <th onClick={() => Sort("userName")}>User Name</th>
                  <th onClick={() => Sort("phoneNumber")}>Phone Number</th>
                  <th onClick={() => Sort("website")}>Website</th>
                  <th onClick={() => Sort("companyName")}>Company Name</th>
                  <th onClick={() => Sort("email")}>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data) => {
                  return (
                    <>
                      {toggle === data ? (
                        <EditRow
                          tableData={tableData}
                          setTableData={setTableData}
                          Cancel={Cancel}
                          setEditData={setEditData}
                          editData={editData}
                        />
                      ) : (
                        <ReadOnly data={data} Edit={Edit} Delete={Delete} />
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
          </form>
          <h2 className="m-3">Add a contact</h2>
          <Form tableData={tableData} setTableData={setTableData} />
        </div>
      </div>
    </>
  );
};

export default App;

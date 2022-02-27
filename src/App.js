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
        <div className="row pt-5">
          <form>
            <table className="table table-striped table-primary table-hover text-center fs-5 table-bordered border-dark">
              <thead>
                <tr>
                  <th id="tr" onClick={() => Sort("fullName")}>
                    Name
                  </th>
                  <th id="tr" onClick={() => Sort("userName")}>
                    User Name
                  </th>
                  <th id="tr" onClick={() => Sort("phoneNumber")}>
                    Phone Number
                  </th>
                  <th id="tr" onClick={() => Sort("website")}>
                    Website
                  </th>
                  <th id="tr" onClick={() => Sort("companyName")}>
                    Company Name
                  </th>
                  <th id="tr" onClick={() => Sort("email")}>
                    Email
                  </th>
                  <th id="tr">Action</th>
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
          <h1 className="mx-3 mt-4">Add a contact</h1>
          <Form tableData={tableData} setTableData={setTableData} />
        </div>
      </div>
    </>
  );
};

export default App;

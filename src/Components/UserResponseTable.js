import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { DownloadTableExcel } from 'react-export-table-to-excel';




// import { createRoutesFromChildren } from "react-router";

function UserResponseTable() {
  const [queydata, setQueryData] = useState([]);
  const [suggestiondata, setSuggestionData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const queryResponse = await fetch("http://localhost:5000/auth/query");
      const queryData = await queryResponse.json();
      console.log(queryData.feedbackEntries);
      const suggestionResponse = await fetch(
        "http://localhost:5000/auth/suggestion"
      );
      const suggestionData = await suggestionResponse.json();
      console.log(suggestionData.feedbackEntries);
      const combinedData = [
        ...queryData.feedbackEntries,
        ...suggestionData.feedbackEntries,
      ];
      setData(combinedData);
      setQueryData(queryData.feedbackEntries);
      setSuggestionData(suggestionData.feedbackEntries);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //export data ...
  const tableRef = useRef(null);
  const queryRef = useRef(null);


  return (
    <>
      <div className="container mt-5">
        <h3 class="pb-2 border-black border-bottom border-black border-2 text-center mb-3 mt-4">
          Suggestion Feedback Data
        </h3>
        <br></br>
        {/* <h3 className="mt-3 text-success"><center>Export to Excel Sheet</center></h3> */}
          <DownloadTableExcel
                    filename="suggestion feedback"
                    sheet="feedback"
                    currentTableRef={tableRef.current}
                >

                   <center><button className="btn btn-success mb-3"> Export to Excel Sheet</button></center>
                  <br></br>
          </DownloadTableExcel>
          <table className="table table-bordered table-hover" ref={tableRef}>
            <thead className="th-dark">
              <tr >
                <th>S.No</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Feedback Submission</th>
              </tr>
            </thead>
            <tbody>
              {suggestiondata.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {item.name && typeof item.name === "object"
                      ? `${item.name.firstName} ${item.name.lastName}`
                      : item.name}
                  </td>
                  <td>{item.email}</td>
                  <td>
                    {item.businessName && (
                      <div>
                        <b>Business Name:</b> {item.businessName}
                      </div>
                    )}
                    {item.details && (
                      <div>
                        <b>Details:</b> {item.details}
                      </div>
                    )}
                    {item.improvementAction && (
                      <div>
                        <b>Improvement Action:</b> {item.improvementAction}
                      </div>
                    )}
                    {item.receiveResponse && (
                      <div>
                        <b>Receive Response:</b> {item.receiveResponse}
                      </div>
                    )}
                    {item.query ||
                      (item.selectedOptions && item.selectedOptions.join(", "))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
      <hr />
      <br />
      <br />
      <br />
      <div>
        <h3 class="pb-2 border-black border-bottom border-black border-2  text-center mb-5 mt-4">
          QueryFeedback Data
        </h3>
        <div></div>
        <DownloadTableExcel
                    filename="query feedback"
                    sheet="feedback"
                    currentTableRef={queryRef.current}
                >

                   <center><button className="btn btn-success mb-3"> Export to Excel Sheet</button></center>
                  <br></br>
        </DownloadTableExcel>
        <table className="table table-bordered table-hover" ref={queryRef}>
          <thead className="thead-dark">
            <tr>
              <th width="50">S.No</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Feedback Submission</th>
            </tr>
          </thead>
          <tbody>
            {queydata.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {item.name && typeof item.name === "object"
                    ? `${item.name.firstName} ${item.name.lastName}`
                    : item.name}
                </td>
                <td>{item.email}</td>
                <td>
                  {item.businessName && (
                    <div>
                      <b>Business Name:</b> {item.businessName}
                    </div>
                  )}
                  {item.details && (
                    <div>
                      <b>Details:</b> {item.details}
                    </div>
                  )}
                  {item.improvementAction && (
                    <div>
                      <b>Improvement Action:</b> {item.improvementAction}
                    </div>
                  )}
                  {item.receiveResponse && (
                    <div>
                      <b>Receive Response:</b> {item.receiveResponse}
                    </div>
                  )}
                  {item.query ||
                    (item.selectedOptions && item.selectedOptions.join(", "))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
    </>
  );
}

export default UserResponseTable;

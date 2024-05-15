import React from "react";
import { useState, useEffect } from "react";

function UserResponseTable() {
  const [queydata, setQueryData] = useState([]);
  const [suggestiondata, setSuggestionData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const queryResponse = await fetch("http://localhost:3000/auth/query");
      const queryData = await queryResponse.json();
      console.log(queryData.feedbackEntries);
      const suggestionResponse = await fetch(
        "http://localhost:3000/auth/suggestion"
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

  return (
    <>
      <div className="overflow-hidden">
        <h1 class="pb-2 border-black border-bottom border-black border-2 display-5 fw-bold text-center mb-5 mt-4">
          Suggestion Feedback Data
        </h1>
        <div></div>
        <table className="table">
          <thead>
            <tr>
              <th width="50">S.No</th>
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
        <h1 class="pb-2 border-black border-bottom border-black border-2 display-5 fw-bold text-center mb-5 mt-4">
          QueryFeedback Data
        </h1>
        <div></div>
        <table className="table">
          <thead>
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

import React, { useState } from "react";

function Create() {
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);
  console.log(csvArray);

  const fileHandlerOnChange = (event) => {
    setCsvFile(event.target.files[0]);
  };

  const processCSV = (str, delim = ",") => {
    const headers = str.slice(0, str.indexOf("\n")).split(delim);
    console.log(headers);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const newArray = rows.map((row) => {
      const value = row.split(delim);
      const eachObj = headers.reduce((obj, header, i) => {
        obj[header] = value[i];
        return obj;
      }, {});
      return eachObj;
    });
    setCsvArray(newArray);
  };

  const submitFileHandler = async (event) => {
    const file = csvFile;
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;
      processCSV(text);
    };
    reader.readAsText(file);
  };
  return (
    <div>
      <form id="csv-form">
        <input
          type="file"
          accept=".csv"
          id="csvFile"
          onChange={fileHandlerOnChange}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (csvFile) submitFileHandler();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;

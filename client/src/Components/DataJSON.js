import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataJSON() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("api/load/data")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data.map((obj) => {
        return (
          <div>
            {Object.keys(obj._source).map((el) => {
              return (
                <h1>
                  {el}: {obj._source[el]}
                </h1>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

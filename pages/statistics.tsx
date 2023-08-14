import React, { useEffect, useState } from "react";
import axios from "axios";

const statistics = ({ data }: { data: any }) => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const { data } = await axios.get("/api/data");

        if (data) {
          setGetData(data.data);
        }
      } catch (err) {
        console.log();
      }
    };

    getdata();
  }, []);

  const getTopXters = (data: any): string[] => {
    let result = [""];

    for (let i = 0; i < data.length; i++) {}

    return result;
  };

  const MostStatus = () => {};

  return (
    <div>
      <h2>Top Characters</h2>
      <ol>
        {getTopXters(getData).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default statistics;

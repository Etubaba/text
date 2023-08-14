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

  const getTopXters = (arr: { name: string }[]): string[] => {
    const nameFrequency: Record<string, number> = {};
    arr.forEach((obj) => {
      const name = obj.name;
      nameFrequency[name] = (nameFrequency[name] || 0) + 1;
    });

    const nameFrequencyArray = Object.entries(nameFrequency);
    nameFrequencyArray.sort((a, b) => b[1] - a[1]);
    const mostCommonNames = nameFrequencyArray
      .slice(0, 3)
      .map((pair) => pair[0]);

    return mostCommonNames;
  };

  function findMostCommonStatus(arr: { status: string }[]): string {
    const statusFrequency: Record<string, number> = {};

    arr.forEach((obj) => {
      const status = obj.status;
      statusFrequency[status] = (statusFrequency[status] || 0) + 1;
    });

    let mostCommonStatus = "";
    let highestFrequency = 0;

    for (const status in statusFrequency) {
      if (statusFrequency[status] > highestFrequency) {
        mostCommonStatus = status;
        highestFrequency = statusFrequency[status];
      }
    }

    return mostCommonStatus;
  }

  console.log(getData);
  return (
    <div>
      <h3>Top Characters</h3>
      <ol>
        {getTopXters(getData).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ol>

      <h3>Most assigned Status</h3>
      <p>{findMostCommonStatus(getData)}</p>
    </div>
  );
};

export default statistics;

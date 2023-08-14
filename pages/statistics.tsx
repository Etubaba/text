import React, { useEffect, useState } from "react";
import axios from "axios";
import { findLocationWithMostHumanCharacters } from "@/helpers/humanLocation";
import { findMostCommonStatus } from "@/helpers/commonStatus";
import { getTopXters } from "@/helpers/topCharacters";
import { maleSpecies } from "@/helpers/maleSpecies";
import { getUniqueOriginNames } from "@/helpers/originName";

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

  const originNames = getUniqueOriginNames(getData);
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

      <h3>The Location with the most characters of the species “human”</h3>
      <p>{findLocationWithMostHumanCharacters(getData)}</p>

      <h3>The species with the most male characters</h3>
      <p>{maleSpecies(getData)}</p>

      <h3>Unique Origin Name</h3>
      <ul>
        {originNames.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h3>Unique Origin Count</h3>
      <p>{originNames.length}</p>
    </div>
  );
};

export default statistics;

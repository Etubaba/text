import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

type location = {
  name: string;
};

type characterType = {
  name: string;
  image: string;
  status: string;
  id: number;
  species: string;
  created: string;
  gender: string;
  location: location;
  episodeCount: number;
};

const Details = () => {
  const [getData, setGetData] = useState<characterType>();

  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    const getdata = async () => {
      try {
        const { data } = await axios.get(`/api/${id}`);
        if (data) {
          setGetData(data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getdata();
  }, []);

  const charactersEpisodeCode = (arr: characterType) => {};

  return (
    <div>
      <div>
        <img
          style={{ width: "60px", height: "55px" }}
          alt=""
          src={getData?.image}
        />
        <div style={{ display: "flex" }}>
          <h2 style={{ marginRight: "10px" }}>Name :</h2>
          <p>{getData?.name}</p>
        </div>
        <div style={{ display: "flex" }}>
          <h2 style={{ marginRight: "10px" }}>Gender :</h2>
          <p>{getData?.gender}</p>
        </div>
        <div style={{ display: "flex" }}>
          <h2 style={{ marginRight: "10px" }}>Species :</h2>
          <p>{getData?.species}</p>
        </div>
        <div style={{ display: "flex" }}>
          <h2 style={{ marginRight: "10px" }}>created :</h2>
          <p>{getData?.created}</p>
        </div>
        <div style={{ display: "flex" }}>
          <h2 style={{ marginRight: "10px" }}>Status :</h2>
          <p>{getData?.status}</p>
        </div>
        <div style={{ display: "flex" }}>
          <h2 style={{ marginRight: "10px" }}>Location :</h2>
          <p>{getData?.location.name}</p>
        </div>
        <div style={{ display: "flex" }}>
          <h2 style={{ marginRight: "10px" }}>Episode Count:</h2>
          <p>{getData?.episodeCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;

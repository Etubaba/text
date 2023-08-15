import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

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

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return (
    <div className="details">
      <div className="character-detail">
        <img alt="" src={getData?.image} />
        <div>
          {" "}
          <div className="character-item">
            <h3 style={{ marginRight: "10px" }}>Name :</h3>
            <p>{getData?.name}</p>
          </div>
          <div className="character-item">
            <h3 style={{ marginRight: "10px" }}>Gender :</h3>
            <p>{getData?.gender}</p>
          </div>
          <div className="character-item">
            <h3 style={{ marginRight: "10px" }}>Species :</h3>
            <p>{getData?.species}</p>
          </div>
          <div className="character-item">
            <h3 style={{ marginRight: "10px" }}>created :</h3>
            <p>{getData?.created.substring(0, 10)}</p>
          </div>
          <div className="character-item">
            <h3 style={{ marginRight: "10px" }}>Status :</h3>
            <p>{getData?.status}</p>
          </div>
          <div className="character-item">
            <h3 style={{ marginRight: "10px" }}>Location :</h3>
            <p>{getData?.location.name}</p>
          </div>
          <div className="character-item">
            <h3 style={{ marginRight: "10px" }}>Episode Count:</h3>
            <p>{getData?.episodeCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

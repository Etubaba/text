import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type ItemType = {
  name: string;
  image: string;
  status: string;
  id: number;
};
const index = ({ data }: { data: any }) => {
  const [getData, setGetData] = useState([]);
  const [pageCount, setPageCount] = useState(25);
  const [pageInitials, setPageInitials] = useState(0);
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

  return (
    <div>
      <div className="header">
        <Link
          style={{
            textDecoration: "none",
            cursor: "pointer",
            marginRight: "10px",
          }}
          href={"/"}
        >
          Home
        </Link>
        <Link
          style={{
            textDecoration: "none",
            cursor: "pointer",
            marginRight: "10px",
          }}
          href={"/statistics"}
        >
          Statistics
        </Link>
      </div>
      {getData
        .slice(pageInitials, pageCount)
        .map((item: ItemType, idx: number) => (
          <div>
            <Link
              style={{
                display: "flex",
                marginBottom: "14px",
                border: "1px",
                borderRadius: "14px",
              }}
              key={idx}
              href={`/details/${item.id}`}
            >
              <img
                style={{ width: "40px", height: "40px" }}
                alt=""
                src={item.image}
              />
              <p>{item.name}</p>
              <p>{item.status}</p>
            </Link>
          </div>
        ))}

      <div>
        <p
          onClick={() => {
            if (pageCount > 25) {
              setPageCount((prev) => prev - 25);
              setPageInitials((prev) => prev - 25);
            }
            if (pageInitials !== 0) {
              setPageCount((prev) => prev - 25);
              setPageInitials((prev) => prev - 25);
            }
          }}
        >
          Prev
        </p>

        <p
          onClick={() => {
            setPageCount((prev) => prev + 25);
            setPageInitials((prev) => prev + 25);
          }}
        >
          Next
        </p>
      </div>
    </div>
  );
};

export default index;

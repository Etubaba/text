import Characters from "@/components/Characters";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
            marginRight: "10px",
            textDecoration: "none",
            listStyle: "none",
          }}
          href={"/"}
        >
          Home
        </Link>
        <Link
          style={{
            textDecoration: "none",
            listStyle: "none",
            cursor: "pointer",
          }}
          href={"/statistics"}
        >
          Statistics
        </Link>
      </div>

      <section className="section">
        <div className="title">
          <p>All Characters</p>
        </div>
        {getData
          .slice(pageInitials, pageCount)
          .map((item: ItemType, idx: number) => (
            <Characters item={item} />
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
      </section>
    </div>
  );
};

export default index;

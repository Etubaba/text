import Characters from "@/components/Characters";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const index = ({ data }: { data: any }) => {
  const [getData, setGetData] = useState([]);
  const [pageCount, setPageCount] = useState(25);
  const [pageInitials, setPageInitials] = useState(0);

  console.log(pageCount, pageInitials);
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
      <section className="section">
        <div className="title">
          <p>All Characters</p>
        </div>
        {getData
          .slice(pageInitials, pageCount)
          .map((item: ItemType, idx: number) => (
            <Characters key={idx} item={item} />
          ))}

        <div className="pagination">
          <div>Total Pages: {Math.ceil(getData.length / 25)} </div>
          <p
            onClick={() => {
              if (pageCount > 25 && pageInitials !== 0) {
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

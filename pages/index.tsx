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

  console.log(getData);
  return (
    <div>
      {getData.slice(0, pageCount).map((item: ItemType, idx: number) => (
        <Link href={`/details/${item.id}`}>
          <div
            key={idx}
            style={{
              display: "flex",
              marginBottom: "14px",
              border: "1px",
              borderRadius: "14px",
            }}
          >
            <img
              style={{ width: "40px", height: "40px" }}
              alt=""
              src={item.image}
            />
            <p>{item.name}</p>
            <p>{item.status}</p>
          </div>
        </Link>
      ))}

      <div>
        <p
          onClick={() => {
            if (pageCount > 25) {
              setPageCount((prev) => prev - 25);
            }
          }}
        >
          Prev
        </p>

        <p onClick={() => setPageCount((prev) => prev + 25)}>Next</p>
      </div>
    </div>
  );
};

export default index;

// export const getServerSideProps = async () => {
//   const res = await fetch(`/api/data`);

//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };

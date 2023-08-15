import Link from "next/link";
import React from "react";

const Characters = ({ item }: { item: ItemType }) => {
  return (
    <Link className="characters" key={item.id} href={`/details/${item.id}`}>
      <div className="item">
        <img alt="" src={item.image} />
        <p>{item.name}</p>
        <p>{item.status}</p>
      </div>
    </Link>
  );
};

export default Characters;

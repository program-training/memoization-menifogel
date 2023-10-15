import React, { useState } from "react";

function ListComponent({ list }) {
  const [likeCount, setLikeCount] = useState(0);

  // TODO: Optimize this function so it doesn't get recreated on every render.
  const handleLike = (id) => {
    console.log(`Liked item ${id}`);
    setLikeCount((prev) => prev + 1);
  };

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {item.value}
          <button onClick={() => handleLike(item.id)}>Like</button>
        </li>
      ))}
    </ul>
  );
}

export default ListComponent;

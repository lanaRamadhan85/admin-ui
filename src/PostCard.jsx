import React, { useState } from "react";

function PostCard(props) {
  // Data yang ditampilkan hanya terdiri dari title dan body menggunakan props
  const { title, body } = props;

  // useState untuk menyimpan status clicked setiap card
  const [clicked, setClicked] = useState(false);

  // Event handler onClick pada elemen card
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      onClick={handleClick}
      className={`p-6 rounded-lg shadow cursor-pointer transition-colors duration-200 ${
        clicked ? "bg-blue-100" : "bg-white"
      }`}
    >
      <h2 className="text-base font-bold text-gray-900 mb-2 leading-snug">
        {title}
      </h2>
      <p className="text-sm text-gray-600 leading-relaxed">
        {body}
      </p>
    </div>
  );
}

export default PostCard;

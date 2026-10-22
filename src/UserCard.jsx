import React, { useState } from "react";

function UserCard(props) {
  // Destructuring Props dengan Rest Parameter
  const { name, email, address, ...rest } = props;

  // State untuk interaktivitas tombol
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Address:</span> {address?.street}, {address?.city}
      </p>

      {/* Button dengan Event Handler Arrow Function & Conditional Styling */}
      <button
        onClick={() => setClicked(!clicked)}
        className={`${
          clicked ? "bg-special-green" : "bg-gray-01"
        } text-white p-2 rounded-md w-full font-medium transition-colors cursor-pointer`}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default UserCard;

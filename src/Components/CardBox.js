import React from "react";

function CardBox({ title, cases, total, icon, color }) {
  return (
    <div className="flex flex-row">
      <div
        className="h-12 w-12 flex justify-center items-center mr-5"
        style={{
          borderRadius: "10px",
          color: "white",
          backgroundColor: `${color}`,

          boxShadow: `0 0 10px 1px ${color}`,
        }}
      >
        {icon}
      </div>
      <div>
        <div className="text-m font-small  text-gray-400">{title}</div>

        <div className="text-2xl font-medium text-white ">{total}</div>
      </div>
      <div className="text-m font-medium  text-yellow-400">{cases}</div>
    </div>
  );
}

export default CardBox;

import React from "react";

function Footer() {
  const dateObj = new Date();
  const currentDate = dateObj.getFullYear();
  return (
    <footer>
      <p className="text-gray-500 w-full text-center mt-10">
        {" "}
        copyright {currentDate}{" "}
      </p>
    </footer>
  );
}

export default Footer;

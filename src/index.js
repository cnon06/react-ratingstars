import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={3} />
    <StarRating />
    <StarRating maxRating={10} size={50} />
    <StarRating maxRating={10} color="green" />
    <StarRating maxRating={10} size={30} color="orange" />
  </React.StrictMode>
);

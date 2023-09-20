import React, { useState } from "react";

const containerStyle = { display: "flex", alignItems: "center", gap: "16px" };
const starContainerStyle = {
  display: "flex",
};

function StarRating({ maxRating = 5, color = "blue", size = 20 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color: color,
    fontSize: `${size}px`,
  };
  function handleRating(index) {
    setTempRating(index + 1);
  }

  function handleHover(index) {
    setRating(index + 1);
  }

  function handleOut(index) {
    setRating(tempRating);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            rating={rating}
            index={i}
            onClick={() => handleRating(i)}
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={() => handleOut(i)}
            size={size}
            color={color}
          />
        ))}
      </div>
      <p className="text" style={textStyle}>
        {rating}
      </p>
    </div>
  );
}

function Star({
  rating,
  index,
  onClick,
  onMouseEnter,
  onMouseLeave,
  size,
  color,
}) {
  const starStyle = {
    display: "block",
    width: `${size}px`,
    height: `${size}px`,
    cursor: "pointer",
  };

  return (
    <span
      role="button"
      style={starStyle}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <FullStar fill={index < rating ? color : "none"} strokeColor={color} />
      {/* {index < rating ? <FullStar /> : <EmptyStar />} */}
    </span>
  );
}

function FullStar({ fill, strokeColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={fill}
      stroke={strokeColor}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default StarRating;

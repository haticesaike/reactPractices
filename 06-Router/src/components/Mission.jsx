import React from "react";
import { useNavigate } from "react-router-dom";

function mission() {
  const navigate = useNavigate();
  return (
    <>
      <div>mission</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        go back
      </button>
    </>
  );
}

export default mission;

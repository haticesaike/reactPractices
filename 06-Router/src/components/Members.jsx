import React from "react";
import { useSearchParams } from "react-router-dom";

function Members() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get("filter") === "active";
  return (
    <>
      <div>Members</div>
      <button
        onClick={() => {
          setSearchParams({ filter: "active" });
        }}
      >
        Active Members
      </button>
      <button
        onClick={() => {
          setSearchParams();
        }}
      >
        All Members
      </button>
      <div>{isActive ? "Active Members" : "All Members"}</div>
    </>
  );
}

export default Members;

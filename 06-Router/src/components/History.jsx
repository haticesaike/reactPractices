import React from "react";
import { Link, Outlet } from "react-router-dom";

function History() {
  return (
    <>
      <div>History</div>
      <nav className="subNav">
        <Link to="Companies">Company</Link>
        <Link to="Team">Team</Link>
      </nav>
      <Outlet />{" "}
      {/* The Outlet component is used to render the nested routes. */}
    </>
  );
}

export default History;

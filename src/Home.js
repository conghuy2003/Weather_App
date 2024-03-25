import React, { useState } from "react";
import AuthLogin from "./Auth/AuthLogin";

const Home = (props) => {
  return (
    <>
      <header className="App-header">
        <AuthLogin />
      </header>
    </>
  );
};

export default Home;

import React from "react";
import Navbar from "../components/Navbar";

export default function HomePage(props) {
  return (
    <>
      <Navbar status = {props.logging} />
    </>
  );
}

import React, { useState } from "react";
import Topbar from "./components/Topbar";
import LeftBar from "./components/LeftBar";
import TitleBar from "./components/Titlebar";
import Filterbar from "./Components/Filterbar";
import Mainlist from "./Components/Mainlist";

export default function LeadListPage() {
  return (
    <>
    <div>
        <Topbar/>
        <LeftBar/>
        <TitleBar/>
        <Filterbar/>
        <Mainlist/>
    </div>
    </>
  );
}
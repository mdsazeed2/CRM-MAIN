import React from "react";
import "./AddLead.css";
import Form from "./Components/form";
import Topbar from "./Components/Topbar";
import LeftBar from "./Components/LeftBar";
import TitleBar from "./Components/titlebar1";

export default function AddLead() {
  return (
    <div>
      <Topbar />
      <div className="AddLead_content">
        <LeftBar className="AddLead_LeftBar"/>
        <div className="AddLead_content_right">
          <div className="AddLead_content_right_inside">
            <TitleBar />
            <div className="AddLead_content_right_inside_form">
                <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

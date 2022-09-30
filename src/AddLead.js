import React from "react";
import "./AddLead.css";
import Form from "./components/form";
import HeadBar from "./components/headbar";
import LeftBar from "./components/leftbar";
import TitleBar from "./components/titlebar";

export default function AddLead() {
  return (
    <div>
      <HeadBar />
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

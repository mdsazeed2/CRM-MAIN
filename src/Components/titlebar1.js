import "./titlebar1.css";
import { GiBeachBag } from "react-icons/gi";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function TitleBar() {
  return (
    <>
      <div className="titlebar_top">
        <div className="titlebar_top_col1">
          <div className="titlebar_bagSquare">
            <GiBeachBag className="titlebar_bagIcon" />
          </div>
          <label>LeadList</label>
        </div>
        <div className="titlebar_top_col2">
            
            <div className="titlebar_top_col22">
                <BsFillPlusCircleFill className="titlebar_plusIcon" />
                <label>Save Lead</label>
            </div>
        </div>
      </div>
    </>
  );
}
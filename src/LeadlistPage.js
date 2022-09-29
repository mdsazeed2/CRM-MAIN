import "./LeadlistPage.css";
import Topbar from "./Components/Topbar";
import LeftBar from "./Components/LeftBar";
import TitleBar from "./Components/Titlebar";
import Filterbar from "./Components/Filterbar";
import Mainlist from "./Components/Mainlist";
export default function LeadListPage() {
    
  return (
    <>
      <div className="Leadlist">
        <Topbar />
        <LeftBar />
        <div className="Leadlist_Content">
          <TitleBar />
          <Filterbar />
          <Mainlist />
        </div>
      </div>
    </>
  );
}

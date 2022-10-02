import "./LeadlistPage.css";
import Topbar from "./components/Topbar";
import LeftBar from "./components/LeftBar";
import TitleBar from "./components/Titlebar";
import Filterbar from "./components/Filterbar";
import Mainlist from "./components/Mainlist";
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

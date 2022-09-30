import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leadlist from "./LeadlistPage";
import AddLead from "./AddLead";

export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Leadlist/>}></Route>
          <Route path="/AddLead" element={<AddLead/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

import {Route, Routes} from "react-router-dom";
import Interns from "../components/addInterns/Interns.jsx";
import Vendors from "../components/addVendors/Vendors.jsx";
import Groups from "../components/addGroups/Groups.jsx";
import Mentors from "../components/addMentors/Mentors.jsx";
import Events from "../components/addEvent/Events.jsx";
import Settings from "../components/addSettings/Settings.jsx";

function ManagerRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Interns/>}/>
                <Route path="/vendors" element={<Vendors/>}/>
                <Route path="/groups" element={<Groups/>}/>
                <Route path="/mentors" element={<Mentors/>}/>
                <Route path="/events" element={<Events/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>
        </div>
    );
}

export default ManagerRoutes;
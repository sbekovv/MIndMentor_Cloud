import React from 'react';
import {Box, Sidebag, SideBars} from "../addInterns/Interns.jsx";
import {Link} from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import TerminalIcon from '@mui/icons-material/Terminal';
import Button from "@mui/material/Button";
import {ReactSVG} from "react-svg";
import Bag from "../../assets/icon/bag-2.svg";
import Person from "../../assets/icon/personalcard.svg";
import Change from "../../assets/icon/arrange-circle-2.svg";
import Account from "../../assets/icon/user-square.svg";

function Events() {
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <SideBars>
                <div className="side-bar-text">
                    <h1>MindMentor</h1>
                    <div className="side-bar-text-list">
                        <Link to="/"><a style={{display: "flex", flexDirection: "row", alignItems: "center", gap: '10px'}} href="">  <ReactSVG src={Person} style={{paddingTop: "3px"}} /> Interns</a></Link>
                        <Link to="/vendors"><a style={{display: "flex", flexDirection: "row", alignItems: "center", gap: '10px'}} href=""> <ReactSVG src={Bag} style={{paddingTop: "3px"}}/> Vendors</a></Link>
                        <Link to="/groups"><a style={{display: "flex", flexDirection: "row", alignItems: "center", gap: '10px'}} href=""> <ReactSVG src={Change} style={{paddingTop: "3px"}}/> Groups</a></Link>
                        <Link to="/mentors"><a style={{display: "flex", flexDirection: "row", alignItems: "center", gap: '10px'}} href=""> <ReactSVG src={Account} style={{paddingTop: "3px"}}/> Mentors</a></Link>
                        <Link className={`side-bar-text ${location.pathname === '/events' ? 'blue-bg' : ''}`} to="/events"><a style={{display: "flex", flexDirection: "row", alignItems: "center", gap: '10px'}} href=""> <TerminalIcon/> Events</a></Link>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="side-bar-text">
                    <div className="side-bar-text-list">
                        <Link to="/settings"><a style={{display: "flex", flexDirection: "row", alignItems: "center", gap: '10px'}} className="settings" href=""> <SettingsIcon/> Settings</a></Link>
                    </div>
                </div>
            </SideBars>

            <Sidebag>
                <div className="side-bar-bag">
                    <h1>Hello, Super Manager!</h1>
                    <Box>
                        <h1>Events</h1>
                        <Button variant="contained">+ New Event</Button>
                    </Box>
                </div>
            </Sidebag>

        </div>
    );
}

export default Events;

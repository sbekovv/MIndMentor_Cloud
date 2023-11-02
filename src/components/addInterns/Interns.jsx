import React from 'react';
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import SettingsIcon from '@mui/icons-material/Settings';
import Person from "../../assets/icon/personalcard.svg"
import Bag from "../../assets/icon/bag-2.svg"
import Account from "../../assets/icon/user-square.svg"
import TerminalIcon from '@mui/icons-material/Terminal';
import Button from '@mui/material/Button';
import {ReactSVG} from "react-svg";
import Change from "../../assets/icon/arrange-circle-2.svg";

function Interns() {
    const location = useLocation()

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <SideBars>
                <div className="side-bar-text">
                    <h1>MindMentor</h1>
                    <div className="side-bar-text-list">
                        <Link className={`side-bar-text ${location.pathname === '/' ? 'blue-bg' : ''}`} to="/"><a style={{display: "flex", flexDirection: "row", alignItems: "center", gap: '10px' }} href=""> <ReactSVG src={Person} style={{paddingTop: "3px"}} /> Interns</a></Link>
                        <Link to="/vendors"><a style={{display: "flex", flexDirection: "row", alignItems: "center", gap: '10px'}} href=""> <ReactSVG src={Bag} style={{paddingTop: "3px"}}/> Vendors</a></Link>
                        <Link to="/groups"><a style={{display: "flex", flexDirection: "row", alignItems: "center", gap: '10px'}} href=""> <ReactSVG src={Change} style={{paddingTop: "3px"}}/> Groups</a></Link>
                        <Link to="/mentors"><a style={{display: "flex", flexDirection: "row", alignItems: "center", gap: '10px'}} href=""> <ReactSVG src={Account} style={{paddingTop: "3px"}}/> Mentors</a></Link>
                        <Link to="/events"><a style={{display: "flex", flexDirection: "row", alignItems: "center", gap: '10px'}} href=""> <TerminalIcon/> Events</a></Link>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="side-bar-text">
                    <div className="side-bar-text-list">
                        <Link to="/settings"><a style={{display: "flex", flexDirection: "row", alignItems: "center", gap: '10px'}} className="settings" href=""><SettingsIcon/> Settings</a></Link>
                    </div>
                </div>
            </SideBars>

            <Sidebag>
                <div className="side-bar-bag">
                    <h1>Hello, Super Manager!</h1>
                    <Box>
                        <h1>Interns</h1>
                        <Button variant="contained">+ New intern</Button>
                    </Box>

                </div>
            </Sidebag>

        </div>
    );
}

export default Interns;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 29px;
  margin-top: -40px;
`

export const Sidebag = styled.div`
  width: 1195px;
  min-height: 100vh;
  background: #1E1F22;

  .side-bar-bag h1 {
    color: var(--000000, #FFF);
    font-weight: 500;
    text-align: end;
    padding: 39px 19px;
  }
`

export const SideBars = styled.div`
  width: 288px;
  min-height: 100vh;
  background: linear-gradient(176deg, #252335 26.77%, rgba(84, 71, 170, 0.93) 97.4%);
  
  .side-bar-text {
    padding: 39px 32px;
  }
  
  .side-bar-text-list {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
  }

  .side-bar-text h1 {
    color: #FFFEFE;
    font-weight: 500;
    letter-spacing: 2px;
  }

  .side-bar-text {
    letter-spacing: 1px;
  }
  
  .side-bar-text-list {
    margin-left: -27px;
  }

  .side-bar-text a {
    display: flex;
    flex-direction: column;
    color: var(--000000, #FFF);
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
    padding: 8px 10px;
  }

  .blue-bg {
    border-radius: 0 37px 37px 0;
    background: var(--Linear, linear-gradient(93deg, #49318C 3.32%, #3F5FB0 105.32%));
  }


`
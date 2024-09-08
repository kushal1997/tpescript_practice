import * as React from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import UpcomingSessions from "../modal/upcoming_sessions";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
    const navigate=useNavigate();
    const location=useLocation();
    const [modalVissible,isModalVisisble]=React.useState<boolean>(false)

    const handleOpenModal=()=>{
      isModalVisisble(true)
    }
    const handleCloseModal=()=>{
      isModalVisisble(false)
    }
  return (
    <>
     {
          modalVissible && <UpcomingSessions onClose={handleCloseModal}/>
        }
      <div className="layout">
        <div className="inner_layout">
          <h2 onClick={()=>navigate("/")}>React Monitoring</h2>
          <div>
            <p>Our Mission</p>
            <p id={location.pathname !== "/" ?'boreder_p' : ""} onClick={()=>navigate("/sessions")}>Browse Sessions</p>
            <button onClick={handleOpenModal}>Upcoming Sessions</button>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;

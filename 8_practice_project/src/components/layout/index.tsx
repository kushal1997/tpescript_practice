import * as React from "react";
import {  useLocation, useNavigate } from "react-router-dom";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
    const navigate=useNavigate();
    const location=useLocation();
  return (
    <>
      <div className="layout">
        <div className="inner_layout">
          <h2 onClick={()=>navigate("/")}>React Monitoring</h2>
          <div>
            <p>Our Mission</p>
            <p id={location.pathname !== "/" ?'boreder_p' : ""} onClick={()=>navigate("/sessions")}>Browse Sessions</p>
            <button >Upcoming Sessions</button>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;

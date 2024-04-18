import React from "react";
import "./Layout.css";

function Layout() {
  return (
    <React.Fragment>
      <div className="layout">
        <div className="layout-container">
          <div className="left">
            Lorem ipsum dolor sit amet.
          </div>
          <div className="right">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-container"></div>
      </div>
    </React.Fragment>
  );
}

export default Layout;

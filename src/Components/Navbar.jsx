import React from "react";
import styles from "../css/navbar.module.scss";
import logo from "../../public/images/logo.png";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [paths, setPaths] = useState(window.location.href.split("/")[3] || "");
  useEffect(() => {
    setPaths(window.location.href.split("/")[3] || "");
  }, []);

  function handleclick(event, path) {
    console.log(path);
    setPaths(path);
  }

  let routes = [
    {
      name: "Purchases",
    },
    {
      name: "Stock",
    },
    {
      name: "Sales",
    },
  ];

  return (
    <div className={styles.navbar}>
      <div>
        <img src={logo} height={30} width={132} alt="locolwell" />
      </div>

      <div className={styles.navitem}>
        {routes.map((route, index) => (
          <Link className={styles.linkss} to={`/${route.name}`} onClick={(e) => handleclick(e, route.name)} style={{ textDecoration: "none", }}>
            <div key={index} className={styles.nav}>
              <p style={{ color: paths == route.name ? '#E91E63' : '', }}>{route.name}</p>
            </div>
            {paths == route.name && <div className={styles.border}></div>}
          </Link>
        ))}
      </div>

      <div className={styles.logoin}>
        <div className={styles.login}>
          <h2>NA</h2>
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

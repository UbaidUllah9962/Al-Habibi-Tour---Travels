import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [navs, setNavs] = useState([
    { id: 0, name: "Home", link: "/" },
    { id: 1, name: "Images", link: "/images" },
    { id: 2, name: "About", link: "/about" },
  ]);
  return (
    <div className={styles.navbar}>
      <div className={styles.main_heading}>
        <h1>Al Habibi Tour & Travels</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          {navs?.map((nav) => {
            return (
              <li key={nav.id}>
                <NavLink to={nav.link}>{nav.name}</NavLink>
              </li>
            );
          })}

          {/* <li>
            <NavLink to={"/images"}>Images</NavLink>
          </li>

          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

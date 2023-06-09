import React, { useState } from "react";
import styles from "../components/Navbar.module.css";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/Rx";
import { FaFacebook, FaInstagram, FaTwitter, FaHome } from "react-icons/Fa";
import { TiContacts } from "react-icons/Ti";
import { RiSearch2Line } from "react-icons/Ri";
import { SiAboutdotme } from "react-icons/Si";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleChange = () => {
    setIsActive(!isActive);
  };
  return (
    <main className={styles.main}>
      <div className={styles.mainElement}>
        <ul>
          <li>
            <Link className={styles.link} href="/home">
              <FaHome size={20} />
              Home
            </Link>
          </li>
          <li
            className={`${styles.contact} ${
              isActive ? styles.contact : styles.seenContact
            }`}
          >
            <Link className={styles.link} href="/contact">
              <TiContacts size={20} />
              Contact
            </Link>
          </li>
          <li
            className={`${styles.about} ${
              isActive ? styles.about : styles.seenAbout
            }`}
          >
            <Link className={styles.link} href="/about">
              <SiAboutdotme size={20} />
              About
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`${styles.socialMedia} ${
          isActive ? styles.socialMedia : styles.seenSocialMedia
        }`}
      >
        <ul>
          <li className={styles.search}>
            <input type="text" placeholder="Search . . ." />
            <button>
              <RiSearch2Line />
            </button>
          </li>
          <li>
            <Link
              className={styles.linkFacebook}
              href="https://www.facebook.com/"
            >
              <FaFacebook size={25} />
            </Link>
          </li>
          <li>
            <Link
              className={styles.linkInstagram}
              href="https://www.instagram.com/"
            >
              <FaInstagram size={25} />
            </Link>
          </li>
          <li>
            <Link
              className={styles.linkTwitter}
              href="https://www.twitter.com/"
            >
              <FaTwitter size={25} />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.hidden}>
        <button onClick={handleChange}>
          {" "}
          <RxHamburgerMenu size={25} />
        </button>
      </div>
    </main>
  );
};

export default Navbar;

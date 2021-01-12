import React from "react";
// next
import Link from "next/link";
import { useRouter } from "next/router";
// icons
import { FaShoppingBasket } from "react-icons/fa";
import { GiAvocado } from "react-icons/gi";
// styles
import styles from "@styles/navbar.module.css";

export const Navbar = () => {
  const { pathname } = useRouter();
  const validateRoute = (path) => (pathname === path ? styles.active : null);
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={validateRoute("/")}>
          <GiAvocado /> <p>Avo Store</p>
        </a>
      </Link>

      <Link href="/about">
        <a className={validateRoute("/about")}>
          <FaShoppingBasket />
          <p>Canasta</p>
        </a>
      </Link>
    </div>
  );
};

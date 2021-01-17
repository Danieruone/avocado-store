import React from "react";
// next
import Link from "next/link";
import { useRouter } from "next/router";
// icons
import Avocado  from "@components/Avocado";
import BasketIcon  from "@components/BasketIcon";
// styles
import styles from "@styles/navbar.module.css";

export const Navbar = () => {
  const { pathname } = useRouter();
  const validateRoute = (path) => (pathname === path ? styles.active : null);
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">
          <a className={validateRoute("/")}>
            <Avocado size="40px"/> <p>Avo Store</p>
          </a>
        </Link>

        <Link href="/about">
          <a className={validateRoute("/about")}>
            <BasketIcon />
            <p>Canasta</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

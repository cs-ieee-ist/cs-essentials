import React, { useState } from "react";
import Link from "next/link";

import styles from "./layout.module.css";

export default function HeaderSearch() {
  const [query, setQuery] = useState("");

  const inputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={styles.headerSearch}>
      <input placeholder="Search" onChange={inputChange}></input>
      <Link href={{ pathname: `${process.env.BACKEND_URL}/search`, query: { query: query } }}>
        <a className={styles.headerSearchBtn}>
          <img src={`${process.env.BACKEND_URL}/icons/search.svg`}></img>
        </a>
      </Link>
    </div>
  );
}

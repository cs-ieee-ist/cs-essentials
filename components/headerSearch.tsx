import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

import styles from "./layout.module.css";

export default function HeaderSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const inputChange = (event) => {
    setQuery(event.target.value);
  };

  const keyPressHandler = (event) => {
    if (event.key === "Enter")
      router.push(`${process.env.BACKEND_URL}/search?query=${query}`);
  };

  return (
    <div className={styles.headerSearch}>
      <input placeholder="Search" onChange={inputChange} onKeyPress={keyPressHandler}></input>
      <Link href={{ pathname: `${process.env.BACKEND_URL}/search`, query: { query: query } }}>
        <a className={styles.headerSearchBtn}>
          <img src={`${process.env.BACKEND_URL}/icons/search.svg`}></img>
        </a>
      </Link>
    </div>
  );
}

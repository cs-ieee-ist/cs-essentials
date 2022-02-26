import Link from "next/link";
import HeaderSearch from "./headerSearch";
import styles from "./layout.module.css";
import { useState } from "react";

export default function MobileSearch({onSearchClick}) {
	const [query, setQuery] = useState("");

  const inputChange = (event) => {
    setQuery(event.target.value);
	};

	return (
		<div className={styles.mobileSearch}>
			<input className={styles.mobileSearchInput} placeholder="Search" onChange={inputChange}></input>
			<Link href={{ pathname: `/search`, query: { query: query } }} >
        <a className={styles.mobileSearchBtn} onClick={onSearchClick}>
				<span>Search</span>
        </a>
			</Link>
		</div>
	);
}

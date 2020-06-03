import Link from "next/link";
import HeaderSearch from "./headerSearch";
import styles from "./layout.module.css";
import { useState } from "react";
import MobileSearch from "./mobileSearch";

export default function Header() {
	const [search, setSearch] = useState(false);

	const onSearchIconClick = () => {
		setSearch(!search);
	}

	return (
		<header className={styles.header}>
			<div className={styles.headerLeft}>
				<Link href="/">
					<a className={styles.headerLogoLink}>
						<img
							className={styles.headerLogo}
							src="/images/logo-cs.png"
							alt="logo"
						></img>
					</a>
				</Link>
			</div>
			<HeaderSearch />
			<div className={styles.headerRight}>
				<span className={`${styles.headerIcon} ${styles.headerSearchIcon}`} onClick={onSearchIconClick}>
					<img src="/icons/search.svg" alt="search-icon" />
				</span>
				<Link href="/about">
					<a className={styles.headerIcon}>
						<img src="/icons/information.svg" alt="info-icon" />
					</a>
				</Link>
			</div>
			{search ? <MobileSearch onSearchClick={onSearchIconClick} />: ""}
		</header>
	);
}

import styles from "./cards.module.css";
import utilStyles from "../../styles/utils.module.css";
import PageId from "../../models/pageId";
import Link from "next/link";

export default function SearchCard({
	page,
	color,
}: {
	page: PageId;
	color: string;
}) {
	return (
		<Link href={`/content/[topic]/[page]`} as={`${page.getLink()}`}>
			<a>
				<div className={` ${styles.searchCard}`}>
					<div className={styles.searchCardTitle}>
						<span className={styles.searchCardTopic}>{page.getTopic()}</span>
						<span className={styles.searchCardPage}>{page.getPage()}</span>
					</div>
				</div>
			</a>
		</Link>
	);
}

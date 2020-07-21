import styles from "./layout.module.css";
import Link from "next/link";
import PageId from "../models/pageId";

export default function ContentSidebar({
  topicPages,
  activePage,
}: {
  topicPages: PageId[];
  activePage: string;
}) {
  return (
    <div className={` ${styles.contentSidebar}`}>
      <ul className={styles.sidebarList}>
        {topicPages.map((page) => {
          return (
            <li
              key={page.getTitle()}
              className={`${styles.sidebarItem} ${
                isSamePage(page.getPage(), activePage) ? styles.active : ""
              }`}
            >
              <Link href={`${process.env.BACKEND_URL}/content/[topic]/[page]`} as={`${process.env.BACKEND_URL}${page.getLink()}`}>
                <a>{page.getPage()}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const isSamePage = (page: string, activePage: string) => {
  return activePage.replace(/\.md$/, '').split('-')[1] === page;
};

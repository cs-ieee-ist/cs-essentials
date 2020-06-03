import Layout from "../../../components/layout";
import {
	getAllContentIds,
	getContentData,
	getTopicPages,
} from "../../../lib/content";
import Head from "next/head";
import styles from "../content.module.css";
import layoutStyles from "../../../components/layout.module.css";
import { GetStaticProps, GetStaticPaths } from "next";
import ContentCard from "../../../components/cards/contentCard";
import ContentSidebar from "../../../components/contentSidebar";
import PageId from "../../../models/pageId";

export default function Content({
	contentData,
	topicPages,
}: {
	contentData: {
		topic: string;
		page: string;
		contentHtml: string;
	};
	topicPages: { topic: string; page: string }[];
}) {
	return (
		<Layout>
			<Head>
				<title>
					{PageId.createTitle(contentData.topic, contentData.page)}
				</title>
			</Head>
			<div className={layoutStyles.contentContainer}>
				<div className={styles.pageContentContainer}>
					<ContentSidebar
						topicPages={topicPages.map(page => (new PageId(page.topic, page.page)))}
						activePage={contentData.page}
					/>
					<ContentCard>
						<div
							dangerouslySetInnerHTML={{ __html: contentData.contentHtml }}
						/>
					</ContentCard>
					<div className={styles.dummySidebar}></div>
				</div>
			</div>
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllContentIds();

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const contentData = await getContentData(
		params.topic as string,
		params.page as string
	);
	const topicPages = await getTopicPages(params.topic as string);

	return {
		props: {
			contentData,
			topicPages,
		},
	};
};

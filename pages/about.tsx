import Head from "next/head";
import Layout from "../components/layout";
import { getAboutContent } from "../lib/content";
import ContentCard from "../components/cards/contentCard";
import styles from "../components/layout.module.css";
import { GetStaticProps } from "next";
import SiteConstants from "../constants/siteConstants";

export default function About({ content }: { content: string }) {
	return (
		<Layout>
			<Head>
				<title>{"About - " + SiteConstants.COMPLETE_TITLE}</title>
			</Head>
			<div className={styles.contentContainer}>
				<ContentCard>
					<div dangerouslySetInnerHTML={{ __html: content }} />
				</ContentCard>
			</div>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const content = await getAboutContent();
	return {
		props: {
			content,
		},
	};
};

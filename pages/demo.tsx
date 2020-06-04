import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getDemoContent } from "../lib/content";
import ContentCard from "../components/cards/contentCard";
import styles from "../components/layout.module.css";
import { GetStaticProps } from "next";

export default function Demo({ content }: { content: string }) {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
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
	const content = await getDemoContent();
	return {
		props: {
			content,
		},
	};
};

import Head from "next/head";
import SiteConstants from "../constants/siteConstants";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import layoutStyles from "../components/layout.module.css";
import { getContentTopics } from "../lib/content";
import Link from "next/link";
import { GetStaticProps } from "next";
import HomeCard from "../components/cards/homeCard";

export default function Home({
  contentTopics,
}: {
  contentTopics: Array<string>;
}) {
  let nColor = 0;
  const MAX_COLOR = 7;

  return (
    <Layout home>
      <Head>
        <title>{SiteConstants.COMPLETE_TITLE}</title>
      </Head>
      <section className={utilStyles.jumbotron}>
        <h1 className={utilStyles.heading2Xl}>{SiteConstants.TITLE}</h1>
        <h4 className={utilStyles.headingMd}>
          {SiteConstants.BRIEF_INTRO}
          <a href="https://github.com/cs-ieee-ist/cs-essentials">
            GitHub
          </a>
        </h4>
      </section>
      <section className={`${layoutStyles.homeCards} ${utilStyles.padding1px}`}>
        {contentTopics.map((name) => (
          <Link href={`${process.env.BACKEND_URL}/content/[topic]/[page]`} as={`${process.env.BACKEND_URL}/content/${name}/Introduction`} key={name}>
            <a>
              <HomeCard
                name={name}
                color={`backColor${(nColor = (nColor % MAX_COLOR) + 1)}`}
              />
            </a>
          </Link>
        ))}
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const contentTopics = getContentTopics();
  return {
    props: {
      contentTopics,
    },
  };
};

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
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
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.jumbotron}>
        <h1 className={utilStyles.heading2Xl}>CS Essentials</h1>
        <h4 className={utilStyles.headingMd}>
          A repository that helps students, from any area, learn and practice
          with CS-related tools. To contribute to the project go to{" "}
          <a href="https://github.com/cs-ieee-ist/cs-ieee-ist.github.io">
            GitHub
          </a>
        </h4>
      </section>
      <section className={`${layoutStyles.homeCards} ${utilStyles.padding1px}`}>
        {contentTopics.map((name) => (
          <Link href="/content/[topic]/[page]" as={`/content/${name}/introduction`} key={name}>
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

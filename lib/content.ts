import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import highlight from 'remark-highlight.js'

const TOPICS_DIR_PATH = 'content/topics';
const contentDirectory = path.join(process.cwd(), TOPICS_DIR_PATH)
const aboutPagePath = path.join(process.cwd(), 'content/about.md')

export function getContentTopics() {
	// Get topics names under /content
	return fs.readdirSync(contentDirectory)
}

export async function getTopicPages(topic: string): Promise<{ topic: string, page: string }[]> {
	const topicPagesArr: { topic: string, page: string }[] = [];
	const topicDir = path.join(contentDirectory, topic);
	const pages = fs.readdirSync(topicDir);
	for (let page of pages) {
		page = page.replace(/\.md$/, '');
		topicPagesArr.push({ topic, page });
	}

	return topicPagesArr.sort((a, b) => {
		const aPage = a.page;
		const bPage = b.page;
		if (aPage == "introduction") return -1;
		if (bPage == "introduction") return 1;
		if (aPage < bPage) {
			return -1;
		}
		if (aPage > bPage) {
			return 1;
		}
		return 0;
	});
}

export function getAllContentIds() {
	const topicsNames = fs.readdirSync(contentDirectory)
	let pages: { params: { topic: string, page: string } }[] = [];
	for (const topicName of topicsNames) {
		const topicPath = path.join(contentDirectory, topicName)
		const filesNames = fs.readdirSync(topicPath)
		const topicIds = filesNames.map(fileName => {
			return {
				params: {
					topic: topicName,
					page: fileName.replace(/\.md$/, '')
				}
			}
		})
		pages = pages.concat(topicIds);
	}

	return pages;
}

export async function getContentData(topic: string, page: string) {
	// Load introduction if is topic root path

	const fullPath = path.join(contentDirectory, `${topic}/${page}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents)

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(html)
		.use(highlight)
		.process(matterResult.content)
	const contentHtml = processedContent.toString()

	// Combine the data with the id and contentHtml
	return {
		topic,
		page,
		contentHtml,
		...(matterResult.data as { date: string; title: string })
	}
}


export async function getAboutContent() {
	// Read markdown file as string
	const fileContents = fs.readFileSync(aboutPagePath, 'utf8')

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents)

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content)
	const contentHtml = processedContent.toString()

	// Return data
	return contentHtml
}


export async function getPages(): Promise<{ topic: string, page: string }[]> {
	let pages: { topic: string, page: string }[] = [];
	const topics = fs.readdirSync(contentDirectory, 'utf8');
	for (const topic of topics) {
		const topicPath = path.join(contentDirectory, topic);
		const topicPages = fs.readdirSync(topicPath, 'utf-8');
		const nTopicPages = topicPages.map(value => ({ topic, page: value.replace(/\.md$/, '') }));
		pages = pages.concat(nTopicPages);
	}

	return pages;
}

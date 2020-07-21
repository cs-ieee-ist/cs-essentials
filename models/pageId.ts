export default class PageId {
	private _topic: string;
	private _page: string;
	private _title: string;

	constructor(topic: string, page: string) {
		this._topic = topic;
		this._page = page.replace(/[0-9]+-/, '').replace(/\.md$/, '');
		this._title = PageId.createTitle(topic, page);
	}

	static createTitle(topic: string, page: string): string {
		const topicStr = topic.charAt(0).toUpperCase() + topic.slice(1);
		const pageStr = page.replace(/[0-9]+-/, '').replace(/\.md$/, '');
		return `${topicStr} - ${pageStr}`;
	}

	getTopic() {
		return this._topic;
	}

	getPage() {
		return this._page;
	}

	getTitle() {
		return this._title;
	}

	getLink() {
		return  encodeURI(encodeURI(`/content/${this._topic}/${this._page}`));
	}

}

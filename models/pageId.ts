export default class PageId {
	private _topic: string;
	private _page: string;
	private _title: string;

	constructor(topic: string, page?: string) {
		this._topic = topic;
		if (page)
			this._page = page.replace(/[0-9]+-/, '').replace(/\.md$/, '');
		else
			this._page = "Introduction";
		this._title = PageId.createTitle(this._topic, this._page);
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
		return encodeURI(`/content/${this._topic}/${this._page}`);
	}

}

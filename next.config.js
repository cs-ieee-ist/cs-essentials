const prod = process.env.NODE_ENV === 'production';

module.exports = {
	env: {
		GITHUB_CONTENT_URL:'https://github.com/cs-ieee-ist/cs-essentials/tree/master/content/topics',
		BACKEND_URL: prod ? '/cs-essentials/' : '',
	},
}
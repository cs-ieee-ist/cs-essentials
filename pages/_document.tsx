import Document, { Html, Head, Main, NextScript } from 'next/document'
import SiteConstants from '../constants/siteConstants'

class CustomDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content={SiteConstants.DESCRIPTION} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default CustomDocument
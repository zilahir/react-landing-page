module.exports = {
	siteMetadata: {
		title: 'react-landing-page',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				useResolveUrlLoader: true,
				sassRuleTest: /\.global\.s(a|c)ss$/,
				sassRuleModulesTest: /.*\.module\.s(a|c)ss$/,
				debug: true,
				javascriptEnabled: true,
			},
		},
		{
			resolve: 'gatsby-source-graphql',
			options: {
				// This type will contain remote schema Query type
				typeName: 'team',
				// This is field under which it's accessible
				fieldName: 'team',
				// Url to query from
				url:
            'https://api-euwest.graphcms.com/v1/ck2hhc9311fnp01fgapwhb4pb/master',
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'GatsbyJS – React Landing Page',
				short_name: 'GCMS blog',
				start_url: '/',
				background_color: '#fff',
				theme_color: '#61045f',
				display: 'minimal-ui',
				icons: [
					{
						src: '/favicons/chrome-192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/favicons/chrome-512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		},
		'gatsby-plugin-offline',
	],
}

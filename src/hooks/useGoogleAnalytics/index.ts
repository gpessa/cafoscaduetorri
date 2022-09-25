const env = process.env.NODE_ENV
const isProduction = env == "production"

// log the pageview with their URL
export const pageView = (page_path: string) => {
	isProduction && window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
		page_path,
	})
}

// // log specific events happening.
export const event = (
	action: string, params: { event_category: string, event_label: string }
) => {
	isProduction && window.gtag('event', action, params)
}
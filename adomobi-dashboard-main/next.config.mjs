/** @type {import('next').NextConfig} */
const nextConfig = {
	// When serving the Next.js dashboard under a sub-path (e.g. /dashboard)
	// set `basePath`. You'll then deploy the monorepo with routing so
	// the dashboard is available at example.com/dashboard.
	basePath: "/dashboard",
	// Ensure assets are referenced correctly; assetPrefix can be adjusted
	// if you serve assets from a CDN or different prefix.
	assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "",
};

export default nextConfig;

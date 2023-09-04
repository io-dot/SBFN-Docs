// Metadata, SEO, and Social
export const SITE_TITLE = "SBFN Docs"
export const SITE_DESCRIPTION = "A documentation template for SBFN"
export const SITE_URL = "https://github.com/io-dot"
export const SITE_DEFAULT_OG_IMAGE = "/assets/og-image.png"
export const GIT_REPO = "/SBFN-Docs"

// Docs Sidebar temp
// The path should match the folder name in src/content/docs/
export const SIDEBAR_ITEMS = {
  "General styles": [
    `${GIT_REPO}/docs/general-styles/colors`,
    `${GIT_REPO}/docs/general-styles/font-size-headings`,
    `${GIT_REPO}/docs/general-styles/buttons`,
  ],
  "General Components": [
    `${GIT_REPO}/docs/get-started/introduction`,
    "/SBFN-Docs/docs/get-started/installation",
  ],
  "SBFN Components": [
    `${GIT_REPO}/docs/get-started/introduction`,
    "/SBFN-Docs/docs/get-started/installation",
  ],
  "Tutorials": [
    "/SBFN-Docs/docs/tutorials/build-x",
  ],
  "Guides": [
    "/SBFN-Docs/docs/guides/migrate-from-z",
  ]
}

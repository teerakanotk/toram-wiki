import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://localhost:3000"),
  title: {
    template: "%s | Toram Docs",
  },
  description: "Toram Online Documentation",
};

const navbar = (
  <Navbar
    logo={<b>Toram Online</b>}
    projectLink="https://github.com/teerakanotk/toram-wiki/tree/main"
  />
);
const footer = <Footer>© {new Date().getFullYear()} Toram Online.</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="T" />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/teerakanotk/toram"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

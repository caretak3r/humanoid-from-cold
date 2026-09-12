import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import 'katex/dist/katex.min.css'

export const metadata = {
  title: {
    default: 'Humanoid from Cold',
    template: '%s – Humanoid from Cold'
  },
  description:
    'Learning notes: building a humanoid as a multi-rate cyber-physical system, from cold start through joint FOC and beyond.'
}

const navbar = (
  <Navbar
    logo={<b>Humanoid from Cold</b>}
    projectLink="https://github.com/caretak3r/humanoid-from-cold"
  />
)

const footer = (
  <Footer>
    {new Date().getFullYear()} © caretak3r ·{' '}
    <a href="https://silent.engineer/humanoid-from-cold/">silent.engineer</a>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/caretak3r/humanoid-from-cold/tree/main/content"
          editLink="Edit this page on GitHub"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

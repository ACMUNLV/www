import '@/styles/global.css'
import 'node_modules/react-modal-video/css/modal-video.css'

import type { Metadata } from 'next'
import { siteMetadata, seoKeywords } from '@/data/seo-meta'
import { ScrollToTop } from '@/components/common/scroll-to-top'
import { Header } from '@/components/layout/header'

export const metadata: Metadata = {
  keywords: seoKeywords,
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  icons: { icon: siteMetadata.icon },
  description: siteMetadata.description,
  metadataBase: new URL('https://acm.cs.unlv.edu/'),
  openGraph: {
    url: './',
    type: 'website',
    locale: 'en_US',
    siteName: 'unlv-acm',
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  alternates: {
    canonical: './',
    languages: {
      'en-US': '/en-US',
    },
  },
  category: 'technology',
}


// export const dynamic = 'force-dynamic'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        Thien: <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body suppressHydrationWarning className="antialiased">
        <Header />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}

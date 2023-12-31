'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Header2 from '@/src/components/ui/header2';
import PageIllustration from '@/src/components/page-illustration'
import Footer from '@/src/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <main className="grow">
        <PageIllustration />

        {children}

      </main>

      <Footer />
    </>
  )
}

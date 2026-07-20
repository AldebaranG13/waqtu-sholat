import { useEffect } from 'react'
import WebpageTitle from '../components/webpageTitle'
import WebsiteMark from '../components/website-mark'

export default function Display() {
  useEffect(() => {
    // prevent document scrolling while this component is mounted
    const prevHtmlOverflow = document.documentElement.style.overflow
    const prevBodyOverflow = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow
      document.body.style.overflow = prevBodyOverflow
    }
  }, [])

  return (
    <>
      <WebpageTitle title="Display" />
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <p>Welcome to Waqtu Sholat. This is the display page with the app logo.</p>
      </div>
    </>
  )
}

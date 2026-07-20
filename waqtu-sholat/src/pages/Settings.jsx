import WebpageTitle from '../components/webpageTitle'
import WebsiteMark from '../components/website-mark'

export default function Settings() {
  return (
    <>
      <WebpageTitle title="Settings" />
      <h1 style={{ margin: '50px 50px 0 50px', fontSize: '400%' }}>Settings</h1>
      <p>Adjust the app configuration on this page.</p>
      <WebsiteMark />
    </>
  )
}

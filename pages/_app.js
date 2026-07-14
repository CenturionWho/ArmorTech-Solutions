import '../styles/globals.css';
import ChatLauncher from '../components/ChatLauncher';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ChatLauncher />
      <address
        itemScope
        itemType="https://schema.org/PostalAddress"
        style={{ margin: 0, padding: '18px 20px', textAlign: 'center', fontStyle: 'normal', lineHeight: 1.65, borderTop: '1px solid rgba(255,255,255,0.16)', background: '#050505', color: '#cfcfcf' }}
      >
        <strong style={{ color: '#ff7a1a' }}>ArmorTech Headquarters:</strong>{' '}
        <a href="https://www.google.com/maps/search/?api=1&query=719+Hope+Rd%2C+Stamps%2C+AR+71860" style={{ color: 'inherit' }}>
          719 Hope Rd, Stamps, AR 71860
        </a>
        <br />Serving Arkansas, Texas, Louisiana, Oklahoma, and Mississippi.
      </address>
    </>
  );
}

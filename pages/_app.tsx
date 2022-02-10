import Head from 'next/head';
import '@styles/globals.scss';
import '@styles/stisla/components.css';
import '@styles/stisla/style.css';
import '../public/modules/bootstrap/css/bootstrap.min.css';
import '../public/modules/fontawesome/css/all.min.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }: any): JSX.Element {
  return (
    <div>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" itemType="image/x-icon" content="Next Stisla" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Script src="/modules/jquery.min.js"/>
      <Script src="/modules/popper.js" strategy="lazyOnload" />
      <Script src="/modules/tooltip.js" strategy="lazyOnload" />
      <Script src="/modules/bootstrap/js/bootstrap.min.js" strategy="lazyOnload" />
      <Script src="/modules/nicescroll/jquery.nicescroll.min.js" strategy="lazyOnload" />
      <Script src="/modules/moment.min.js" strategy="lazyOnload" />
      <Script src="/js/stisla.js" strategy="lazyOnload" />
      <Script src="/js/scripts.js" strategy="lazyOnload" />
    </div>
  )
}

export default MyApp

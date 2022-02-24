import Head from 'next/head';
import '@styles/globals.scss';
import '@styles/stisla/components.css';
import '@styles/stisla/style.css';
import '../public/modules/bootstrap/css/bootstrap.min.css';
import '../public/modules/fontawesome/css/all.min.css';
import Script from 'next/script';
import { useEffect } from 'react';

import moment from 'moment';

function MyApp({ Component, pageProps }: any): JSX.Element {
  useEffect( () => {
    window.moment = require('/modules/moment.min.js');
  });

  return (
    <div>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" itemType="image/x-icon" content="Next Stisla" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Script src="/modules/jquery.min.js" onLoad={ () => console.log('JQuery Loaded') }/>
      <Script src="/modules/popper.js" onLoad={ () => console.log('Popper Loaded') }/>
      <Script src="/modules/tooltip.js" onLoad={ () => console.log('Tooltip Loaded') }/>
      <Script src="/modules/nicescroll/jquery.nicescroll.min.js" onLoad={ () => console.log('NiceScroll Loaded') }/>
      <Script src="" onLoad={ () => console.log('Moment Loaded') }/>
      <Script src="/modules/bootstrap/js/bootstrap.min.js" onLoad={ () => console.log('Popper Loaded') }/>
      <Script src="/js/stisla.js"/>
      <Script src="/js/scripts.js"/>
    </div>
  )
}

export default MyApp

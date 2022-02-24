import Head from 'next/head';
import '@styles/globals.scss';
import '@styles/stisla/components.css';
import '@styles/stisla/style.css';
import '../public/modules/fontawesome/css/all.min.css';
import Script from 'next/script';
import { useEffect } from 'react';

// Declare window to local variable
declare const window: any;

// CSS 
import 'bootstrap/dist/css/bootstrap.min.css';

// Stisla Package
import moment from 'moment';
import * as jQuery from 'jquery';

// Require Package
require('jquery-ui-dist/jquery-ui');
require('jquery.nicescroll/jquery.nicescroll');
require('jquery-sparkline/jquery.sparkline');


function MyApp({ Component, pageProps }: any): JSX.Element {
  useEffect( () => {
    window.moment = moment;
    window.jQuery = jQuery;
    window.$ = jQuery
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
      <Script src="/modules/popper.js" onLoad={ () => console.log('Popper Loaded') }/>
      <Script src="/modules/tooltip.js" onLoad={ () => console.log('Tooltip Loaded') }/>
      <Script src="/modules/bootstrap/js/bootstrap.min.js" onLoad={ () => console.log('Popper Loaded') }/>
      <Script src="/js/stisla.js"/>
      <Script src="/js/scripts.js"/>
    </div>
  );
}

export default MyApp

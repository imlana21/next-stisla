import Head from 'next/head';
import { useEffect } from 'react';

// Package CSS 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'bootstrap-timepicker/css/bootstrap-timepicker.min.css';
import 'bootstrap-daterangepicker/daterangepicker.css'
import 'bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css';
import 'bootstrap-timepicker/css/bootstrap-timepicker.min.css';
import 'jqvmap/dist/jqvmap.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'codemirror/lib/codemirror.css';
import 'chocolat/dist/css/chocolat.css';
import 'codemirror/theme/duotone-dark.css';
import 'ionicons201/css/ionicons.min.css';
import 'selectric/public/selectric.css';
import '@mdi/font/css/materialdesignicons.min.css';
import 'flag-icons/css/flag-icons.css';
import 'dropzone/dist/dropzone.css';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'weathericons/css/weather-icons.min.css';
import 'weathericons/css/weather-icons-wind.min.css';
import 'izitoast/dist/css/iziToast.min.css';
import 'prismjs/themes/prism.css';

// Stisla CSS
import '@styles/stisla/components.css';
import '@styles/stisla/style.css';

// Custom CSS
import '@styles/globals.scss';

// Moment
import moment from 'moment';

// JQuery
import * as jQuery from 'jquery';

declare const window:any;

function MyApp({ Component, pageProps }: any): JSX.Element {
  useEffect( () => {
    window.jQuery = jQuery;
    window.$ = jQuery;
    window.moment = moment;   
    window.JSZip = require('jszip');
    window.Chart = require('chart.js/dist/chart');

    if (document.readyState == 'interactive') {
      require('jquery-ui-dist/jquery-ui');
      require('jquery.nicescroll/jquery.nicescroll');
      require('jquery-sparkline/jquery.sparkline');
      // JQVMap
      require('jqvmap/dist/jquery.vmap');
      require('jqvmap/dist/maps/jquery.vmap.world');
      require('jqvmap/dist/maps/jquery.vmap.france');
      // OWL Corousel
      require('owl.carousel/dist/owl.carousel');
      // Popper
      require('popper.js/dist/popper');
      //Bootstrap
      require('bootstrap/dist/js/bootstrap.bundle');
      require('bootstrap-timepicker/js/bootstrap-timepicker');
      require('bootstrap-daterangepicker/daterangepicker');
      require('bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min');
      require('bootstrap-timepicker/js/bootstrap-timepicker');
      require('bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min');
      require('bootstrap-tagsinput/dist/bootstrap-tagsinput');
      require('bootstrap-select/dist/js/bootstrap-select');
      // SweetAlert
      require('sweetalert/dist/sweetalert.min.js');
      // Codemirror
      require('codemirror/lib/codemirror');
      require('codemirror/mode/javascript/javascript');
      // Chocolat
      require('chocolat/dist/js/chocolat');
      // Selectric
      require('selectric/public/jquery.selectric');
      // Dropzone
      require('dropzone/dist/dropzone-min');
      // Sticky-kit
      require('sticky-kit/dist/sticky-kit');
      // Input Mask
      require('inputmask/dist/inputmask');
      require('inputmask/dist/jquery.inputmask');
      // Full Calender
      require('fullcalendar/main');
      // Select2
      require('select2/dist/js/select2.full');
      // Datatables
      require('datatables.net-buttons-bs4');
      require('datatables.net-buttons/js/buttons.html5');
      require('datatables.net-buttons/js/buttons.print');
      require('datatables.net-buttons/js/buttons.colVis');
      require('datatables.net-responsive');
      require('datatables.net-responsive-bs4');
      require('datatables.net-select');
      require('datatables.net-select-bs4');
      // Izitoast
      require('izitoast/dist/js/iziToast');
      // Prismjs
      require('prismjs/prism');
      // Simple Weather
      require('simpleweather/jquery.simpleWeather');
      // PDF Maker
      require('pdfmake/build/pdfmake');
      require('pdfmake/build/vfs_fonts');
      
      // Stisla Scripts
      require('../public/js/stisla');
      require('../public/js/scripts');
    } else if (document.readyState === 'complete') {
      // Summernote for textarea
      require('summernote/src/js/summernote');
    }
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
    </div>
  );
}

export default MyApp

import FooterComponent from '@components/footer/footer';
import HeaderComponent from '@components/header/header';
import SidebarComponent from '@components/sidebar/sidebar';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Index </title>
      </Head>
      <HeaderComponent />
      <SidebarComponent />
      <FooterComponent />
    </div>
  )
}

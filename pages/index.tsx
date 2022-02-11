import FooterComponent from '@components/footer';
import HeaderComponent from '@components/header';
import SidebarComponent from '@components/sidebar';
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

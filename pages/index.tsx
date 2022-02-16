import SidebarComponent from '@components/sidebar/sidebar';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Index </title>
      </Head>
      <SidebarComponent />
    </div>
  )
}

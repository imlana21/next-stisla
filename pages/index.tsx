import BootstrapCard from '@components/bootstrap-card';
import BootstrapCarousel from '@components/bootstrap-carousel';
import BootstrapCollapse from '@components/bootstrap-collapse';
import BootstrapDropdown from '@components/bootstrap-dropdown';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Index </title>
      </Head>
      <BootstrapDropdown />
    </div>
  )
}

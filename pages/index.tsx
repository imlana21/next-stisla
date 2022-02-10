import BootstrapCard from '@components/bootstrap-card';
import BootstrapCarousel from '@components/bootstrap-carousel';
import BootstrapCollapse from '@components/bootstrap-collapse';
import BootstrapDropdown from '@components/bootstrap-dropdown';
import BootstrapForm from '@components/bootstrap-form';
import BootstrapListGroup from '@components/bootstrap-listgroup';
import BootstrapMediaObject from '@components/bootstrap-mediaobject';
import BootstrapModal from '@components/bootstrap-modal';
import BootstrapNav from '@components/bootstrap-nav';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Index </title>
      </Head>
      <BootstrapNav />
    </div>
  )
}

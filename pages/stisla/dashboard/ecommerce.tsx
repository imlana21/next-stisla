import AdminLayout from '@layouts/admin-layout';
import EcommercePage from '@stisla/dashboard/ecommerce';
import Head from 'next/head';

export default function DashboardEcommerce() {
  return (
    <AdminLayout>
      <Head>
        <title> Dashbboard Ecommerce </title>
      </Head>
      <EcommercePage />
    </AdminLayout>
  );
}
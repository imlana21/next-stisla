import AdminLayout from "@layouts/admin-layout";
import DefaultComponent from "@stisla/dashboard/default/default";
import Head from "next/head";

export default function DashboardDefault() {
  return (
    <AdminLayout>
      <Head>
        <title> Dashboard Default </title>
      </Head>
      <DefaultComponent />
    </AdminLayout>
  );
}
import AdminLayout from "@layouts/admin-layout";
import GeneralDashboard from "@stisla/dashboard/general";
import Head from "next/head";

export default function DashboardDefault() {
  return (
    <AdminLayout>
      <Head>
        <title> Dashboard Default </title>
      </Head>
      <GeneralDashboard />
    </AdminLayout>
  );
}
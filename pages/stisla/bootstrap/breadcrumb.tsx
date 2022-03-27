import BasicLayout from "@stisla/basic-layout";
import BootstrapBreadcrumb from "@stisla/page/bootstrap/breadcrumb";
import Head from "next/head";

export default function BootstrapBreadcrumbPage() {
  return (
    <BasicLayout>
      <Head>
        <title> Bootstrap Breadcrumb </title>
      </Head>
      <BootstrapBreadcrumb />
    </BasicLayout>
  );
}
import BasicLayout from "@stisla/basic-layout";
import BootstrapBadge from "@stisla/page/bootstrap/badge";
import Head from "next/head";

export default function BootstrapBadgePage() {
  return (
    <BasicLayout>
      <Head>
        <title> Bootstrap Badge </title>
      </Head>
      <BootstrapBadge />
    </BasicLayout>
  );
}
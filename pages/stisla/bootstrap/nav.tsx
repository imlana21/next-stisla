import BasicLayout from "@stisla/basic-layout";
import BootstrapNav from "@stisla/page/bootstrap/nav";
import Head from "next/head";

export default function BootstrapNavPage() {
  return(
    <BasicLayout>
      <Head>
        <title> Bootstrap Nav </title>
      </Head>
      <BootstrapNav />
    </BasicLayout>
  );
}
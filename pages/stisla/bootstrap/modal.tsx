import BasicLayout from "@stisla/basic-layout";
import BootstrapModal from "@stisla/page/bootstrap/modal";
import Head from "next/head";

export default function BootstrapModalPage() {
  return(
    <BasicLayout>
      <Head>
        <title> Bootstrap Modal </title>
      </Head>
      <BootstrapModal />
    </BasicLayout>
  );
}
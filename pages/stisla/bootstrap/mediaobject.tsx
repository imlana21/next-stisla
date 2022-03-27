import BasicLayout from "@stisla/basic-layout";
import BootstrapMediaObject from "@stisla/page/bootstrap/mediaobject";
import Head from "next/head";

export default function BootstrapMediaobjectPage() {
  return(
    <BasicLayout>
      <Head>
        <title> Bootstrap Mediaobject </title>
      </Head>
      <BootstrapMediaObject />
    </BasicLayout>
  );
}
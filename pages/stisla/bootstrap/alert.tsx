import BasicLayout from "@stisla/basic-layout";
import BootstrapAlert from "@stisla/page/bootstrap/alert";
import Head from "next/head";

export default function BootstrapAlertPage() {
  return (
    <BasicLayout>
      <Head>
        <title> Bootstrap Alert </title>
      </Head>
      <BootstrapAlert />
    </BasicLayout>
  )
}
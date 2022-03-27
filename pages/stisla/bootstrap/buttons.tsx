import BasicLayout from "@stisla/basic-layout";
import BootstrapButtons from "@stisla/page/bootstrap/buttons";
import Head from "next/head";

export default function BootstrapButtonPage() {
  return (
    <BasicLayout>
      <Head>
        <title> Bootstrap Button </title>
      </Head>
      <BootstrapButtons />
    </BasicLayout>
  )
}
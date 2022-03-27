import BasicLayout from "@stisla/basic-layout";
import BootstrapCard from "@stisla/page/bootstrap/card";
import Head from "next/head";

export default function BootstrapCardPage() {
  return (
    <BasicLayout>
      <Head>
        <title> Bootstrap Card </title>
      </Head>
      <BootstrapCard />
    </BasicLayout>
  );
}
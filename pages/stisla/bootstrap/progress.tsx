import BasicLayout from "@stisla/basic-layout";
import BootstrapProgress from "@stisla/page/bootstrap/progress";
import Head from "next/head";

export default function BootstrapProgressPage() {
  return(
    <BasicLayout>
      <Head>
        <title> Bootstrap Progress </title>
      </Head>
      <BootstrapProgress />
    </BasicLayout>
  );
}
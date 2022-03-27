import BasicLayout from "@stisla/basic-layout";
import BootstrapCollapse from "@stisla/page/bootstrap/collapse";
import Head from "next/head";

export default function BootstrapCollapsePage() {
  return(
    <BasicLayout>
      <Head>
        <title> Bootstrap Collapse </title>
      </Head>
      <BootstrapCollapse />      
    </BasicLayout>
  );
}
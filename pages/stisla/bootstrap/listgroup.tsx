import BasicLayout from "@stisla/basic-layout";
import BootstrapListGroup from "@stisla/page/bootstrap/listgroup";
import Head from "next/head";

export default function BootstrapListgroupPage() {
  return(
    <BasicLayout>
      <Head>
        <title> Bootstrap Listgroup </title>
      </Head>
      <BootstrapListGroup />
    </BasicLayout>
  );
}
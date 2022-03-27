import BasicLayout from "@stisla/basic-layout";
import BootstrapTable from "@stisla/page/bootstrap/table";
import Head from "next/head";

export default function BootstrapTablePage() {
  return(
    <BasicLayout>
      <Head>
        <title> Bootstrap Table </title>
      </Head>
      <BootstrapTable />
    </BasicLayout>
  );
}
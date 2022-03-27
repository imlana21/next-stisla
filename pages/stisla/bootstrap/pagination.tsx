import BasicLayout from "@stisla/basic-layout";
import BootstrapPagination from "@stisla/page/bootstrap/pagination";
import Head from "next/head";

export default function BootstrapPaginationPage() {
  return(
    <BasicLayout>
      <Head>
        <title> Bootstrap Pagination </title>
      </Head>
      <BootstrapPagination />
    </BasicLayout>
  );
}
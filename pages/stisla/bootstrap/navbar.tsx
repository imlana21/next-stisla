import BasicLayout from "@stisla/basic-layout";
import BootstrapNavbar from "@stisla/page/bootstrap/navbar";
import Head from "next/head";

export default function BootstrapNavbarPage() {
  return(
    <BasicLayout>
      <Head>
        <title> Bootstrap Navbar </title>
      </Head>
      <BootstrapNavbar />
    </BasicLayout>
  );
}
import BasicLayout from "@stisla/basic-layout";
import BootstrapDropdown from "@stisla/page/bootstrap/dropdown";
import Head from "next/head";

export default function BootstrapDropdownPage() {
  return(
    <BasicLayout>
      <Head>
        <title> Bootstrap Dropdown </title>
      </Head>
      <BootstrapDropdown />
    </BasicLayout>
  );
}
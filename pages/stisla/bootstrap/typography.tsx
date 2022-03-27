import BasicLayout from "@stisla/basic-layout";
import BootstrapTypography from "@stisla/page/bootstrap/typography";
import Head from "next/head";

export default function BootstrapTypographyPage() {
  return(
    <BasicLayout>
      <Head>
        <title> Bootstrap Typography </title>
      </Head>
      <BootstrapTypography />
    </BasicLayout>
  );
}
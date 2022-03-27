import BasicLayout from "@stisla/basic-layout";
import BootstrapTooltip from "@stisla/page/bootstrap/tooltip";
import Head from "next/head";

export default function BootstrapTooltipPage() {
  return(
    <BasicLayout>
      <Head>
        <title> Bootstrap Tooltip </title>
      </Head>
      <BootstrapTooltip />
    </BasicLayout>
  );
}
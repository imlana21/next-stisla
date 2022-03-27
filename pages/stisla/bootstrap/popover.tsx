import BasicLayout from "@stisla/basic-layout";
import BootstrapPopover from "@stisla/page/bootstrap/popover";
import Head from "next/head";

export default function BootstrapPopoverPage() {
  return(
    <BasicLayout>
      <Head>
        <title> Bootstrap Popover </title>
      </Head>
      <BootstrapPopover />
    </BasicLayout>
  );
}
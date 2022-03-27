import BasicLayout from "@stisla/basic-layout";
import BootstrapCarousel from "@stisla/page/bootstrap/carousel";
import Head from "next/head";

export default function BootstrapCorouselPage() {
  return (
    <BasicLayout>
      <Head>
        <title> Bootstrap Corousel </title>
      </Head>
      <BootstrapCarousel />
    </BasicLayout>
  );
}
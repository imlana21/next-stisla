import BasicLayout from "@stisla/basic-layout";
import BootstrapForm from "@stisla/page/bootstrap/form";
import Head from "next/head";

export default function BootstrapFormPage() {
  return(
    <BasicLayout>
      <Head>
        <title> Bootstrap Form </title>
      </Head>
      <BootstrapForm />
    </BasicLayout>
  );
}
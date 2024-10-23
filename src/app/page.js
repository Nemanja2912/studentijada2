import HomeWrapper from "@/components/homeWrapper/homeWrapper";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <HomeWrapper />
    </>
  );
}

export const metadata = {
  title: "Studentijada - Najveća studentska žurka",
  description: "...",
};

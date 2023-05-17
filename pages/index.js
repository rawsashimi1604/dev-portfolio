import Head from "next/head";

import Header from "@/components/layouts/Header";
import Main from "@/components/modules/home/Main";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gavin Loo - Software Engineer - Home</title>
      </Head>
      <div className="bg-white text-black">
        <Header
          title="Hello, my name is Gavin."
          subtitle="I am a 2nd year Software Engineering major based in Singapore. Currently I'm studying at Singapore Institute of Technology and learning more about web development."
        />
        <Main />
        <Footer />
      </div>
    </>
  );
}

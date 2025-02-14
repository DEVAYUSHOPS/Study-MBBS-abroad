import Head from "next/head";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Countries from "@/components/Countries";
import Process from "@/components/Process";
import LeadForm from "@/components/LeadForm";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Study MBBS Abroad</title>
        <meta name="description" content="Apply now to study MBBS in top countries like Russia, Philippines, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <Countries />
        <Process />
        <LeadForm />
      </main>
    </>
  );
}

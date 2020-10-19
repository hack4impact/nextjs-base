import Head from "next/head";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <>
        <Head>
          <title>Hack4Impact Full Stack Project Template</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation/>
        </>
    )
}
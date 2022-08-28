import Head from "next/head";
import Header from "../Components/Header";
import { About } from "../Components/About";
import { Main } from "../Components/Main";
import { Skills } from "../Components/Skills";
import { Navbar } from "../Components/Navbar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Portafolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        ></link>
      </Head>
      <Navbar />
      <Header />
      <main>
        <About />
        <br />
        <Skills />
        <br />
        <Main />
      </main>
      <footer>
        <h4>Hecho por mi</h4>
      </footer>
    </div>
  );
}

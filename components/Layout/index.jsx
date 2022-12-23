import Head from "next/head";

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>akaigão</title>
      </Head>

      <header>
        <nav>
          <p>This is an example header!</p>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>This is an exmaple footer!</p>
      </footer>
    </>
  );
}

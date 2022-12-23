import { ThemeProvider } from "styled-components";
import { Layout } from "../components/Layout";
import { GlobalStyle, theme } from "../styles/globalstyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

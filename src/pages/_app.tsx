import { GlobalStyles } from "@styles/Global";
import { LandingStyles } from "@styles/Landing";
import { KeywordsStyles } from "@styles/Keywords";
import { FooterStyles } from "@styles/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <LandingStyles />
      <KeywordsStyles />
      <FooterStyles />
      <Component {...pageProps} />
    </>
  );
}

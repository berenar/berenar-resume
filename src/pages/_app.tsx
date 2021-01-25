/* eslint-disable react/jsx-props-no-spreading */
import GlobalStyles from '@styles/Global'
import LandingStyles from '@styles/Landing'
import KeywordsStyles from '@styles/Keywords'
import FooterStyles from '@styles/Footer'
import CornerRibbonStyles from '@styles/CornerRibbon'

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: any
  pageProps: JSX.Element
}

export default function App({ Component, pageProps }: Props): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <LandingStyles />
      <KeywordsStyles />
      <FooterStyles />
      <CornerRibbonStyles />
      <Component {...pageProps} />
    </>
  )
}

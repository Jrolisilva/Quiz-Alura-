import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import db from '../db.json'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = db.theme


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

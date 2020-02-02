import StateProvider from '../components/context/StateProider';
import Head from 'next/head';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../global.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Fit On</title>
      <link
        href='https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:300,400&display=swap'
        rel='stylesheet'
      />
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
        key='viewport'
      />
    </Head>
    <StateProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </StateProvider>
  </>
);

export default MyApp;

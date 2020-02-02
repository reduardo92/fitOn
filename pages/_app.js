import StateProvider from '../components/context/StateProider';
// import Layout from '../components/layout';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Head from 'next/head';
import '../global.css';
import Carousell from '../components/ui/carousel/carousel';

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
      <Carousell />
      <Footer />
    </StateProvider>
  </>
);

export default MyApp;

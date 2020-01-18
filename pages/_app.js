import StateProvider from '../components/context/StateProider';
import Layout from '../components/layout';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Head from 'next/head';
import '../global.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Fit On</title>
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:300,400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <StateProvider>
        <Navbar />
        <Layout>
          <main>
            <Component {...pageProps} />
          </main>
        </Layout>
        <Footer />
      </StateProvider>
    </>
  );
};

export default MyApp;

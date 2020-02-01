import StateProvider from '../components/context/StateProider';
import Layout from '../components/layout';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Head from 'next/head';

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
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
      <Footer />
    </StateProvider>
  </>
);

export default MyApp;

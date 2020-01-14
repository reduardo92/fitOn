import StateProvider from '../components/context/StateProider';
import Layout from '../components/layout';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const MyApp = ({ Component, pageProps }) => {
  return (
    <StateProvider>
      <Navbar />
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
      <Footer />
    </StateProvider>
  );
};

export default MyApp;

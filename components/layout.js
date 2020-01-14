import Head from 'next/head';
import '../global.css';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Fit On</title>
      <link href='../public/global.css' rel='stylesheet' />
      <link
        href='https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:300,400&display=swap'
        rel='stylesheet'
      />
    </Head>
    {children}
  </>
);

export default Layout;

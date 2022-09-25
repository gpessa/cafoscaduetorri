import { NextPage } from 'next';
import Head from 'next/head';
import { t } from '@lingui/macro';
export { getStaticProps } from '../utility';


const Home: NextPage = () => {
  const pageTitle = t`Pessa Luciano Consulting - Tapis-Roulant per cavalli`;
  const pageDescription = t`Scopri il nostro tapis-roulant, il perfetto strumento per l'allenamento del tuo cavallo. Immancabile nel tuo maneggio.`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
      </Head>

      <h1>Ciccio</h1>
    </>
  );
};

export default Home;

import { NextPage } from 'next';
import Head from 'next/head';
import { t } from '@lingui/macro';
import { Gallery, Section } from 'components';
export { getStaticProps } from '../utility';

const images = [
  { caption: "", src: require("../assets/photos/senza titolo-1-3.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-2-2.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-5-2.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-13-2.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-13-3.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-17-3.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-23-2.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-24-3.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-25-2.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-30.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-34.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-36.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-40.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-41-2.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-47.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-49.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-52-2.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-60-2.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-64-2.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-70-2.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-72.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-74-2.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-75-2.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-76.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-78-2.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-80.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-82.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-84.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-88.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-92.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-98-2.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-105.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-113.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-115.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-118.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-122.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-126.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-128.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-130.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-134.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-149.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-153.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-154.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-156.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-158.jpg") },
  { caption: "", src: require("../assets/photos/senza titolo-161.jpg") },
];

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

      <Section>
        <Gallery images={images} />
      </Section>
    </>);
};

export default Home;

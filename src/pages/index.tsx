import { NextPage } from 'next';
import Head from 'next/head';
import { t } from '@lingui/macro';
import {
  Address,
  Columns,
  Gallery,
  Hero,
  Map,
  Section,
  Title,
} from 'components';
import { organization, shortName } from 'contasts';
export { getStaticProps } from '../utility';
import { Trans } from '@lingui/macro';
import { Typography, styled, Grid } from '@mui/material';
import { BREAKPOINT } from 'theme';

const images = [
  { caption: t``, src: require('../assets/photos/senza_titolo-41-2.jpg') },
  { caption: t``, src: require('../assets/photos/senza_titolo-47.jpg') },
  { caption: t``, src: require('../assets/photos/senza_titolo-49.jpg') },
  { caption: t``, src: require('../assets/photos/senza_titolo-52-2.jpg') },
  // { caption: t``, src: require("../assets/photos/senza_titolo-72.jpg") },
  // { caption: t``, src: require("../assets/photos/senza_titolo-76.jpg") },
  // { caption: t``, src: require("../assets/photos/senza_titolo-80.jpg") },
  // { caption: t``, src: require("../assets/photos/senza_titolo-82.jpg") },
  { caption: t``, src: require('../assets/photos/senza_titolo-88.jpg') },
  { caption: t``, src: require('../assets/photos/senza_titolo-92.jpg') },
  { caption: t``, src: require('../assets/photos/senza_titolo-98-2.jpg') },
  // { caption: t``, src: require("../assets/photos/senza_titolo-115.jpg") },
  // { caption: t``, src: require("../assets/photos/senza_titolo-122.jpg") },
  // { caption: t``, src: require("../assets/photos/senza_titolo-126.jpg") },
  // { caption: t``, src: require("../assets/photos/senza_titolo-134.jpg") },
  { caption: t``, src: require('../assets/photos/senza_titolo-154.jpg') },
  { caption: t``, src: require('../assets/photos/senza_titolo-156.jpg') },
  { caption: t``, src: require('../assets/photos/senza_titolo-158.jpg') },
];

const Home: NextPage = () => {
  const pageTitle = t``;
  const pageDescription = t``;

  const images_outside = [
    {
      caption: t`P.zza Mercanzia`,
      src: require('../assets/photos/senza_titolo-2-2.jpg'),
    },
    {
      caption: t`Ingresso`,
      src: require('../assets/photos/senza_titolo-13-3.jpg'),
    },
    {
      caption: t`Ingresso`,
      src: require('../assets/photos/senza_titolo-17-3.jpg'),
    },
    {
      caption: t`L'ascensore`,
      src: require('../assets/photos/senza_titolo-24-3.jpg'),
    },
  ];

  const images_entrance = [
    {
      caption: t`Salone stuccato`,
      src: require('../assets/photos/senza_titolo-70-2.jpg'),
    },
    {
      caption: t`Salone stuccato`,
      src: require('../assets/photos/senza_titolo-74-2.jpg'),
    },
    {
      caption: t`La veranda`,
      src: require('../assets/photos/senza_titolo-105.jpg'),
    },
    {
      caption: t`La veranda`,
      src: require('../assets/photos/senza_titolo-113.jpg'),
    },
  ];

  const images_terrace_outside = [
    { caption: t``, src: require('../assets/photos/senza_titolo-64-2.jpg') },
    { caption: t``, src: require('../assets/photos/senza_titolo-149.jpg') },
    // { caption: t``, src: require("../assets/photos/senza_titolo-153.jpg") },
    { caption: t``, src: require('../assets/photos/senza_titolo-130.jpg') },
    { caption: t``, src: require('../assets/photos/senza_titolo-128.jpg') },
    // { caption: t``, src: require("../assets/photos/senza_titolo-118.jpg") },
  ];

  const images_living_room = [
    { caption: t``, src: require('../assets/photos/senza_titolo-78-2.jpg') },
    { caption: t``, src: require('../assets/photos/senza_titolo-161.jpg') },
    { caption: t``, src: require('../assets/photos/senza_titolo-84.jpg') },
  ];

  const images_20_room_double = [
    {
      caption: t`Camera anni 20 con letti singole`,
      src: require('../assets/photos/senza_titolo-36.jpg'),
    },
    {
      caption: t`Camera anni 20 con letti singole`,
      src: require('../assets/photos/senza_titolo-40.jpg'),
    },
  ];

  const images_20_room_queen = [
    {
      caption: t`Camera anni 20 con letto matrimonaiale`,
      src: require('../assets/photos/senza_titolo-25-2.jpg'),
    },
    {
      caption: t`Camera anni 20 con letto matrimonaiale`,
      src: require('../assets/photos/senza_titolo-30.jpg'),
    },
    {
      caption: t`Camera anni 20 con letto matrimonaiale`,
      src: require('../assets/photos/senza_titolo-34.jpg'),
    },
  ];

  const images_blue_room = [
    {
      caption: t`La camera blu`,
      src: require('../assets/photos/senza_titolo-5-2.jpg'),
    },
    {
      caption: t`La camera blu`,
      src: require('../assets/photos/senza_titolo-13-2.jpg'),
    },
    {
      caption: t`La camera blu`,
      src: require('../assets/photos/senza_titolo-23-2.jpg'),
    },
  ];

  const images_bed = [
    ...images_20_room_double,
    ...images_20_room_queen,
    ...images_blue_room,
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
      </Head>

      <section>
        <Hero
          image={require('../assets/photos/senza_titolo-78-2.jpg').default.src}
        />

        <Columns
          left={<Gallery images={images_outside} xs={6} md={6} />}
          right={
            <>
              <Typography variant="h2" paragraph>
                {shortName}
              </Typography>
              <Trans>
                <Typography paragraph>
                  Sotto le Due Torri, a destra si scorge la P.zza Mercanzia su
                  cui si affaccia, in angolo tra via Castiglione e via Caprarie,
                  uno dei rari palazzi Liberty di Bologna.
                </Typography>

                <Typography paragraph>
                  La boiserie alle pareti e l&apos;ascensore in legno e ferro
                  battuto del 1912 così decò, vi porteranno all&apos;attico.
                </Typography>

                <Typography paragraph variant="body2">
                  Entrate...
                </Typography>
              </Trans>
            </>
          }
        />

        <Section spacing={10}>
          <Title title={<Trans>Il salone e la veranda</Trans>} />
          <Trans>
            <Typography paragraph>
              La {shortName} vi accoglierà con il salone stuccato a marmorino e
              il soffitto stuccato a roselline, con le sue vetrate liberty, con
              la luce irreale della veranda verde e turchese avvolta da bagliori
              d&apos;oro dei vetri cattedrale.
            </Typography>

            <Typography paragraph>
              Così, vi offrirà un aperitivo con tipici assaggi bolognesi o un
              the aromatico con biscotteria assortita.
            </Typography>
          </Trans>
          <Gallery images={images_entrance} xs={6} md={3} />
        </Section>

        <Columns
          right={<Gallery images={images_terrace_outside} xs={6} md={6} />}
          left={
            <>
              <Title title={<Trans>La terrazza</Trans>} />
              <Trans>
                <Typography paragraph variant="body2">
                  In terrazza, come dalla veranda, vedrete Bologna e le sue
                  torri mozze, i merli, le cupole verdi, S. Petronio e palazzo
                  Re Enzo e su, fino ai colli, con un solo sguardo.
                </Typography>

                <Typography paragraph variant="body2">
                  Da qui la mattina si levano i profumi della storica Panetteria
                  Atti e quelli del Mercato Clavature sottostanti.
                </Typography>
              </Trans>
            </>
          }
        />

        <Columns
          left={<Gallery images={images_living_room} md={6} />}
          right={
            <>
              <Title title={<Trans>Il salotto</Trans>} />

              <Trans>
                <Typography paragraph>
                  Adesso rilassatevi, dopo il viaggio o la giornata di lavoro,
                  nelle vostre camere.
                </Typography>

                <Typography paragraph>
                  Bologna vi attenderà fino a tardi con i suoi ristoranti, le
                  enoteche, i teatri e le cantine di jazz. Sarà {shortName} a
                  prenotare per voi, mentre starete degustando ottimi vini e
                  formaggi tipici.
                </Typography>
              </Trans>
            </>
          }
          inverted
        />

        {/* <Section spacing={4} color="primary">
          <Trans>Nel cuore del centro storico, sotto le Due Torri, in un raro e luminoso attico art decò, dove il terrazzo affaccia sui tetti, sulle cupole e sulle torri merlate della Bologna medievale, il B&B Cà Fosca vi offre un&apos;ospitalità esclusiva ed elegante, un&apos;accoglienza attenta e di grande atmosfera...</Trans>
        </Section> */}

        <Section spacing={4}>
          <Title title={<Trans>Bed</Trans>} />
          <Typography paragraph>
            Al ritorno, dopo un ultimo passito con i cantucci e le disposizioni
            per il breakfast del giorno dopo, servito all&apos;ora che
            preferirete, riposerete nelle camere da letto arredate in stile anni
            &apos;20, o nella piccola camera bianca/blu, che fa tanto Istanbul,
            con il bagno interno dotato di doccia. Ogni camera è dotata di bagno
            esclusivo prospiciente, aria condizionata, doppi vetri acustici, TV
            e collegamenti internet. Le due camere doppie sono ampie,
            luminosissime ed hanno possibilità di aggiungere un terzo letto.
            All&apos;occorrenza la piccola matrimoniale bianca/blu può essere
            adibita ad uso singola.
          </Typography>

          <Gallery images={images_bed} />
        </Section>

        <Section spacing={4}>
          <Title title={<Trans>Breakfast</Trans>} />
          <Typography>
            Caffè, Espresso, Cappuccino, the inglesi, cinesi, indiani aromatici,
            the verde, spremute di arancio, yogurt. E ancora, corn flake, ai
            cereali e alla cioccolata, muesli con scelte di uva sultanina, noci,
            mandorle, fichi, datteri e frutta fresca di stagione. La Ciambella
            bolognese, biscotteria casereccia, pane ai cereali e sesamo, miele e
            cioccolate dell&apos;antica farmacia dei Monaci camaldolesi di S.
            Stefano, mostarda mantovana, varie scelte di formaggi italiani e
            salumi.
          </Typography>
        </Section>

        <Section spacing={4}>
          <Title title={<Trans>Prenotazioni</Trans>} />
          <Typography paragraph>
            A caparra è richiesto prepagamento di 1 notte NON RIMBORSABILE a
            disdetta per periodo &lt; 2 giorni oppure caparra confirmatoria
            anticipata del 50% non rimborsabile per periodi &gt; 2 giorni
            tramite:
          </Typography>
          <Typography component="ul">
            <Typography component="li">
              <strong>Vaglia postale</strong> a Patrizia Ramponi , Via Caprarie,
              7 - 40123- Bologna
            </Typography>
            <Typography component="li">
              <strong>Bonifico</strong> Banca Sella Via Clavature 9 e/d Bologna,
              IBAN IT64FO326802400052740050020 - SWIFT SELBIT2BXXX
            </Typography>
            <Typography component="li">
              <strong>Carta di credito</strong> (CartaSi&apos;, Visa,
              Mastercard) inviati via fax o e-mail specificando nome, cognome,
              numero e data di scadenza della carta che sarà considerata a
              garanzia della prenotazione. Il tutto è meglio specificato nel
              Modulo di prenotazione/cancellazione inviato a richiesta
              prenotazione.
            </Typography>
          </Typography>
        </Section>

        <Section spacing={4} id="price">
          {/* <Title title={
            <Trans>Prezzi</Trans>} /> */}

          <Typography variant="h2" paragraph>
            Prezzi
          </Typography>
          <Typography component="ul" paragraph>
            <Typography component="li">
              <strong>Camera doppia uso singola</strong> con bagno € 110/170
            </Typography>
            <Typography component="li">
              <strong>Camera doppia</strong> con bagno € 130/250 Letto aggiunto
              € 160/280
            </Typography>
          </Typography>
          <Typography component="small" variant="small">
            Bambini in camera genitori: sotto i 2 anni, gratuito
          </Typography>
        </Section>
      </section>

      {/* 
      <Section spacing={4}>
        <Gallery images={images} />
      </Section> */}
    </>
  );
};

export default Home;

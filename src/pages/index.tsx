import { NextPage } from 'next';
import Head from 'next/head';
import { t } from '@lingui/macro';
import { Address, Gallery, Map, Section, Title } from 'components';
import { address } from './_app';
export { getStaticProps } from '../utility';
import { Trans } from '@lingui/macro';
import { Typography } from '@mui/material';

const images = [
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
      <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.0477294405655!2d11.343928115940258!3d44.49368880569184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4bef6c0af5d%3A0x3b2e8b12277e4b48!2sCa%20&#39;Fosca%20Due%20Torri!5e0!3m2!1sen!2snl!4v1664144230968!5m2!1sen!2snl" />

      <Section spacing={4}>
        <Trans>Nel cuore del centro storico, sotto le Due Torri, in un raro e luminoso attico art decò, dove il terrazzo affaccia sui tetti, sulle cupole e sulle torri merlate della Bologna medievale, il B&B Cà Fosca vi offre un&apos;ospitalità esclusiva ed elegante, un&apos;accoglienza attenta e di grande atmosfera...</Trans>
      </Section>
      <Section spacing={4}>
        <Title title={
          <Trans>La casa</Trans>} />
        <Typography>
          Sotto le Due Torri, a destra si scorge la P.zza Mercanzia su cui si affaccia, in angolo tra via Castiglione e via Caprarie, uno dei rari
          palazzi Liberty di Bologna. Entrate. La boiserie alle pareti e
          l&apos;ascensore in legno e ferro battuto del 1912 così decò, vi
          porteranno all&apos;attico. La Ca&apos;Fosca vi accoglierà con il salone
          stuccato a marmorino e il soffitto stuccato a roselline, con le sue
          vetrate liberty, con la luce irreale della veranda verde e turchese
          avvolta da bagliori d&apos;oro dei vetri cattedrale. Così, vi offrirà un
          aperitivo con tipici assaggi bolognesi o un the aromatico con
          biscotteria assortita.
          In terrazza, come dalla veranda, vedrete Bologna e le sue torri
          mozze, i merli, le cupole verdi, S. Petronio e palazzo Re Enzo e su,
          fino ai colli, con un solo sguardo. Da qui la mattina si levano i
          profumi della storica Panetteria Atti e quelli del Mercato Clavature
          sottostanti.
          Adesso rilassatevi, dopo il viaggio o la giornata di lavoro, nelle
          vostre camere.
          Bologna vi attenderà fino a tardi con i suoi ristoranti, le enoteche, i teatri e le cantine di jazz.
          Sarà Ca&apos;Fosca a prenotare per voi, mentre starete degustando ottimi vini e formaggi tipici.
        </Typography>
      </Section>
      <Section spacing={4}>
        <Title title={
          <Trans>BED</Trans>} />
        <Typography>
          Al ritorno, dopo un ultimo passito con i cantucci e le disposizioni
          per il breakfast del giorno dopo, servito all&apos;ora che preferirete,
          riposerete nelle camere da letto arredate in stile anni &apos;20, o nella
          piccola camera bianca/blu, che fa tanto Istanbul, con il bagno
          interno dotato di doccia.
          Ogni camera è dotata di bagno esclusivo prospiciente, aria
          condizionata, doppi vetri acustici, TV e collegamenti
          internet.
          Le due camere doppie sono ampie, luminosissime ed hanno
          possibilità di aggiungere un terzo letto. All&apos;occorrenza la piccola
          matrimoniale bianca/blu può essere adibita ad uso singola.
        </Typography>
      </Section>
      <Section spacing={4}>
        <Title title={
          <Trans>BREAKFAST</Trans>} />
        <Typography>
          Caffè, Espresso, Cappuccino, The inglesi, cinesi, indiani aromatici, the verde,
          spremute di arancio, yogurt .
          E ancora, corn flake , ai cereali e alla cioccolata, muesli con scelte di uva
          sultanina, noci, mandorle, fichi, datteri e frutta fresca di stagione. La Ciambella
          bolognese, biscotteria casereccia, pane ai cereali e sesamo,
          miele e cioccolate dell&apos;antica
          farmacia dei Monaci camaldolesi di S. Stefano, mostarda mantovana,
          varie scelte di formaggi italiani e salumi.

        </Typography>
      </Section>
      <Section spacing={4}>
        <Title title={
          <Trans>OSPITALITA&apos;</Trans>} />
        <Typography>
          Siete a Bologna per turismo, per lavoro,
          per studio?
          Se siete giunti in auto, deposti i bagagli, la
          potrete posteggiare nel nostro
          parcheggio privato del centro: non vi
          occorrerà più. Ogni luogo è comodamente
          raggiungibile a piedi.
          A Cà Fosca vi troverete nel cuore di
          questa città nata attorno allo Studio dell&apos;Università e sviluppatasi nella filosofia dell&apos;accoglienza.
          La Piazza della Mercanzia, su cui vi sveglierete la mattina, vi racconterà la storia delle
          sue antiche botteghe e drogherie. Scesi in strada attraverserete il mercato di Clavature per raggiungere Piazza
          Maggiore da cui sceglierete autobus o taxi per raggiungere la fiera, San Luca, i parchi o i musei
          e le facoltà fuori mura. Se invece oltrepasserete via Rizzoli, attraverso il ghetto ebraico raggiungerete
          l&apos;Università da una prospettiva medievale ancora intatta, ma vi perderete tra i suggestivi locali del popolo
          degli studenti. Attraversando la piazza Santo Stefano e Corte Isolani, Strada Maggiore vi condurrà alle
          Facoltà di economia e all&apos;Accademia musicale. Non vi va di camminare?
          Ca&apos;Fosca vi mette a disposizione biciclette e monopattini gratuitamente.
          Potrete organizzare
          serenamente la vostra giornata di lavoro, le visite turistiche, lo shopping o la vostra serata tra ristoranti e
          spettacoli vari.
          Siete in viaggio con la famiglia? I più piccoli potranno ricevere le cure di giovani baby-sitter e per tutti loro
          ci sarà qualche giocattolo, dei bei cartoons e il roof garden sempre a disposizione.

        </Typography>
      </Section>
      <Section spacing={4}>
        <Title title={
          <Trans>PRENOTAZIONI</Trans>} />
        <Typography>
          A caparra è richiesto prepagamento di 1 notte NON RIMBORSABILE a disdetta per periodo &lt; 2 giorni
          oppure caparra confirmatoria anticipata del 50% non rimborsabile per periodi &gt;	2 giorni tramite:
          - Vaglia postale a Patrizia Ramponi , Via Caprarie, 7 - 40123- Bologna
          - Bonifico Banca Sella Via Clavature 9 e/d Bologna
          IBAN IT64FO326802400052740050020 - SWIFT SELBIT2BXXX
          - Carta di credito (CartaSi&apos;, Visa, Mastercard) inviati via fax o e-mail specificando nome, cognome,
          numero e data di scadenza della carta che sarà considerata a garanzia della prenotazione. Il tutto è
          meglio specificato nel Modulo di prenotazione/cancellazione inviato a richiesta prenotazione.

        </Typography>
      </Section>
      <Section spacing={4}>
        <Title title={
          <Trans>PREZZI</Trans>} />
        <Typography>
          CAMERA DOPPIA uso singola con bagno € 110/170
          CAMERA DOPPIA con bagno € 130/250 Letto aggiunto € 160/280
          Bambini in camera genitori: sotto i 2 anni, gratuito
        </Typography>
      </Section>
      <Section spacing={4}>
        <Address {...address} />
      </Section>
      <Section spacing={4}>
        <Gallery images={images} />
      </Section>
    </>);
};

export default Home;

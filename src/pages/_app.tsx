import { CacheProvider, EmotionCache } from '@emotion/react';
import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';
import { I18nProvider } from '@lingui/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Footer, Navigation, Contacts } from 'components';
import { organization } from 'contasts';
import * as ga from 'hooks/useGoogleAnalytics';
import { en, fr, it } from 'make-plural/plurals';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { helmetJsonLdProp } from 'react-schemaorg';
import { BedAndBreakfast, Graph } from 'schema-dts';
import createEmotionCache from 'utility';
import theme from '../theme';

export type MyAppProps = AppProps<{ messages: any }> & {
  emotionCache: EmotionCache;
};

const PLURALS: any = {
  it,
  fr,
  en,
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { locale, events, locales, asPath } = useRouter();
  const brand = organization.name;

  i18n.loadLocaleData(locale!, { plurals: PLURALS[locale!] });
  i18n.load(locale!, pageProps.messages);
  i18n.activate(locale!);

  useEffect(() => {
    events.on('routeChangeComplete', ga.pageView);
    return () => {
      events.off('routeChangeComplete', ga.pageView);
    };
  }, [events]);

  return (
    <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />

          {locales?.map((locale) => (
            <link
              key={locale}
              rel="alternate"
              hrefLang={locale}
              href={`${process.env.NEXT_PUBLIC_SITE_URL}${locale}${asPath}`}
            />
          ))}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: helmetJsonLdProp<BedAndBreakfast>({
                '@context': 'https://schema.org',
                ...organization,
              }).innerHTML,
            }}
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Navigation />
          <Component {...pageProps} />
          <Contacts />
          <Footer />
        </ThemeProvider>
      </CacheProvider>
    </I18nProvider>
  );
};

export default MyApp;

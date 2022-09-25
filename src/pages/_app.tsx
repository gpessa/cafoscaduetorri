
import { CacheProvider, EmotionCache } from '@emotion/react';
import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';
import { I18nProvider } from '@lingui/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Footer, Header } from 'components';
import { AddressProps } from 'components/Address';
import * as ga from 'hooks/useGoogleAnalytics';
import { en, fr, it } from 'make-plural/plurals';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { helmetJsonLdProp } from 'react-schemaorg';
import { Organization } from 'schema-dts';
import createEmotionCache from 'utility';
import theme from '../theme';

export type MyAppProps = AppProps<{ messages: any }> & { emotionCache: EmotionCache };

const address: AddressProps = {
  name: 'Pessa Luciano Consulting',
  telephone: '+39 348 4102805',
  email: 'lucianopessa@gmail.com',
  streetAddress: 'Via Scaligera 52',
  addressLocality: 'Montagnana',
  addressRegion: 'Padova',
  country: 'Italy',
  postalCode: '35044',
  whatsapp: '+39 348 4102805',
  id: '05323870286',
};

const PLURALS: any = {
  it,
  fr,
  en
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { locale, events, locales, asPath } = useRouter()
  const brand = 'Pessa Luciano Consulting';

  i18n.loadLocaleData(locale!, { plurals: PLURALS[locale!] })
  i18n.load(locale!, pageProps.messages)
  i18n.activate(locale!)

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
              __html: helmetJsonLdProp<Organization>({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: brand,
                url: process.env.NEXT_PUBLIC_SITE_URL,
                logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
                address: {
                  '@type': 'PostalAddress',
                  postalCode: address.postalCode,
                  addressCountry: address.country,
                  addressRegion: address.addressRegion,
                  streetAddress: address.streetAddress,
                  addressLocality: address.addressLocality,
                },
                telephone: address.telephone,
                email: address.email,
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: address.telephone,
                  contactType: t`Supporto clienti`,
                },
                founders: {
                  '@type': 'Person',
                  name: 'Luciano Pessa',
                  gender: 'Male',
                  nationality: 'Italian',
                },
              }).innerHTML,
            }}
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </CacheProvider>
    </I18nProvider>
  )
}

export default MyApp
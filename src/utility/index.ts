import createCache from '@emotion/cache';
import { GetStaticPropsContext } from 'next'

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const { messages } = await import(`../i18n/${locale}/messages.po`)

  return {
    props: { messages },
  }
}
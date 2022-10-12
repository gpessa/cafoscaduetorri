import { t } from '@lingui/macro';
import { BedAndBreakfast, ContactPoint, PostalAddress } from 'schema-dts';

export const location = {
  '@type': 'PostalAddress' as PostalAddress['@type'],
  addressCountry: 'Italy',
  addressLocality: 'Bologna',
  addressRegion: 'BO',
  postalCode: '40123',
  streetAddress: 'Via Caprarie n. 7',
};

export const contactPoint = {
  '@type': 'ContactPoint' as ContactPoint['@type'],
  email: 'cafoscaduetorri@gmail.com',
  telephone: '+39 051 261221',
  faxNumber: '+39 051 261221',
};

export const shortName = 'Ca’ Fosca';

export const organization = {
  '@type': 'BedAndBreakfast' as Exclude<BedAndBreakfast, string>['@type'],
  name: `${shortName} Due Torri - Bed & Breakfast`,
  description: "",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  email: contactPoint.email,
  petsAllowed: false,
  // logo: '',
  // image: '',
  telephone: '+39 335 314761',
  contactPoint,
  location,
};

import { Trans } from '@lingui/macro';
import {
  AlternateEmail,
  Badge, FaxOutlined, LocalPhone, Smartphone, WhatsApp
} from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { Data } from 'components';
import Tripadvisor from 'components/Tripadvisor';
import React from 'react';

export interface AddressProps {
  bank?: JSX.Element;
  name?: string;
  email?: string;
  addressCountry?: string;
  whatsapp?: string;
  postalCode?: string;
  addressRegion?: string;
  streetAddress?: string;
  addressLocality?: string;
  id?: string;
  mobile?: string;
  telephone?: string;
  faxNumber: string;
  className?: string;
}

const Address: React.FC<AddressProps> = ({
  name,
  addressCountry,
  addressLocality,
  id,
  bank,
  whatsapp,
  postalCode,
  addressRegion,
  streetAddress,
  telephone,
  email,
  mobile,
  faxNumber,
  ...props
}) => {
  const hasAddress = streetAddress != undefined;

  return (
    <Stack itemScope {...props} spacing={2}>
      <Typography variant="h6">{name}</Typography>

      {hasAddress && (
        <Box itemScope>
          <div>{streetAddress}</div>
          <span>{addressLocality}</span>
          <br />
          <span>{postalCode}</span>, <span>{addressRegion}</span> (
          <span>{addressCountry}</span>)
        </Box>
      )}

      {mobile && (
        <Data
          icon={<Smartphone />}
          label={<Trans>Cellulare</Trans>}
          value={mobile}
          href={`tel:${mobile.replace(/ /g, '')}`}
        />
      )}

      {telephone && (
        <Data
          icon={<LocalPhone />}
          label={<Trans>Telefono</Trans>}
          value={telephone}
          href={`tel:${telephone.replace(/ /g, '')}`}
        />
      )}

      {whatsapp && (
        <Data
          label={<Trans>WhatsApp</Trans>}
          icon={<WhatsApp />}
          value={whatsapp}
          href={`https://wa.me/${whatsapp.replace(/ /g, '')}`}
        />
      )}

      {faxNumber && (
        <Data
          icon={<FaxOutlined />}
          label={<Trans>Fax</Trans>}
          value={faxNumber}
        />
      )}

      {email && (
        <Data
          icon={<AlternateEmail />}
          label={<Trans>Email</Trans>}
          value={email}
          href={`mailto:${email}`}
        />
      )}

      {id && (
        <Data
          label={<Trans>Partita IVA</Trans>}
          value={id}
          icon={<Badge />}
        />
      )}

      {/* <Tripadvisor /> */}
    </Stack>
  );
};

export default Address;

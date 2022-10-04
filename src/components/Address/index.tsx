import { Data } from 'components';
import React from 'react';
import { Trans } from '@lingui/macro';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import BadgeIcon from '@mui/icons-material/Badge';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsApp';
import { Box, Stack, Typography } from '@mui/material';

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
  ...props
}) => {
  const hasAddress = streetAddress != undefined;

  return (
    <Stack itemScope {...props} spacing={2}>
      <Typography variant="h6">{name}</Typography>

      {hasAddress && (
        <Box itemScope mb={1}>
          <div>{streetAddress}</div>
          <span>{addressLocality}</span>
          <br />
          <span>{postalCode}</span>, <span>{addressRegion}</span> (
          <span>{addressCountry}</span>)
        </Box>
      )}

      {mobile && (
        <Data
          icon={<LocalPhoneOutlinedIcon />}
          label={<Trans>Cellulare</Trans>}
          value={mobile}
          href={`tel:${mobile.replace(/ /g, '')}`}
        />
      )}

      {telephone && (
        <Data
          icon={<LocalPhoneOutlinedIcon />}
          label={<Trans>Telefono</Trans>}
          value={telephone}
          href={`tel:${telephone.replace(/ /g, '')}`}
        />
      )}

      {whatsapp && (
        <Data
          label={<Trans>WhatsApp</Trans>}
          icon={<WhatsappOutlinedIcon />}
          value={whatsapp}
          href={`https://wa.me/${whatsapp.replace(/ /g, '')}`}
        />
      )}

      {email && (
        <Data
          icon={<AlternateEmailOutlinedIcon />}
          label={<Trans>Email</Trans>}
          value={email}
          href={`mailto:${email}`}
        />
      )}

      {id && (
        <Data
          label={<Trans>Partita IVA</Trans>}
          value={id}
          icon={<BadgeIcon />}
        />
      )}
    </Stack>
  );
};

export default Address;

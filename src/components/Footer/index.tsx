import { Section } from 'components';
import React from 'react';
import { Trans } from '@lingui/macro';
import { styled, Typography } from '@mui/material';
import { organization } from 'contasts';

const BottomPartStyled = styled(Section)(({ theme }) => ({
  color: theme.palette.grey[500],
  textAlign: 'center',
}));

const Footer: React.FC = () => (
  <footer>
    <BottomPartStyled>
      <Typography variant="small">
        <Trans>{organization.name}</Trans>
      </Typography>
    </BottomPartStyled>
  </footer>
);

export default Footer;

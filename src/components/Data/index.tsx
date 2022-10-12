import React from 'react';

import { Box, Link, Stack, styled, Typography } from '@mui/material';

type Props = {
  icon?: JSX.Element;
  label: JSX.Element;
  value: number | string | string[] | JSX.Element | JSX.Element[];
  href?: string;
};

const LabelStyled = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(1),
  fontWeight: 600,
}));

const LinkStyled = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(1),
  fontWeight: "normal",
  color: 'inherit'
}));

const Data: React.FC<Props> = ({ value, label, icon, href, ...props }) => (
  <Stack direction="row" alignItems="center" spacing={1} {...props}>
    {icon}
    <LabelStyled>{label}:</LabelStyled>
    {href ? <LinkStyled href={href}>{value}</LinkStyled> : <Box>{value}</Box>}
  </Stack>
);

export default Data;

import React from 'react';
import { BREAKPOINT } from 'theme';
import { Box, BoxProps, styled, Typography } from '@mui/material';


export type Props = {
  text?: JSX.Element;
  title: JSX.Element;
  subtitle?: JSX.Element | string;
  color?: string;
} & Pick<BoxProps, 'sx' | 'className'>;

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up(BREAKPOINT)]: {
    maxWidth: '100%',
  },
}));

const Title: React.FC<Props> = ({
  title,
  sx,
  subtitle,
  text,
  color,
  className,
}) => (
  <StyledBox {...{ sx, className }}>
    {subtitle && (
      <Typography variant="caption" gutterBottom>
        {subtitle}
      </Typography>
    )}
    <Typography variant="h4" color={color} gutterBottom>
      {title}
    </Typography>
    {text && <>{text}</>}
  </StyledBox>
);

export default Title;

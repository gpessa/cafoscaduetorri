import React, { ReactNode } from 'react';
import { BREAKPOINT } from 'theme';
import { Grid, styled } from '@mui/material';
import Section, { SectionProps } from '../Section';

type Props = {
  left: ReactNode;
  right: ReactNode;
  inverted?: boolean;
} & SectionProps;

const SectionStyled = styled(Section)<Pick<Props, 'inverted'>>(
  ({ theme, inverted }) => {
    const rightColor = inverted ? theme.palette.primary.main : theme.palette.common.white;
    const leftColor = inverted ? theme.palette.common.white : theme.palette.primary.main

    return {
      padding: 0,
      [theme.breakpoints.up(BREAKPOINT)]: {
        background: `linear-gradient(90deg, ${leftColor} 50%, ${rightColor} 50%)`
      },
    }
  });

const LeftColumn = styled(Grid)<Pick<Props, 'inverted'>>(
  ({ theme, inverted }) => {
    const backgroundColor = inverted ? theme.palette.common.white : theme.palette.primary.main;
    const color = theme.palette.getContrastText(backgroundColor)

    return {
      backgroundColor,
      color,
      padding: `${theme.spacing(5)} ${theme.spacing(3)}`,
      [theme.breakpoints.up(BREAKPOINT)]: {
        paddingLeft: '0!important',
        backgroundColor: 'unset',
        padding: theme.spacing(6),
      },
    }
  });

const RightColumn = styled(Grid)<Pick<Props, 'inverted'>>(
  ({ theme, inverted }) => {
    const backgroundColor = inverted ? theme.palette.primary.main : theme.palette.common.white;
    const color = theme.palette.getContrastText(backgroundColor)

    return {
      backgroundColor,
      color,
      padding: `${theme.spacing(5)} ${theme.spacing(3)}`,
      [theme.breakpoints.up(BREAKPOINT)]: {
        paddingRight: '0!important',
        backgroundColor: 'unset',
        padding: theme.spacing(6),
      },
    }
  });

const Columns: React.FC<Props> = ({ left, right, inverted, ...props }) => (
  <SectionStyled {...{ ...props, inverted }}>
    <Grid container alignItems={'center'}>
      <LeftColumn item xs={12} md={6} inverted={inverted}>
        {left}
      </LeftColumn>
      <RightColumn item xs={12} md={6} inverted={inverted}>
        {right}
      </RightColumn>
    </Grid>
  </SectionStyled>
);

export default Columns;

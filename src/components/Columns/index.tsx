import React, { ReactNode } from 'react';
import { BREAKPOINT } from 'theme';
import { Grid, styled } from '@mui/material';
import Section, { SectionProps } from '../Section';


type Props = {
  left: ReactNode;
  right: ReactNode;
} & SectionProps

const SectionStyled = styled(Section)(({ theme }) => ({
  padding: 0,
  [theme.breakpoints.up(BREAKPOINT)]: {
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 50%, ${theme.palette.common.white} 50%)`,
  },
}));

const LeftColumn = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: `${theme.spacing(5)} ${theme.spacing(3)}`,
  [theme.breakpoints.up(BREAKPOINT)]: {
    backgroundColor: 'unset',
    paddingLeft: '0!important',
    padding: theme.spacing(6),
  },
}));

const RightColumn = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: 'inherit',
  padding: `${theme.spacing(5)} ${theme.spacing(3)}`,
  [theme.breakpoints.up(BREAKPOINT)]: {
    backgroundColor: 'unset',
    paddingRight: '0!important',
    padding: theme.spacing(6),
  },
}));

const Columns: React.FC<Props> = ({ left, right, ...props }) => (
  <SectionStyled {...props}>
    <Grid container alignItems={'center'}>
      <LeftColumn item xs={12} md={6}>
        {left}
      </LeftColumn>
      <RightColumn item xs={12} md={6}>
        {right}
      </RightColumn>
    </Grid>
  </SectionStyled>
);

export default Columns;

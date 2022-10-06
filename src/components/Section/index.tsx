import { Container, ContainerProps, styled } from '@mui/material';
import React from 'react';
import { BREAKPOINT } from 'theme';


const DIMENSION_CONFIGURATION = {
  vertical: {
    height: 530,
    width: '100%',
  },
  horizontal: {
    height: '100%',
    width: '50%',
  },
};

export type SectionProps = {
  type?: 'vertical' | 'horizontal';
  color?: "artichoke" | "ecru" | "metallicSunburst" | "alabaster" | "kobe" | "bone" | "primary"
  spacing?: number;
} & Pick<
  ContainerProps,
  'maxWidth' | 'children' | 'sx' | 'id' | 'className' | 'disableGutters'
>;

const SectionStyled = styled(Container)<SectionProps>(
  ({ theme, spacing = 4, color, type }) => ({
    overflow: 'hidden',
    position: 'relative',
    paddingTop: theme.spacing(spacing / 2),
    paddingBottom: theme.spacing(spacing / 2),
    [theme.breakpoints.up(BREAKPOINT)]: {
      paddingTop: theme.spacing(spacing),
      paddingBottom: theme.spacing(spacing),
    },
    '&:before': {
      backgroundColor: color && color,
      backgroundSize: 'cover',
      position: 'absolute',
      content: "''",
      width: '100%',
      height: '100%',
      zIndex: -1,
      right: 0,
      top: 0,
      [theme.breakpoints.up(BREAKPOINT)]: {
        height: type ? DIMENSION_CONFIGURATION[type].height : '100%',
        width: type ? DIMENSION_CONFIGURATION[type].width : '100%',
      },
    },
  })
);

const SectionStyledColored = styled(SectionStyled)<SectionProps>(
  ({ theme, color }) =>
    color && {
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
    }
);

const StyledContainer = styled(Container)(() => ({
  // position: 'relative',
}));

const Section: React.FC<SectionProps> = ({ maxWidth, ...props }) => (
  <SectionStyledColored {...props} maxWidth={false}>
    <StyledContainer disableGutters maxWidth={maxWidth}>
      {props.children}
    </StyledContainer>
  </SectionStyledColored>
);

export default Section;

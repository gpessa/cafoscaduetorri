import { Trans } from '@lingui/macro';
import Menu from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  styled,
  Toolbar,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import { organization } from 'contasts';
import Link from 'next/link';
import React, { useState } from 'react';
import LanguageSelector from './LanguageSelector';
import Logo from './Logo';

const BREAKPOINT = 'lg';

const NavigationMobileMenu = styled(List)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: 'none',
  },
}));

const ToolbarStyled = styled(Toolbar)(() => ({
  justifyContent: 'space-between',
}));

const NavigationMenu = styled(Box)(({ theme }) => ({
  gridAutoFlow: 'column',
  gap: theme.spacing(1),
  display: 'grid',
}));

const NavigationDesktopButtom = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'none',
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: 'flex',
  },
}));

NavigationDesktopButtom.defaultProps = {
  variant: 'text',
};

const NavigationDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
  margin: theme.spacing(3),
  height: 20,
}));

NavigationDivider.defaultProps = {
  orientation: 'vertical',
};

const NavigationMenuIconButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down(BREAKPOINT)]: {
    display: 'flex',
  },
}));

const ButtonDesktop = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down(BREAKPOINT)]: {
    display: 'none',
  },
}));

const ElevationScroll: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    target: typeof window !== `undefined` ? window : undefined,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const NAVIGATION: {
    href: string;
    title: JSX.Element | string;
  }[] = [
    { href: '/', title: organization.name },
    { href: '/ca-tuate', title: <Trans>Ca&apos; Tuate - Monolocali</Trans> },
    { href: '/#price', title: <Trans>Prezzi</Trans> },
    { href: '/#contacts', title: <Trans>Contatti</Trans> },
  ];

  const handleMenuToggle = () => {
    setOpen((open) => !open);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <ElevationScroll>
      <AppBar position="sticky" color="inherit">
        <ToolbarStyled>
          <Logo />

          <NavigationMenu>
            {NAVIGATION.map(({ href, title }) => (
              <Link passHref href={href} key={href}>
                <ButtonDesktop color="inherit" variant="text">
                  {title}
                </ButtonDesktop>
              </Link>
            ))}

            <LanguageSelector />

            {/* <Divider orientation="vertical" /> */}

            <NavigationMenuIconButton
              edge="end"
              size="large"
              color="primary"
              aria-label="Main menu"
              onClick={handleMenuToggle}
            >
              <Menu />
            </NavigationMenuIconButton>
          </NavigationMenu>
        </ToolbarStyled>

        {open && (
          <NavigationMobileMenu>
            {NAVIGATION.map(({ href, title }) => (
              <Link passHref href={href} key={href}>
                <ListItem key={href}>{title}</ListItem>
              </Link>
            ))}
          </NavigationMobileMenu>
        )}
      </AppBar>
    </ElevationScroll>
  );
};

export default Navigation;

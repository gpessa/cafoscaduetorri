
import { Trans } from '@lingui/macro';
import Menu from "@mui/icons-material/Menu";
import {
  AppBar,
  Box, Button, Divider,
  IconButton,
  List,
  ListItem,
  styled, Toolbar, useScrollTrigger, useTheme
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { BREAKPOINT } from "theme";
import LanguageSelector from "./LanguageSelector";
import Logo from "./Logo";

const NavigationMobileMenu = styled(List)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "none",
  },
}))

const ToolbarStyled = styled(Toolbar)(() => ({
  justifyContent: "space-between",
}))

const NavigationMenu = styled(Box)(({ theme }) => ({
  alignItems: "center",
  width: "fit-content",
}))

const NavigationDesktopButtom = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'none',
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "flex",
  },
}))

NavigationDesktopButtom.defaultProps = {
  variant: "text"
}

const NavigationDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
  margin: theme.spacing(3),
  height: 20
}))

NavigationDivider.defaultProps = {
  orientation: "vertical",
  flexItem: true,
}


const ElevationScroll: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    target: typeof window !== `undefined` ? window : undefined,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const NAVIGATION: {
    href: string;
    title: JSX.Element;
  }[] = [
      { href: "/", title: <Trans>Ca&apos; Fosca Bed &amp; Breackfast</Trans> },
      { href: "/ca-tuate", title: <Trans>Ca&apos; Tuate monolocali</Trans> },
      { href: '/#price', title: <Trans>Prezzi</Trans> },
      { href: '/#contacts', title: <Trans>Contatti</Trans> }
    ]

  const handleMenuToggle = () => {
    setOpen(open => !open)
  }

  const handleMenuClose = () => {
    setOpen(false)
  }

  return (
    <ElevationScroll>
      <AppBar position="sticky" color="inherit">

        <ToolbarStyled>

          <Logo />

          <NavigationMenu>
            {NAVIGATION.map(({ href, title }) => (
              <Link passHref href={href} key={href}>
                <Button color="inherit" variant="text">
                  {title}
                </Button>
              </Link>
            ))}

            <IconButton edge="end" size="large" color="primary" aria-label="Main menu" onClick={handleMenuToggle}>
              <Menu />
            </IconButton>

            <Divider flexItem orientation='vertical' />

            <LanguageSelector />

          </NavigationMenu>

        </ToolbarStyled>

        {open && (
          <NavigationMobileMenu>
            {NAVIGATION.map(({ href, title }) => (
              <Link passHref href={href} key={href}>
                <ListItem
                  key={href}
                  component="a"
                >
                  {title}
                </ListItem>
              </Link>
            ))}
          </NavigationMobileMenu>
        )}
      </AppBar>
    </ElevationScroll>
  )
}

export default Navigation

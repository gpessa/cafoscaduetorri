
import { Trans } from '@lingui/macro';
import Menu from "@mui/icons-material/Menu";
import {
  AppBar,
  Box, Divider,
  IconButton,
  List,
  ListItem,
  styled,
  Button,
  Toolbar, useTheme, useScrollTrigger
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { BREAKPOINT } from "theme";
import LanguageSelector from "./LanguageSelector";
import Logo from "./Logo";

const MenuMobileStyled = styled(List)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "none",
  },
}))

const ToolbarStyled = styled(Toolbar)(() => ({
  justifyContent: "space-between",
}))

const NavigationDesktop = styled(Box)(({ theme }) => ({
  alignItems: "center",
  width: "fit-content",
  display: "none",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "flex",
  },
}))

const NavigationDesktopButtom = styled(Button)(({ theme }) => ({
}))
NavigationDesktopButtom.defaultProps = {
  variant: "text"
}

const NavigationDesktopDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
  margin: theme.spacing(3),
  display: "none",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "unset",
  },
}))

NavigationDesktopDivider.defaultProps = {
  orientation: "vertical",
  flexItem: true,
}

const NavigationMobile = styled(Box)(({ theme }) => ({
  alignItems: "center",
  width: "fit-content",
  display: "flex",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "none",
  },
}))

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
      { href: "/ca-tuate", title: <Trans>Ca&apos; Tuate</Trans> },
      { href: "/", title: <Trans>Ca&apos; Fosca</Trans> }
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

          <NavigationDesktop>
            {NAVIGATION.map(({ href, title }) => (
              <Link passHref href={href} key={href}>
                <Button variant="text">
                  {title}
                </Button>
              </Link>
            ))}
            <NavigationDesktopDivider />
            <LanguageSelector />
          </NavigationDesktop>

          <NavigationMobile>
            <LanguageSelector />
            <NavigationDesktopDivider />
            <IconButton edge="end" size="large" color="primary" aria-label="Main menu" onClick={handleMenuToggle}>
              <Menu />
            </IconButton>
          </NavigationMobile>
        </ToolbarStyled>

        {open && (
          <MenuMobileStyled>
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
          </MenuMobileStyled>
        )}
      </AppBar>
    </ElevationScroll>
  )
}

export default Navigation

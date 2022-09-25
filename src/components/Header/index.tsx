/* eslint-disable react/no-children-prop */
import { AppBar, Avatar, Link, IconButton, Menu, MenuItem, styled } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FlagFr from '../../assets/flags/fr.svg';
import FlagEn from '../../assets/flags/gb.svg';
import FlagIt from '../../assets/flags/it.svg';


const FLAGS = {
  en: FlagEn,
  fr: FlagFr,
  it: FlagIt,
};

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  paddingBottom: theme.spacing(4),
  paddingTop: theme.spacing(4),
  position: 'relative',
  alignItems: 'center',
  border: 0,
}));

const LanguageStyled = styled(IconButton)(({ theme }) => ({
  transform: 'translateY(-50%)',
  right: theme.spacing(4),
  position: 'absolute',
  top: '50%',
}));

const ImageWrapper = styled(Link)(({ theme }) => ({
  borderBottom: `${theme.spacing(1 / 2)} solid ${theme.palette.primary.main}`,
  paddingBottom: theme.spacing(1 / 2),
}));

const Header = () => {
  const { locale: currentLocale, locales } = useRouter();
  const [anchorEl, setAnchorEl] = useState<HTMLElement>();
  const open = Boolean(anchorEl);
  const hasMultipleLocales = locales!.length > 1;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(undefined);
  };

  return (
    <>
      <AppBarStyled elevation={0} color="transparent" position="relative">

        <NextLink
          passHref
          href="/"
          children={
            <ImageWrapper></ImageWrapper>
          }
        />

        {hasMultipleLocales && (
          <LanguageStyled onClick={handleClick}>
            <Avatar
              src={FLAGS[currentLocale as keyof typeof FLAGS].src}
              sx={{ width: 24, height: 24 }}
            />
          </LanguageStyled>
        )}
      </AppBarStyled>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {locales!.map((locale) => (
          <NextLink locale={locale} href="/" passHref key={locale}>
            <MenuItem
              component="a"
              sx={{ my: 2 }}
              onClick={handleClose}
              selected={locale === currentLocale}
            >
              <Avatar
                src={FLAGS[locale as keyof typeof FLAGS].src}
                sx={{ width: 24, height: 24 }}
              />
            </MenuItem>
          </NextLink>
        ))}
      </Menu>
    </>
  );
};

export default Header;

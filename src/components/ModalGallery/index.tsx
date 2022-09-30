import { useGallery } from 'hooks';
import Image from 'next/image';
import React from 'react';

import { Trans } from '@lingui/macro';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Button, ButtonBase, Dialog, styled, Typography } from '@mui/material';
import { height } from '@mui/system';

const ButtonBackStyled = styled(ButtonBase)({
  top: 0,
  left: 0,
  bottom: 0,
  width: '50%',
  position: 'absolute',
  '& > span': {
    position: 'absolute',
    left: 0,
  },
});

const ButtonNextStyled = styled(ButtonBase)({
  top: 0,
  right: 0,
  bottom: 0,
  width: '50%',
  position: 'absolute',
  '& > span': {
    position: 'absolute',
    right: 0,
  },
});

const ImageStyled = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%'
});

const StyledCaption = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  // fontSize: theme.typography.small.fontSize,
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  padding: theme.spacing(1),
  position: 'absolute',
  bottom: 0,
  left: 0,
}));

export type Picture = {
  src: any;
  caption?: string | JSX.Element;
};

type Props = {
  render: (props: ReturnType<typeof useGallery>) => JSX.Element;
  images: Picture[];
};

const ModalGallery: React.FC<Props> = ({ render, images }) => {
  const gallery = useGallery(images);

  console.log(gallery.active)
  return (
    <>
      {render(gallery)}

      <Dialog open={!!gallery.active} onClose={gallery.close} maxWidth="md" >
        {gallery.active && (
          <>

            <ImageStyled src={gallery.active.src.default.src} />

            {gallery.showPreviousEnabled && (
              <ButtonBackStyled onClick={gallery.showPrevious}>
                <Button component="span" startIcon={<NavigateBefore />}>
                  <Trans>Indietro</Trans>
                </Button>
              </ButtonBackStyled>
            )}

            {gallery.showNextEnabled && (
              <ButtonNextStyled onClick={gallery.showNext}>
                <Button component="span" endIcon={<NavigateNext />}>
                  <Trans>Avanti</Trans>
                </Button>
              </ButtonNextStyled>
            )}

            {gallery.active.caption && (
              <StyledCaption>{gallery.active.caption}</StyledCaption>
            )}
          </>
        )}
      </Dialog>
    </>
  );
};

export default ModalGallery;

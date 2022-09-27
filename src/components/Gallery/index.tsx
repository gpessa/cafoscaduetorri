import Image from 'next/image';
import React from 'react';
import { PRODUCT_GUTTER } from 'theme';
import { ButtonBase, Grid, GridProps, styled } from '@mui/material';
import ModalGallery, { Picture } from '../ModalGallery';


const ButtonBaseStyled = styled(ButtonBase)(() => ({
  textAlign: 'left',
  display: 'block',
}));

const ImageStyled = styled(Image)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
}));

const FigcaptionStyled = styled('figcaption')(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  fontSize: '0.8rem',
  lineHeight: 1,
}));

const FigureStyled = styled('figure')(() => ({
  padding: 0,
  margin: 0,
}));

type Props = {
  images: Picture[];
} & Pick<GridProps, 'xs' | 'md'>;

const Gallery: React.FC<Props> = ({ images, xs = 6, md = 3 }) => (
  <ModalGallery
    images={images}
    render={({ open, images }) => (
      <Grid container spacing={PRODUCT_GUTTER}>
        {images.map((image, index) => (
          <Grid item xs={xs} md={md} key={index}>
            <ButtonBaseStyled onClick={() => open(image)}>
              <FigureStyled>
                <ImageStyled
                  objectFit="cover"
                  placeholder="blur"
                  src={image.src}
                  height={300}
                  width={300}
                />
                <FigcaptionStyled>{image.caption}</FigcaptionStyled>
              </FigureStyled>
            </ButtonBaseStyled>
          </Grid>
        ))}
      </Grid>
    )}
  />
);

export default Gallery;

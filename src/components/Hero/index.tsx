import { Box, Container, styled, Typography } from "@mui/material"
import React from "react"

const TypographyStyled = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(3),
  display: "inline-block",
}))

const BoxStyled = styled(Box)<{ image?: string }>(({ image }) => ({
  backgroundImage: `url(${image})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  padding: "10% 0 20%",
}))

type Props = {
  image: string
  text?: JSX.Element
} & React.HTMLAttributes<HTMLElement>

const Hero = ({ text, image, className }: Props) => (
  <BoxStyled className={className} image={image}>
    {text && (
      <Container maxWidth="lg">
        <TypographyStyled variant="h1">{text}</TypographyStyled>
      </Container>
    )}
  </BoxStyled>
)

export default Hero

import { Stack, styled, Typography } from "@mui/material"
import Link from "next/link"
import React from "react"

const DIM = 50

const TitleStyled = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.h1.fontFamily,
  color: theme.palette.common.black,
  lineHeight: `${28 * 0.7}px`,
  textTransform: "uppercase",
  margin: "3px 0 0 0",
  fontWeight: 600,
  fontSize: 28,
}))

const SubtitleStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  lineHeight: `${12 * 0.7}px`,
  marginTop: theme.spacing(1),
  fontWeight: 500,
  letterSpacing: 4,
  fontSize: 13,
}))


const ButtonStyled = styled(Link)(({ theme }) => ({
  padding: 0,
}))

const Logo: React.FC = props => (
  <ButtonStyled href="/">
    <Stack direction="row" alignContent="center" alignItems="center">
      <hgroup>
        <TitleStyled>Ca&apos; fosca due torri</TitleStyled>
        <SubtitleStyled {...props}>Bed &amp; Breakfast</SubtitleStyled>
      </hgroup>
    </Stack>
  </ButtonStyled>
)

export default Logo

import { Stack, styled } from "@mui/material"
import Link from "next/link"
import React from "react"
import { BREAKPOINT } from "theme"

const DIM = 50

const TitleStyled = styled("h1")(({ theme }) => ({
  color: theme.palette.common.black,
  lineHeight: `${28 * 0.7}px`,
  textTransform: "uppercase",
  margin: "3px 0 0 0",
  fontSize: 28,
}))

const SubtitleStyled = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  lineHeight: `${12 * 0.7}px`,
  textTransform: "uppercase",
  fontWeight: "normal",
  letterSpacing: 3.7,
  fontSize: 12,
  marginTop: 6,
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

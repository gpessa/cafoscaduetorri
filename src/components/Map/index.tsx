import { t } from "@lingui/macro"
import { Box, styled } from "@mui/material"
import React from "react"

const height = 500

const BoxStyled = styled(Box)({
  height,
})

const Map: React.FC<{ src: string }> = ({ src, ...props }) => (
  <BoxStyled {...props}>
    <iframe
      width="100%"
      height={height}
      scrolling="no"
      frameBorder={0}
      marginWidth={0}
      marginHeight={0}
      title={t`Mappa`}
      role="application"
      src={src}
    ></iframe>
  </BoxStyled>
)

export default Map

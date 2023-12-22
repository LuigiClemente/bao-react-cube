import React from "react"
import { Icon } from "antd"
import { ReactComponent as PlusIconSvg } from "./plus-icon.svg"
import { ReactComponent as PlusSvg } from "./plus.svg"

import styled from "styled-components"

const PlusIconStyled = styled(Icon)`
  display: inline-block;
  /* background: #6f76d9; */
  border-radius: 50%;
  width: 17px;
  height: 17px;
  position: relative;
  cursor: pointer;
  pointer-events: all !important;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: rgba(122, 119, 255, 0.1); */
    border-radius: 50%;
    transition: transform 0.15s cubic-bezier(0, 0, 0.2, 1);
    z-index: 1;
  }

  &:hover::after {
    transform: scale(1.4);
  }

  & svg {
    width: 18px;
    height: 18px;
    z-index: 2;
  }
`

const PlusIcon = () => <PlusIconStyled component={PlusSvg} />

export default PlusIcon

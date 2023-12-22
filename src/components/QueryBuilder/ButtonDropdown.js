import React from "react"
import * as PropTypes from "prop-types"
import { Button, Dropdown } from "antd"

import PlusIcon from "./PlusIcon"

import styled from "styled-components"

const StyledButton = styled(Button)`
  font-size: 14px;
  height: 48px;
  line-height: 3.5;
  box-shadow: 0px 2px 12px rgba(67, 67, 107, 0.1);
  border: none;
  /* color: #43436B; */
  color: #056dff;
  background-color: #ffffff;
  //animation-duration: 0s;
  border-radius: 4px !important;

  &:hover + a {
    display: block;
  }

  &:hover,
  &.ant-dropdown-open,
  &:focus {
    /* color: #43436b; */
    color: #ffffff;
    background-color: #056dff;
  }

  &:after {
    animation: 0s;
  }

  & > i {
    position: relative;
    top: 3px;
  }
`

const SelectedFilterButton = styled(StyledButton)`
  && {
    height: 40px;
    line-height: 40px;
    box-shadow: none;
    border: 1px solid #ececf0;
    border-radius: 4px;
  }
`

const NewButton = styled(StyledButton)`
  color: #056dff;
  border: 1px solid rgba(122, 119, 255, 0.2);
  box-shadow: none;
  font-weight: bold;
  /* color: #ffffff;
  background-color: #056dff; */

  &:hover,
  &.ant-dropdown-open,
  &:focus {
    color: #ffffff;
    border-color: rgba(122, 119, 255, 0.2);
    /* color: #056dff;
    background-color: #ffffff; */
  }
`

const TimeGroupButton = styled(NewButton)`
  border: none;
  padding: 0;
`

const PlusIconButton = styled.span`
  margin-left: 12px;
  top: 5px;
  position: relative;
  /* background-color: #056dff; */
`

const ButtonDropdown = ({ overlay, type, ...buttonProps }) => {
  let component
  if (type === "icon") {
    component = (
      <PlusIconButton>
        <PlusIcon />
      </PlusIconButton>
    )
  } else if (type === "selected") {
    component = <StyledButton {...buttonProps} />
  } else if (type === "time-group") {
    component = <TimeGroupButton {...buttonProps} />
  } else if (type === "selected-filter") {
    component = <SelectedFilterButton {...buttonProps} />
  } else {
    component = <NewButton {...buttonProps} />
  }

  return (
    <Dropdown overlay={overlay} placement="bottomLeft" trigger={["click"]}>
      {component}
    </Dropdown>
  )
}

ButtonDropdown.propTypes = {
  overlay: PropTypes.object.isRequired,
  type: PropTypes.oneOf(["new", "icon", "selected"])
}

export default ButtonDropdown

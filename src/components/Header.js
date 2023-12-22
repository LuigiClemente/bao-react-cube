import React from "react";
import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled(Layout.Header)`
  /* padding: 20 28px; */
  padding-top: 30px;
  height: 100px;
  border-bottom: 1px solid #e8e8e8;
`;

const StyledMenu = styled(Menu)`
  .ant-menu-item {
    color: red;
    height: 40px !important;
    padding: 0 20px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: none !important;
    margin: 5px !important;
    font-weight: 500 !important;

    &&.ant-menu-item-selected {
      border-bottom: 4px solid white;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
      background-color: "#ffff !important";

      & > a {
        opacity: 1;
      }
    }

    background: transparent;
    line-height: 41px;
    border: none;
  }
`;

const MenuItemStyled = styled(Menu.Item)`
  line-height: 41px !important;
  && {
    top: 4px;
    border-bottom: 4px solid transparent;
    display: "flex";
    flex-direction: "row";
    justify-content: "space-between";

    &:hover {
      border-bottom: 4px solid transparent;
      & > a {
        color: black;
        opacity: 1;
      }
    }
  }
  &&.ant-menu-item-selected {
    border-bottom: 4px solid white;
    background-color: "#ffff !important";
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px !important;

    & > a {
      opacity: 1;
    }
  }
  && > a {
    color: black;
    opacity: 0.6;
    font-weight: bold;
    letter-spacing: 0.01em;
  }
`;

const Header = ({ location }) => (
  <StyledHeader>
    <StyledMenu mode="horizontal" selectedKeys={[location.pathname]}>
      <MenuItemStyled key="/explore">
        <Link to="/explore">Explore</Link>
      </MenuItemStyled>
      <MenuItemStyled key="/">
        <Link to="/">Dashboard</Link>
        {/* <Link to="/explore">
          <Button type="primary">Add chart</Button>
        </Link> */}
      </MenuItemStyled>
    </StyledMenu>
  </StyledHeader>
);

export default Header;

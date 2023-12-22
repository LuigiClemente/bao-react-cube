import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import cubejs from "@cubejs-client/core";
import { CubeProvider } from "@cubejs-client/react";
import { Layout, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { ApolloProvider } from "react-apollo";
import { withRouter } from "react-router";
import client from "./graphql/client";
import {
  ThemeSwitcherProvider,
  useThemeSwitcher,
} from "react-css-theme-switcher";
import Header from "./components/Header";
import { AppProvider } from "./AppProvider/AppProvider";

// import aws_exports from './aws-exports';

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDY1OTA0NjEsImV4cCI6MTkyMjE2NjQ2MX0.DdY7GaiHsQWyTH_xkslHb17Cbc3yLFfMFwoEpx89JiA";

const cubejsApi = cubejs(token, {
  apiUrl: "https://harsh-eel.aws-us-east-2.cubecloudapp.dev/cubejs-api/v1",
});

const AppLayout = ({ location, children }) => {
  const [isDarkMode, setIsDarkMode] = useState();
  const [theme, seTheme] = useState("dark");
  // const [theme, seTheme] = useState(null);
  const { switcher, themes } = useThemeSwitcher();
  let themeChanger = "dark";
  useEffect(() => {
    // uncomment for iframe
    // const localthem = localStorage.getItem("myAppTheme");
    // console.log("theme in saleor change", localthem);
    // window.addEventListener("message", (event) => {
    //   console.log("first render >>> ", event.data.value);
    //   seTheme(event.data.value);
    //   setIsDarkMode(event.data.value === "dark");
    //   themeChanger = event.data.value;
    //   switcher({
    //     theme: event.data.value === "dark" ? themes.dark : themes.light,
    //   });
    // });

    // I add this for alone run
    switcher({
      theme: themes.dark,
    });
  }, [theme, themeChanger]);
  return (
    <Layout style={{ height: "100%" }} id="received-message">
      <Header location={location} />
      {/* {theme && <Layout.Content>{children}</Layout.Content>} */}
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
};

const App = withRouter(({ location, children }) => {
  console.log("location", process.env.PUBLIC_URL, "/themes/antd.min.css");
  const [theme, setTheme] = useState();
  const getTheme = (e) => {
    console.log("get changes ::", e);
    setTheme();
  };
  useEffect(() => {
    console.log("first render ----App-->>> ");
    window.addEventListener("message", (event) => {
      console.log("first render ------>>> ", event.data.value);
      setTheme(event.data.value);
    });
  }, [theme]);
  const currThemes = {
    light: `${process.env.PUBLIC_URL}/./themes/antd.min.css`,
    dark: `${process.env.PUBLIC_URL}/./themes/antd.dark.min.css`,
  };
  return (
    <ThemeSwitcherProvider themeMap={currThemes}>
      <CubeProvider cubejsApi={cubejsApi}>
        <ApolloProvider client={client}>
          <ApolloHooksProvider client={client}>
            <AppLayout location={location}>{children}</AppLayout>
          </ApolloHooksProvider>
        </ApolloProvider>
      </CubeProvider>
    </ThemeSwitcherProvider>
  );
});

export default App;

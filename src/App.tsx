import React from "react";
import { Header } from "components/header/Header";

import "./App.css";
import { withTheme } from "setup/withTheme";
import { withQuery } from "setup/withQuery";
import { withRedux } from "setup/withRedux";
import { Layout } from "components/layout/styles";
import InboxModule from "modules/InboxModule";


export default function App() {
  const headerTitle = 'inbox'
  return (withRedux(withQuery(withTheme(
    <>
      <Header>{headerTitle}</Header>
      <Layout>
        <InboxModule />
      </Layout>
    </>
  ))));
}

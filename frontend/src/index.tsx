import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import People from "./People";
import PeopleDetail from "./PeopleDetail";

const client = new ApolloClient({
  uri: "http://localhost:8081/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="detail/:peopleId" element={<PeopleDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

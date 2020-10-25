import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

const domain = 'dev-anpwgtgj.eu.auth0.com';
const clientId = 'FZ0w40O3TVPFNSxrYPoNujShSXH7GQLP';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    useRefreshTokens={true}
    cacheLocation="localstorage">
    <App />
    </Auth0Provider>,
  rootElement
);

import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Helmet, { HelmetData } from "react-helmet";
import { StaticRouter } from "react-router-dom";
import App from "./App";

const assetsManifest = require(process.env.RAZZLE_ASSETS_MANIFEST || ''); // tslint:disable-line

const injectMarkup = (helmet: HelmetData, assets: any, markup: string): string => (
  `
  <!doctype html>
  <html ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${
        assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ""
      }
      ${
        process.env.NODE_ENV === "production"
          ? `<script src="${assets.client.js}" defer></script>`
          : `<script src="${assets.client.js}" defer crossorigin></script>`
      }
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="root">
        ${markup}
      </div>
    </body>
  </html>
  `
);

const server = express();
server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR || ""))
  .get("/*", (req, res) => {
    const context: any = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );
    const helmet = Helmet.renderStatic();

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(injectMarkup(helmet, assetsManifest, markup));
    }
  });

export default server;

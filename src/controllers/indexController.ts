import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import html from '../views/pages/index/html';
import Header from '../views/components/Header/Header';
import MainLinks from '../views/components/MainLinks/MainLinks';
import Canvas from '../views/components/Canvas/Canvas';

export default (req: express.Request, res: express.Response)  => {
    const header = renderToString(React.createElement(Header));
    const main_links = renderToString(React.createElement(MainLinks));
    const canvas = renderToString(React.createElement(Canvas));

    res.send(
      html({
        header, canvas, main_links
      })
    );
}
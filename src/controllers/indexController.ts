import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import html from '../views/pages/index/html';
import Header from '../views/components/Header/Header';
import Canvas from '../views/components/Canvas/Canvas';

export default (req: express.Request, res: express.Response)  => {
    const header = renderToString(React.createElement(Header));
    const canvas = renderToString(React.createElement(Canvas));

    res.send(
      html({
        header, canvas
      })
    );
}
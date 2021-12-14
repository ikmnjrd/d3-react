import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import html from '../views/pages/canvas/html';
import Canvas from '../views/components/Canvas/Canvas';

export default (req: express.Request, res: express.Response)  => {
    const canvas = renderToString(React.createElement(Canvas));

    res.send(
      html({
        canvas
      })
    );
}
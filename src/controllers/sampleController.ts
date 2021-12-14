import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import html from '../views/pages/sample/html';
import Counter from '../views/components/Counter/Counter';
import Sample from '../views/components/Canvas/Canvas';

export default (req: express.Request, res: express.Response)  => {
    const counter = renderToString(React.createElement(Counter));
    // const sample = renderToString(React.createElement(Sample));
    const sample = 'fdsafsa';

    res.send(
      html({
        counter, sample
      })
    );
}
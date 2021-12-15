/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/react'
import React from 'react';

export interface Props {
  _css?: SerializedStyles; 
}

const MainLinks:React.VFC<Props> = () => {

  return (
    <div css={mainLinksContainer}>
      <ul>
        <li><a href='/canvas'>link</a></li>
        <li><a href='/canvas'>link</a></li>
        <li><a href='/canvas'>link</a></li>
        <li><a href='/canvas'>link</a></li>
      </ul>
    </div>
  );
}


const mainLinksContainer =css`
  display: flex;
  justify-content: space-between;
`



export default MainLinks;
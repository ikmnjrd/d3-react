/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/react'
import React from 'react';

export interface Props {
  _css?: SerializedStyles; 
}

const Header:React.VFC<Props> = () => {

  return (
    <div css={headerContainer}>
      <h1 css={h1Style} >D3.js Garage</h1>
      <div css={rightBox}>
        <div>
          <a href='/canvas'>boxリンク仮</a>
        </div>
      </div>
      
    </div>
  );
}


const headerContainer =css`
  display: flex;
  justify-content: space-between;
`
const h1Style = css`
  color: hotpink;
  padding-left: 1rem;
  margin: 0;
`
const rightBox =css`
  display: flex;
`


export default Header;
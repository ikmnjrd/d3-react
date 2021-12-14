/** @jsx jsx */
import { jsx, css, keyframes, SerializedStyles } from '@emotion/react'
import React from 'react';

export interface Props {
  _css?: SerializedStyles; 
}

const MainLinks:React.VFC<Props> = () => {

  return (
    <div css={headerContainer}>
      <ul>
        <li><a href='canvas'>my first d3</a></li>
        <li><a href='canvas'>my first d3</a></li>
        <li><a href='canvas'>my first d3</a></li>
        <li><a href='canvas'>my first d3</a></li>
      </ul>

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


export default MainLinks;
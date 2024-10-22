import React from 'react'
import { LinkStyled } from './LinkStyled.js';

export default function LinkStyled({ children, to, path}) {
  return (
    <LinkStyled to={to} path={path}>{children}</LinkStyled>
  )
}

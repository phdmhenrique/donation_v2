import React from 'react'
import { LinkResponse } from './LinkStyled.js';

export default function LinkStyled({ children, to}) {
  return (
    <LinkResponse to={to}>{children}</LinkResponse>
  )
}
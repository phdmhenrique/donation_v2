import React from 'react'

import { Rightside__OtherAccess__or, Rightside__OtherAccess__span } from './OtherAccess.js';

import ButtonAccess from '../../ButtonAccess/ButtonAccess.jsx';

export default function OtherAccess() {
  return (
    <>
      <Rightside__OtherAccess__or className="rightside__other-access__or">ou</Rightside__OtherAccess__or>
      <Rightside__OtherAccess__span>Acesse com</Rightside__OtherAccess__span>

      <ButtonAccess icon="google" text="Acesse com o Google" />
      <ButtonAccess icon="facebook" text="Acesse com o Facebook" />
      <ButtonAccess icon="x" text="Acesse com o X" />
    </>
  );
}

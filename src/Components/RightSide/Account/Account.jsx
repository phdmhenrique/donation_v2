import React from 'react';
import { NoAccount } from './Account.js';

export default function Account({ text, children }) {
  return (
    <NoAccount>{text}{children}</NoAccount>
  );
}

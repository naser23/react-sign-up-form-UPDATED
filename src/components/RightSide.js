import React from 'react';
import TopHeader from './TopHeader';
import FormArea from './FormArea';
import FinishSignUp from './FinishSignUp';

function RightSide() {
  return <section className="right-side">
      <TopHeader />
      <FormArea />
      <FinishSignUp />
  </section>;
}

export default RightSide;

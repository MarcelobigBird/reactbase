import React from 'react';

import Aluno from '../pages/Aluno';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Aluno} isClosed={false} />

      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}

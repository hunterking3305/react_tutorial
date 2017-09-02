import React from 'react';
import {render} from 'react-dom'
import RankList from 'RankList'
import 'index.html'

render(
  <RankList url='https://ranking-scars377.c9users.io/'/>,
  document.querySelector('#app')
);

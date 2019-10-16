import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './Wrapper';
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter
    basename="/kids_cookbook">
    <Wrapper />
  </HashRouter>,
  document.getElementById("root")
);



import { Fragment } from 'react';
import NoSSR from 'react-no-ssr';

import { Header } from '../components/Header';

export default () => (
  <Fragment>
    <NoSSR>
      <Header />
    </NoSSR>
    <style global jsx>{`
      * {
        box-sizing: border-box;
      }

      html,
      body,
      #__next {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </Fragment>
);

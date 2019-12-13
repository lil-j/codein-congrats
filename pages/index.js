import React from 'react';
import {TextField, Button} from '@material-ui/core/';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Congratulations</title>
      </Head>
      <div className="get-name-wrapper">
          <div className="get-name text-center">
              <Typography variant="h3" gutterBottom>Google Code-In Congratulation Template</Typography>
              <Typography variant="subtitle1" gutterBottom>For the purposes of this concept, please enter your name.</Typography>
              <form action="/congradulate" method="get"><TextField type="congradulate" name="c" id="standard-basic" label="Name" /> <Button variant="outlined" type="submit" color="primary" style={{transform:"translate(0,12px)"}}>Go</Button></form>
          </div>
      </div>

    <style jsx>{`
    .get-name-wrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      flex-direction: column;
    }
    .get-name{
        align-self: center;
        margin:auto;
    }
    .text-center {
      text-align: center!important;
    }
    `}</style>
  </div>
  );
}

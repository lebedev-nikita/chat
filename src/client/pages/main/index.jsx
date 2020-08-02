import './index.scss';
import React from 'react';
import Authorization from './Authorization';


const Main = () => {

  let [needAuthorization, setNeedAuthorization] = React.useState(true);

  const startAuthorization = () => {
    setNeedAuthorization(!needAuthorization);
    console.log(needAuthorization);
  };

  return (
    <div className="Main">
      <h1> API examples: </h1>
      <a href="/api/getAllChannels">getAllChannels</a> <br />
      <a href="/api/getMessages?channel_id=1">get messages from channel 1</a> <br />
      <button onClick={startAuthorization}>AUTHORIZE</button>
      {needAuthorization ? <Authorization /> : <div />}
    </div>
  );
}

export default Main;
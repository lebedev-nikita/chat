import './index.scss';
import React, { useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setPosts } from "../../redux";
import Authorization from './Authorization';


export default connect(
  state => ({ posts: state.posts }),
  { setPosts }
)(function ({ posts, setPosts }) {
  const [sql, setSql] = useState('');
  async function execute() {
    setPosts(await getPosts(sql));
  }
  return (
    <div className="Main">
      <h1> API examples: </h1>
      <a href="/api/getAllChannels">getAllChannels</a> <br/>
      <a href="/api/getMessages?channel_id=1">get messages from channel 1</a>
      <Authorization/>
    </div>
  );
});

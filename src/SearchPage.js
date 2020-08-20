import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPage = () => (
  <div className="searchPage">
    <div className="searchPage__filter">
      <TuneOutlinedIcon />
      <h2>FILTER</h2>
    </div>
    <hr />
    <ChannelRow
      image="https://yt3.ggpht.com/a/AATXAJyOYMXp62abt1Q_ym6V8rnYNNaYlt0P_NhddA=s176-c-k-c0xffffffff-no-rj-mo"
      channel="Unbox Therapy"
      verified
      subs="1.1M"
      noOfVideos={112}
      description="You will get the most awesome content here"
    />
    <hr />
    <VideoRow
      title="Build a Youtube Clone | Awesome"
      views="2.3M Views"
      subs="1.2M"
      description="Do you want to learn about the unboxing experience"
      timestamp="2 days ago"
      channel="Unbox Therapy"
      image="https://i.ytimg.com/vi/cV5TjZCJkuA/maxresdefault.jpg"
    />
    <VideoRow
      title="Build a Youtube Clone | Awesome"
      views="2.3M Views"
      subs="1.2M"
      description="Do you want to learn about the unboxing experience"
      timestamp="2 days ago"
      channel="Unbox Therapy"
      image="https://i.ytimg.com/vi/cV5TjZCJkuA/maxresdefault.jpg"
    />
    <VideoRow
      title="Build a Youtube Clone | Awesome"
      views="2.3M Views"
      subs="1.2M"
      description="Do you want to learn about the unboxing experience"
      timestamp="2 days ago"
      channel="Unbox Therapy"
      image="https://i.ytimg.com/vi/cV5TjZCJkuA/maxresdefault.jpg"
    />
    <VideoRow
      title="Build a Youtube Clone | Awesome"
      views="2.3M Views"
      subs="1.2M"
      description="Do you want to learn about the unboxing experience"
      timestamp="2 days ago"
      channel="Unbox Therapy"
      image="https://i.ytimg.com/vi/cV5TjZCJkuA/maxresdefault.jpg"
    />
    <VideoRow
      title="Build a Youtube Clone | Awesome"
      views="2.3M Views"
      subs="1.2M"
      description="Do you want to learn about the unboxing experience"
      timestamp="2 days ago"
      channel="Unbox Therapy"
      image="https://i.ytimg.com/vi/cV5TjZCJkuA/maxresdefault.jpg"
    />
    <VideoRow
      title="Build a Youtube Clone | Awesome"
      views="2.3M Views"
      subs="1.2M"
      description="Do you want to learn about the unboxing experience"
      timestamp="2 days ago"
      channel="Unbox Therapy"
      image="https://i.ytimg.com/vi/cV5TjZCJkuA/maxresdefault.jpg"
    />
  </div>
);

export default SearchPage;

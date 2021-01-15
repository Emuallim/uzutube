import React from 'react';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr/>

      <ChannelRow 
      link="https://www.youtube.com/c/Emuallim/videos?view=0&sort=p&flow=grid"
      image="https://yt3.ggpht.com/a/AATXAJzUwcqYv7QuqEB4JYR7yye9D6Gsw-O9oL0-ZNZ5Ig=s176-c-k-c0x00ffffff-no-rj-mo"
      channel="Emuallim"
      verified
      subs="14.1k"
      noOfVideos={36}
      description="You can find awesome IELTS lessons here! Also, expect language learning tips and tricks that will take your skills to the next level!"
      />
      <hr/>

      <VideoRow 
        link="https://www.youtube.com/watch?v=J_572ryJPb4"
        views="1.7k"
        subs="14.1k"
        description="You can find awesome IELTS lessons here! Also, expect language learning tips and tricks that will take your skills to the next level!"
        timestamp="2 weeks ago"
        channel="Emuallim"
        title="Donald Trump Takes the IELTS Speaking Test"
        image="https://i.ytimg.com/vi/J_572ryJPb4/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDHB38MVUnUa4GOZg-X3BY2wvndyQ"
      />

      <VideoRow 
        link="https://www.youtube.com/watch?v=U5vpk8cbqnQ"
        views="281k"
        subs="14.1k"
        description="You can find awesome IELTS lessons here! Also, expect language learning tips and tricks that will take your skills to the next level!"
        timestamp="11 months ago"
        channel="Emuallim"
        title="Dont Book Your IELTS Before You Watch This!"
        image="https://i.ytimg.com/vi/U5vpk8cbqnQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC1c7yGZip2vgNjTzfw8HdC8wf90Q"
      />

      <VideoRow 
        link="https://www.youtube.com/watch?v=LLNE9KjAti8"
        views="179k"
        subs="14.1k"
        description="You can find awesome IELTS lessons here! Also, expect language learning tips and tricks that will take your skills to the next level!"
        timestamp="1 year ago"
        channel="Emuallim"
        title="My IELTS Exam Experience in Uzbekistan!"
        image="https://i.ytimg.com/vi/LLNE9KjAti8/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBdCLDWXg8SjgMG3LkROQDyJQdy_g"
      />

      <VideoRow 
        link="https://www.youtube.com/watch?v=rsxT4frAwD4"
        views="7.6k"
        subs="14.1k"
        description="You can find awesome IELTS lessons here! Also, expect language learning tips and tricks that will take your skills to the next level!"
        timestamp="2 years ago"
        channel="Emuallim"
        title="Effortless English - Top 8 Ideas"
        image="https://i.ytimg.com/vi/rsxT4frAwD4/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCUr0RgOPTtEEYZmlFd_q6RsU9cEQ"
      />

      <VideoRow 
        link="https://www.youtube.com/watch?v=8J-x0AUODfE"
        views="3.7k"
        subs="14.1k"
        description="You can find awesome IELTS lessons here! Also, expect language learning tips and tricks that will take your skills to the next level!"
        timestamp="4 months ago"
        channel="Emuallim"
        title="Top 10 IELTS Telegram Channels"
        image="https://i.ytimg.com/vi/8J-x0AUODfE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBQ9V5whvJEqkQNzj9nWKZ0mxfpRg"
      />

    </div>
  )
}

export default SearchPage

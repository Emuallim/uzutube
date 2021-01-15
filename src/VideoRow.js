import React from 'react'
import './VideoRow.css';
// paused at 03:24:00
function VideoRow({ link, views, subs, description, timestamp, channel, title, image}) {
  return (
    <div className="videoRow">
      <a href={link}>
        <img src={image} alt="" />
      </a>
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__stats">{channel} • <span className="videoRow__subs">
        <span className="videoRow__subsNum">{subs} </span>Subscribers</span> {views} views • {timestamp}</p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  )
}

export default VideoRow

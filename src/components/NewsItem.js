import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let  {title,description,imageUrl,date,newsUrl,} = this.props;
    return (
     <>
     <div className="card " >
  <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png":imageUrl} className="card-img-top" alt={newsUrl}/>
  <div className="card-body">
    <h5 className="card-title"> {title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">{date}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
     </>
    )
  }
}

import React from 'react'

const NewsItem=(props)=> {
  
    let {title, description,imgUrl,newsUrl, author, date} = props;
    return (
        <div className="my-3">
        <div className="card">
            <img src={imgUrl?imgUrl:"https://images.news18.com/ibnlive/uploads/2024/03/poco-x6-neo-india-launch-2024-03-fddf025675388390cef73e151386338e-16x9.jpg?impolicy=website&width=1200&height=675"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {!author?"Unkonwn" :author} on {new Date(date).toGMTString()}</small></p>
              <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
        </div>
    )
}

export default NewsItem
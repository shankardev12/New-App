import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={imageUrl?imageUrl:"https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/2362/posts/32809/image/news-concept-with-newspapers-PKM7NRV%20(1).jpg"} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description} </p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

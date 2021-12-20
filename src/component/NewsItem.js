import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src= {imageUrl}
                    className="card-img-top" alt="" style={{height: "200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title" style={{height: "50px"}}>{title}...</h5>
                        <p className="card-text" style={{height: "80px"}}>{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
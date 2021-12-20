import React, { Component } from 'react'
import { Loading } from './Loading'

export class ClassbasedCom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            news: [],
            loading: false
        }
    }

    async componentDidMount() {
        this.setState({
            loading: true
        })
        let url= `https://newsapi.org/v2/everything?q=tesla&from=2021-11-20&sortBy=publishedAt&apiKey=ca89ac78d81a4c8bb2a30bb5a4aa0856`
        let data = await fetch(url);
        let parshedData = await data.json()
        console.log(data);
    }


    render() {
        const { loading, users } = this.state
        return (
            <div className="container my-3">
                <h2>News - Top Headlines</h2>
                <div className='row'>
                    {!loading ?
                        this.state.news.map((element, index) => {
                            return <div className='col-md-4' key={index}>
                                <NewsItem title={element.title.slice(0, 30)}
                                    description={element.description.slice(0, 88)}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                />
                            </div>
                        }) : <Loading message="Loading..." />}
                </div>
            </div>
        )
    }
}

export default ClassbasedCom

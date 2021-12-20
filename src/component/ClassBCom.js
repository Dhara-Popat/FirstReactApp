import axios from 'axios'
import React, { Component } from 'react'
import { Loading } from './Loading'
import NewsItem from './NewsItem'

export class ClassBCom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            news: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-12-20&sortBy=publishedAt&apiKey=ca89ac78d81a4c8bb2a30bb5a4aa0856`)
            .then(res => {
                const n = res.data;
                console.log(n.articles);
                const news = n.articles;
                this.setState({ news })
                this.setState({loading: false})
            });
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

export default ClassBCom

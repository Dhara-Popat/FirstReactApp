import axios from "axios"
import { FETCH_NEWS_FAILURE, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS } from "./newsType"


export const fetchNewsRequest = () => {
    return {
        type: FETCH_NEWS_REQUEST
    }
}

export const fetchNewsSuccess = news => {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload: news
    }
}

export const fetchNewsFailure = error => {
    return {
        type: FETCH_NEWS_FAILURE,
        payload: error
    }
}

export const fetchNews = () => {
    return (dispatch) => {
        dispatch(fetchNewsRequest)
        axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-12-20&sortBy=publishedAt&apiKey=ca89ac78d81a4c8bb2a30bb5a4aa0856`)
            .then(res => {
                const news = res.data.articles
                console.log(news)
                dispatch(fetchNewsSuccess(news))
            })
            .catch(error => {
                const errormsg = error.message
                dispatch(fetchNewsFailure(errormsg))
            })
           
    }
}
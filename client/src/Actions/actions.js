import {
    FETCH_ARTICLES,
} from './types'

import axios from 'axios'


export const fetchArticles = (articles) => dispatch => {
    let searchTerm = document.getElementById("searchInput").value;
    fetch('https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=' + searchTerm + '&mkt=en-us', {
        headers: {
            'Ocp-Apim-Subscription-Key': '4f899609d6834a6aa0fffc1927a22ad5'
        },
    })
        .then(res => res.json())
        .then(articles => dispatch({
            type: FETCH_ARTICLES,
            payload: articles.value
        }))
        .then(data => console.log(data))
}


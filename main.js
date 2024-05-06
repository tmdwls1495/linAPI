const API_KEY =  `ce9e75c4c7814be1ac886bbf0386c36c`;

let news = []
const getLateNews = async() =>{
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    const response = await fetch(url);
    const data = await response.json() //json = 파일 확장자 중 하나, 객체 형식처럼 사용//
    news = data.articles;
    console.log("dddd", news); 
};

getLateNews();
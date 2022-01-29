import React, { useState } from 'react';
import { ref } from "firebase/database";
import {
  firebaseFunctions,
} from '../../utils/fb';

const NewsPage = () => {
  const [newsData, setNewsData] = useState(null);
  React.useEffect(() => {
    loadNews();
  }, []);

  const loadNews = () => {
    const searchNaverNews = firebaseFunctions('searchNaverNews');
    if (searchNaverNews != null) {
      searchNaverNews({ params: {
        query: '한화테크윈',
        display: 100,
        start: 1,
        sort: 'date', // 'sim'
      }})
      // searchNaverNews('daesang')
        .then((result) => {
          const jsonData = JSON.parse(result.data)
          // console.log(jsonData)
          if (jsonData.errorMessage) {
            return setNewsData({ items: [{
              title: 'ERROR',
              link: '/',
            }, {
              title: `code(${jsonData.errorCode}) message(${jsonData.errorMessage})`,
              link: '/',
            },
            ]});
          }
          const newsItems = {
            ...jsonData,
          }
          if (Array.isArray(jsonData.items)) {
            newsItems.items = jsonData.items.filter(item => item.link.includes('news.naver.com'))
          }
          setNewsData(newsItems);
        })
        .catch((error) => {
          // Getting the Error details.
          const code = error.code;
          const message = error.message;
          const details = error.details;
          // ...
          setNewsData({ items: [{
            title: 'ERROR',
            link: '/',
          }, {
            title: `code(${code}) message(${message}) detail(${details})`,
            link: '/',
          },
          ]});
        });
    }
  }

  return (
    <div>
        <div>
          { newsData && newsData.items.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <a href={item.link}>
                <div dangerouslySetInnerHTML={{ __html: item.title }}></div>
              </a>
            </div>)
          )}
        </div>
    </div>
  );
}

export default NewsPage;

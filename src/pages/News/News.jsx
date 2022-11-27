import React, { useState } from 'react';
import { ref } from "firebase/database";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import {
  firebaseFunctions,
} from '../../utils/fb';

const NewsItem = ({ title, link }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <a href={link}>
      <div dangerouslySetInnerHTML={{ __html: title }}></div>
    </a>
  </div>
)


const NewsPage = () => {
  const [newsRowData, setNewsRowData] = useState(null);
  const [onlyNaverNews, setOnlyNaverNews] = useState(true);

  
  React.useEffect(() => {
    loadNews();
  }, []);
  
  const handleOnlyNaverNewsCheckChange = event => {
    setOnlyNaverNews(event.target.checked);
  };

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
            return setNewsRowData({ items: [{
              title: 'ERROR',
              link: '/',
            }, {
              title: `code(${jsonData.errorCode}) message(${jsonData.errorMessage})`,
              link: '/',
            },
            ]});
          }
          setNewsRowData(jsonData);
        })
        .catch((error) => {
          // Getting the Error details.
          const code = error.code;
          const message = error.message;
          const details = error.details;
          // ...
          setNewsRowData({ items: [{
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
    <Box>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox
            checked={onlyNaverNews}
            onChange={handleOnlyNaverNewsCheckChange}
            inputProps={{
              'aria-label': 'controlled',
              'data-testid':'chkbx-only-naver-news'
            }}
          />}
          label="네이버 뉴스만 보기(언론사페이지제외)"
          labelPlacement="end"
        />
      </FormGroup>
      <Box>
        { newsRowData && (onlyNaverNews
          ? newsRowData.items.filter(filterItem => filterItem.link.includes('news.naver.com')).map((item, idx) => <NewsItem key={idx} title={item.title} link={item.link} />)
          : newsRowData.items.map((item, idx) => <NewsItem key={idx} title={item.title} link={item.link} />))
        }
      </Box>
    </Box>
  );
}

export default NewsPage;

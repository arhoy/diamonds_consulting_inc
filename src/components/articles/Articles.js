import React from 'react';
import Article from './Article';

const Articles = ({ articles }, i) =>
  articles.map(article => (
    <Article key={`${articles}-${i}`} article={article} />
  ));

export default Articles;

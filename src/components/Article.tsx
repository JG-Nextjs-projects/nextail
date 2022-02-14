import React from 'react';

interface ArticleProps {
  title: string;
  children: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({ children, title }) => {
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      {children}
    </article>
  );
};

export default Article;

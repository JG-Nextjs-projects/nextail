import React from 'react';

interface ArticleProps {
  title: string;
  children: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({ children, title }) => {
  return (
    <article>
      <header className="mb-4">
        <h1 className="text-3xl">{title}</h1>
      </header>
      {children}
    </article>
  );
};

export default Article;

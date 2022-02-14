import React from 'react';

import Article from './Article';

interface ArticleProps {
  title: string;
  children: React.ReactNode;
}

const Post: React.FC<ArticleProps> = ({ children, title }) => {
  return (
    <div className="mb-16">
      <Article title={title}>{children}</Article>
    </div>
  );
};

export default Post;

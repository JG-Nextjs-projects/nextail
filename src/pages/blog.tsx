import fs from 'fs';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import path from 'path';
import React from 'react';

const root = process.cwd();

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync(path.join(root, 'src/pages/posts'));
  const posts = [];

  files.map(async (file) => {
    const slug = file.replace('.mdx', '');
    const { meta } = await import(`./posts/${file}`);

    posts.push({ slug: slug, meta: meta });
  });

  return {
    props: {
      posts,
    },
  };
};

const Posts = ({ posts }) => {
  return (
    <div>
      <h2>Hello from blog</h2>
      {posts.map((post) => (
        <li>{post.meta.title}</li>
      ))}
    </div>
  );
};

export default Posts;

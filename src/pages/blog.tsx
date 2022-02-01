import fs from 'fs';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import path from 'path';
import React from 'react';

const root = process.cwd();

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync(path.join(root, 'src/pages/posts'));
  const postMeta: string[] = [];

  files.map(async (file) => {
    const { meta } = await import(`./posts/${file}`);
    postMeta.push(meta);
  });

  const posts = files.map((file) => {
    const slug = file.replace('.mdx', '');
    // const slug = fs.readFileSync(path.join(root, 'src/pages/posts'));

    return {
      slug,
      postMeta,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h2>Hello from blog</h2>
      {posts.map((post) => {
        <p>Hello</p>;
      })}
    </div>
  );
};

export default Posts;

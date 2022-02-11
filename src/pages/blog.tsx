import fs from 'fs';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import path from 'path';
import React from 'react';

const root = process.cwd();

interface Meta {
  title: string;
  description: string;
  date: number;
  author: string;
  slug: string;
}

interface PostProps extends Meta {
  posts: Meta[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync(path.join(root, 'src/pages/posts'));

  const promises = files.map(async (file) => {
    const { meta } = await import(`./posts/${file}`);

    return meta;
  });

  const posts = await Promise.all(promises);

  return {
    props: { posts },
  };
};

const Posts = ({ posts }: PostProps) => {
  console.log(posts);
  return (
    <div>
      <h2>Hello from blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

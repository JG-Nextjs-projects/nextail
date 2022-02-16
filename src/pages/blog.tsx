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
  return (
    <div>
      <h1 className="text-3xl font-extrabold leading-9 mb-8">Hello from blog</h1>
      <ul>
        {posts.map((post) => (
          <li className="py-1" key={post.slug}>
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

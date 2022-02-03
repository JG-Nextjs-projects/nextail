import fs from 'fs';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import path from 'path';
import React from 'react';

const root = process.cwd();

interface Post {
  slug: string;
  meta?: {
    title: string;
    description: string;
    date: number;
    author: string;
  };
}

interface Meta {
  title: string;
  description: string;
  date: number;
  author: string;
}

interface PostProps extends Post {
  posts: Post[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync(path.join(root, 'src/pages/posts'));
  // const posts: Post[] = [];

  const posts = files.map(async (file) => {
    const { meta } = await import(`./posts/${file}`);

    console.log(meta);
    return {
      meta,
    };
  });

  // console.log(posts);

  return {
    props: {
      posts,
    },
  };
};

const Posts = ({ posts }: PostProps) => {
  return (
    <div>
      <h2>Hello from blog</h2>
      <ul>
        {/* {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.slug}</a>
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Posts;

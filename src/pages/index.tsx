/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Header from '../components/Header/index'

import Prismic from '@prismicio/client';
import { useState } from 'react';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  const [posts, setPosts] = useState<Post[]>(postsPagination.results);
  const [nextPage, setNextPage] = useState(postsPagination.next_page);

  function getMorePosts(): void {
    fetch(nextPage)
      .then(res => res.json())
      .then(data =>
        setPosts([
          ...posts,
          ...data.results.map(post => {
            return {
              uid: post.uid,
              first_publication_date: post.first_publication_date,
              data: {
                title: post.data.title1,
                subtitle: post.data.subtitle,
                author: post.data.author,
              },
            };
          }),
        ])
      );

    fetch(nextPage)
      .then(res => res.json())
      .then(res => setNextPage(res.next_page));
  }

  function handleClick() {
    getMorePosts();
    console.log(posts);
    console.log(nextPage);
  }

  return (
    <>
      <Head>
        <title>Programador Curioso</title>
      </Head>

      <Header></Header>

      <main className={commonStyles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            <Link href={`/posts/${post.uid}`} key={post.uid}>
              <a className={styles.postContainer}>
                <strong>{post.data.title}</strong>
                <p>{post.data.subtitle}</p>
                <div>
                  <img src="/images/calendar.png" alt="" />
                  <time>{post.first_publication_date}</time>
                  <p>{post.data.author}</p>
                </div>
              </a>
            </Link>
          ))}
          {nextPage && (
            <button type="button" onClick={() => handleClick()}>
              <a>Carregar mais posts</a>
            </button>
          )}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const postsResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'posts')],
    {
      pageSize: 2,
      fetch: ['posts.title1', 'posts.uid', 'posts.subtitle', 'posts.author'],
    }
  );

  const posts = postsResponse.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: post.first_publication_date,
      data: {
        title: post.data.title1,
        subtitle: post.data.subtitle,
        author: post.data.author,
      },
    };
  });

  return {
    props: {
      postsPagination: {
        next_page: postsResponse.next_page,
        results: posts,
      },
    },
  };
};

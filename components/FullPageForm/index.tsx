import React from 'react';
import Head from 'next/head';
import Logo from '../Logo';
import styles from './fullpageform.module.scss';

interface Props {
  title: string,
  callbackUrl: string,
  header: React.ReactNode,
  children: React.ReactNode
}

export default function FullPageForm({title, callbackUrl, header, children}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title> {title} </title>
      </Head>
      <form method="post" action={callbackUrl} className={styles.customContainer}>
        <div className={styles.customForm}>
          <a href="/"><Logo /></a>
          {header}
          <div className={styles.formContent}>
            {children}
          </div>
        </div>
      </form>
    </>
  );
}
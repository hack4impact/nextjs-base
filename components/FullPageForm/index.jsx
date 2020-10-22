import React from 'react';
import Head from 'next/head';
import Logo from '../Logo';
import PropTypes from "prop-types";
import styles from './fullpageform.module.scss';

export default function FullPageForm({title, callbackUrl, header, children}) {
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

FullPageForm.propTypes = {
  title: PropTypes.string.isRequired,
  callbackUrl: PropTypes.string.isRequired,
  header: PropTypes.element
}
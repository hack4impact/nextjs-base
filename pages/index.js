import React from "react";
import Header from '../components/Layout/Header';
import styles from "./index.module.scss";

export default function index(){
  return (
      <>
      <Header/>
      <main className="container main-container">
          <div className={styles.container}>
              <h1> Your full stack app begins here </h1>
              <p> This is the landing page. Users will see this page when they are not logged in. </p>
          </div>
      </main>
      </>
  )
}
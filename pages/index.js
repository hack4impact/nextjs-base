import { getSession } from "next-auth/client";
import Link from "next/link";
import React from "react";
import Wrapper from "../components/Layout/Wrapper";

export default function Index({session}){
  return (
      <Wrapper session={session}>
          {
          }
        <h1> Welcome to NextJS Base. </h1>
        <p> 
            This is a starter template with authentication, scss, and other essentials already baked in, 
            so you don't have to waste your time setting up a full stack app.
            {
                session ? <Link href="/dashboard"> Access your dashboard </Link> : <Link href="/auth/login"> Login </Link>
            } 
        </p>
      </Wrapper>
  )
}

export async function getServerSideProps(context) {
    return {props: {session: await getSession(context)}}
}
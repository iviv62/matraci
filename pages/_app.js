import 'tailwindcss/tailwind.css'
import '../public/styles.css'
import MainLayout from '../components/Layouts/MainLayout'
import * as cache from '../settings/cache';
import {ApolloProvider} from "@apollo/client";
import {useEffect} from 'react'
import{API} from '../settings/constants'
import {user} from '../settings/cache';
import {useReactiveVar} from '@apollo/client';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {

  const router = useRouter()
  let userInfo = useReactiveVar(user);
  
  
  useEffect(() => {
      
    fetch(`${API}whoami/`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
    .then(response => response.json())
    .then((data) => {
      if(!data.detail){
        data.user.loggedIN=true;
        user(data.user)
     
      }
       
    })
    .catch((err) => {
      console.log(err);
      
    });
   
   }, [])


  return (
    <ApolloProvider client={cache.client}>
    <MainLayout>
    <Component {...pageProps} />
    </MainLayout>
    </ApolloProvider>
  )
  
}

export default MyApp

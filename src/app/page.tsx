'use client'
import Image from 'next/image'
import prisma from '@/db'

import Login from './components/login'
import Nav from './components/nav'
import Footer from './components/footer'
import MainList from './components/mainList'
import SearchBar from './components/search'





export default function Home() {
  
  // async function test(){
  //   await prisma.test.create({
  //     data: {
  //       email: 'elsa@prisma.io',
  //       name: 'Elsa Prisma',
  //     },
  //   });
  // }

  return (
    <>

    <div>
      <Nav/>
    </div>
    <div>
      <MainList/>
    </div>

    </>
  );
}
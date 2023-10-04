"use client"

import Image from 'next/image'
import prisma from '@/db'
import Link from "next/link"
import Paging from './paging'
import { useState } from 'react'


export default function MainList() {

    const [isActive, setIsActive] = useState(false);
    
    const products = [
      {
        id: 1,
        name: 'Earthen Bottle',
        href: '/listdetail',
        price: '$1148',
        imageSrc: '/img/경매이미지.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: '/img/경매이미지.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: '/img/경매이미지.png',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/img/경매이미지.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/img/경매이미지.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 6,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/img/경매이미지.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 7,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/img/경매이미지.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    ]

  
    
    
    
    const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 4));


    const loadMoreProducts = () => {
      // "더 보기" 버튼을 클릭했을 때 실행되는 함수입니다.
      const currentLength = visibleProducts.length;
      const nextProducts = products.slice(currentLength, currentLength + 4);
  
      if (nextProducts.length > 0) {
        setVisibleProducts((prevProducts) => [...prevProducts, ...nextProducts]);
      }
    };

    
    
    
      return (
        
        <div className="bg-white ">
            <HomeMain/>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">


              {/* 상품 목록을 매핑하여 화면에 표시합니다. */}
              <div className="product-grid">
                <div className="grid grid-cols-4 gap-4">
                  {visibleProducts.map((product) => (
                    <div key={product.id} className="product-item">
                      {/* 상품 정보를 표시하는 코드를 추가하세요. */}
                      <a key={product.id} href={product.href} className="group">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                          style={{ width: '280px', height: '280px' }}
                        />
                        <h3>{product.name}</h3>
                      </a>
                      <p>{product.price}</p>
                    </div>
                  ))}
                </div>
                {/* "더 보기" 버튼을 추가하고 클릭 이벤트를 연결합니다. */}
                <div className="text-center mt-4">
                  {visibleProducts.length < products.length && (
                    <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 border-2 rounded-lg animate-bounce" onClick={loadMoreProducts}>
                      더 보기
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
      )
    }


function HomeMain(){
      return(
        <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                <span className="relative inline-block animate-ping">
                  JINDDOBAY 
                </span>
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                
              </p>
            </div>
            <div>      
              <div className="absolute  sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-[300px] w-[500px] overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img
                        src="img/back.png"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className='inline-block border border-transparent  text-center font-medium '>
                <Link href='/sell'> 
                  <button className='p-3 bg-amber-400 text-rose-950 rounded-md cursor-pointer'>상품판매</button>
                </Link>
              </div>

          </div>
        </div>
      </div>
      )
}
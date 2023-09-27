import Image from 'next/image'
import prisma from '@/db'
import Link from "next/link"
import Paging from './paging'


export default function list() {
    const products = [
        {
          id: 1,
          name: 'Earthen Bottle',
          href: 'listdetail',
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
    
    
      return (
        
        <div className="bg-white ">
            <HomeMain/>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
    
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}  
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      style={{ width: '280px', height: '280px' }} // 이미지 크기 조정
                      />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
              ))}
            </div>
          </div>
          <Paging/>
        </div> 
      )
    }
    function HomeMain(){
      return(
        <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                메인페이지 어쩌지
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                
              </p>
            </div>
            <div>
              
              
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="img/경매이미지.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="img/경매이미지.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="img/경매이미지.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                {/* <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                > */}
                  <div className='inline-block border border-transparent  text-center font-medium '>
                    <Link href='/sell'> 
                      <button className='p-3 bg-amber-400 text-rose-950 rounded-md cursor-pointer'>상품판매</button>
                    </Link>
                  </div>
                {/* </a> */}
              </div>
            </div>
          </div>
      )
}
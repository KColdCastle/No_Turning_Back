"use client"

import React, { Fragment, useState } from 'react'
import { Disclosure } from '@headlessui/react'


// function classNames(...classes: any) {
//     return classes.filter(Boolean).join(' ')
// }

const navigation = [
    { name: '회원정보', href: '/user', current: true },
    { name: '내가 쓴 글', href: '/mylist', current: false },
    { name: '구매', href: '/buy', current: false },
    { name: '판매', href: '/sale', current: false },
    { name: '페이', href: '/pay', current: false },
    { name: '쪽지', href: '/message', current: false },
]

export default function MyPageNav() {

    return (
        <>
        <Disclosure as="nav" className="bg-white mb-10">
            {(open) => (
            <div className="">
                <div className="flex-container justify-center items-center">
                
                    <div className="flex-item">
                        <div className="link-container space-x-6 ">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`nav-link ${item.current ? 'current' : ''} flex-auto text-black font-bold text hover:text-zinc-400`}
                                aria-current={item.current ? 'page' : undefined}
                                >
                                {item.name}
                            </a>
                        ))}
                        
                        </div>
                    </div>
                </div>
                <div className="">
                    
                </div>
            </div>
            )}  
        </Disclosure>
        
        

        {/* <div className='sellButton'>
            <Link href='/sell'> 
                <button className='sell'>상품판매</button>
            </Link>
        </div> */}
        
        </>
    );
}


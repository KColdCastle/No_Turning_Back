'use client'
import { Dialog, Transition } from '@headlessui/react'
import {Fragment,useState,useEffect, useRef} from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { TransactionInfo } from '@/typeModules'

export default  function Bidding({closeModal, isOpen , postId} : TransactionInfo)
{
  
    const [data , setData] = useState<any>([])
    const ref = useRef<any>(null);
    useEffect(()=>{
      getData()
    },[])
    function updateValue(price : string)
    {
      let parseNumber = parseInt(price)
      
      if(parseNumber === -1)
      {   let cusVal = parseInt(ref.current?.value)
          requestUpdate(cusVal)
      }
      else{
          requestUpdate(parseNumber)
      }
    }
    async function requestUpdate(price : number){
        let currentPrice = parseInt(data.currentPrice)
        let maxPrice = parseInt(data.maxPrice)
      
        if(currentPrice <  price)
        {
          data.currentPrice = price;
          await fetch(`api/transaction/${postId}`,{
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }).then(e=>{
            return e.json()
          }).then(e=>{
            setData(e)
          })
          // prisma create
        }
        else{
          //prisma create

        }
    }
    async function getData()
    {
      let temp = await fetch(`api/transaction/${postId}`,{
          method : "GET"
      }).then(e =>{
        return e.json()
      }).then(e=>{
        setData(e)
      })
    }
    return(<>
    {data !== undefined ?
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className=" font-medium leading-6 text-gray-900">
                    <div className="titleSection text-left flex">
                      <h1 className='text-xl'>입찰에 참가: {postId}</h1>
                      <div className="ml-auto right">
                          <button onClick={closeModal}>
                              <XCircleIcon style={
                                {
                                  width:"30px"
                                }
                              }/>
                            </button>
                      </div>
                    </div>
                    <div className="priceInfo mt-3"> 
                        <b>KRW: {data.currentPrice}</b> + <span> shipping : 3000 KRW</span>
                    </div>
                  </Dialog.Title>
                  
                    <div id="description" className=''>
                        <div className="maxBiddingButton mt-10 grid-cols-3 gap-6 grid justify-center items-center">
                                <div className="grid-rows-2">
                                  <div>
                                    <button 
                                    onClick = {()=>{updateValue((data.currentPrice * 1.01).toFixed(0))}}
                                    className="bg-cyan-400 w-[100%] h-8 rounded-full">{(data.currentPrice * 1.01).toFixed(0)} KRW</button>
                            
                                  </div>
                                </div>
                                <div className="grid-rows-2">
                                  <div>
                                    <button 
                                    onClick = {()=>{updateValue((data.currentPrice * 1.03).toFixed(0))}}
                                    className="bg-cyan-400 w-[100%] h-8  rounded-full">{(data.currentPrice * 1.03).toFixed(0)} KRW</button>
                                    
                                  </div>
                                </div>
                                <div className="grid-rows-2">
                                  <div>
                                    <button onClick = {()=>{updateValue((data.currentPrice * 1.05).toFixed(0))}} className="bg-cyan-400 w-[100%] h-8 rounded-full">{(data.currentPrice * 1.05).toFixed(0)} KRW</button>
                                    
                                  </div>
                                </div>
                        </div>
                    </div>
                  
  
                    <div className="mt-12 h-[1px] bg-black m-6 relative text-center">
                      <span className='text-black absolute mt-[-30px] ml-[-30px] bg-white px-4 py-4'>또는</span>
                    </div>
                    <div className="grid gird-rows-3">
                          <div className='text-black font-bold text-lg'>내 최고 입찰가</div>
                          <div className='mt-2'>
                            <p className='font-bold '>KRW: {data.maxPrice} 보다 높은 가격을 입력해주세요</p>
                            <input ref={ref} name= "cusPrice" type='number' className='h-10 w-full border border-gray-400 rounded-lg' />
                          </div>
                          <div >
                              <button onClick = {()=>{updateValue("-1")}} className='bg-sky-400 h-9 text-center w-full mt-5 rounded-lg'>응찰하기</button>
                          </div>
                    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>:""}
    </>)
}
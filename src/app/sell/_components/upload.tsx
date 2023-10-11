'use client'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Dropdown from "../../components/dropdown";

const backGroundStyle = {
  // backgroundImage: "url('/img/경매이미지.png')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat", // 이미지 반복 없음
};

export default function SellProduct() {
  // const [categoryType, setCategoryType] = useState(''); // 카테고리 타입 상태
  const [categoryTag, setCategoryTag] = useState(''); // 카테고리 태그 상태
  const [email, setEmail] = useState(''); // 이메일 상태

  // 컴포넌트가 처음 마운트될 때 세션 스토리지에서 값을 가져온다.
  useEffect(() => {
    const storedEmail = sessionStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  // function handleCategoryTypeSelect(e: ChangeEvent<HTMLInputElement> ) {// 카테고리 타입을 선택할 때 호출되는 함수
  //   setCategoryType(e.target.value);
  // };
  // target: 이벤트가 부착된 엘리먼트의 하위(자식) 요소만 리턴
  // currentTarget: 이벤트가 부착된 엘리먼트 요소까지 모두 리턴

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    // 이메일 입력 필드 값이 변경될 때마다 상태를 업데이트
    setEmail(e.target.value);
  }

  function handleCategoryTagChange(e: ChangeEvent<HTMLInputElement> ) {// 카테고리 태그를 입력할 때 호출되는 함수
    setCategoryTag(e.target.value);
  };


  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // 입력된 이메일 값을 세션 스토리지에 저장.
    sessionStorage.setItem('email', email);

    try {
      const f = new FormData(event.currentTarget)
      const send = await fetch('http://localhost:3000/api/sell',{
        method: 'POST',
        body : f
      }).then((res) =>{
        //성공시 처리 
          if(res.status == 200)
            location.href= '/' //Home 으로 이동 
            //alert("Message : " +200)
            console.log(res);
      }).catch((e) => {throw e}).finally()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <form onSubmit={onSubmit}>
      <div style={backGroundStyle}>
        <div className="mx-[10%]">
          <div className="tab-bar">
            <div className="tab">
              <span className="tab_hi">경매 올리기</span>
            </div>
          </div>

          <div className='mx-[10%]'>
            <div className="border-gray-900/10 pb-12">

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    닉네임
                  </label>
                  <div className="mt-2 w-[448px]">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset">
                    <input
                      type="text"
                      name="email"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="용빈"
                      value={email} // 입력 필드의 값은 상태(State)에서 가져옵니다.
                      onChange={handleEmailChange} // 입력 필드 값이 변경될 때 호출되는 함수
                    />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                    제목
                  </label>
                  <div className="mt-2 w-[448px]">
                    <input
                      id="title"
                      name="title"
                      type="text"
                      placeholder="제목"
                      autoComplete="off"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
                    />
                  </div>
                </div>
              </div>

              <div className="border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <Dropdown />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="categoryTag" className="block text-sm font-medium leading-6 text-gray-900">
                    카테고리 태그 입력:
                  </label>
                  <input
                    type="text"
                    id="categoryTag"
                    name="categoryname"
                    value={categoryTag}
                    onChange={handleCategoryTagChange}
                    placeholder="카테고리 태그를 입력하세요"
                    className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                  <div className="sm:col-span-3">
                    <label htmlFor="start-price" className="block text-lg font-medium leading-6 text-gray-900">
                      시작 가격
                    </label>
                    <input
                      type="text"
                      id="start-price"
                      name="price"
                      placeholder="가격을 입력해 주세요"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                    상품 설명
                  </label>
                  <textarea
                    id="description"
                    name="content"
                    rows={3}
                    placeholder="내용을 입력해 주세요"
                    className="block w-full rounded-md border-0 py-1.5 h-[80px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    defaultValue={''}
                  />
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  {/* <button
                    type="submit"
                    className="rounded-md bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    작성 완료
                  </button> */}
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    다음
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  );
}

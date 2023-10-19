'use clinet'
import React, { FormEvent, FocusEvent, useState, useEffect, useRef, ChangeEvent} from 'react'
import { Switch } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2';
import { log } from 'console';

export default function Login() {
  const router = useRouter()

  const myref = useRef<any>(null)
  const [show, setShow] = useState<boolean>(true)
  const [switchOn, setSwitch] = useState(false)
  const [email,setEmail] = useState<any>("")
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nickname: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const emailS =window.localStorage.getItem("email")
    const toggle : boolean = window.localStorage.getItem("switch") === "TRUE" ? true : false
    if(toggle && emailS != "")
    {  
      setSwitch(true);
      setEmail(emailS)
      //document.getElementById("email").value =emailS
      myref.current.value = emailS
    }
  },[])
  function onChange(e:any) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function onSubmit(e:any) {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;

    if (email && password) {
      const temp =await fetch(`http://localhost:3000/api/login/${email}/${password}`,{
          method: "GET",
          headers:{
            accept : "application/json"
          }
      }).then(e=>{
          let temp = (e.json());         
         return temp;
      })
      // alert(sessionStorage.setItem('loggedInfo',temp.result.nickname));
      sessionStorage.setItem('loggedInfo', temp.result.nickname);
      sessionStorage.setItem('loggedEmail',temp.result.email);
      alert(temp.result.nickname+'님 환영합니다')
      // location.href='./'
    }
  }
  
  function newJeansCookie(e: boolean) //id 저장
  {
    setSwitch(e)
    if(e && (email !== "" || email !== undefined || email !== null))
    { 
      window.localStorage.setItem("email", email)
      window.localStorage.setItem("switch", "TRUE");
      console.log("TRUE")
    }
    else
    {
      window.localStorage.setItem("email", "")
      window.localStorage.setItem("switch", "FALSE");
    }
  }
  function SignUp() {
    window.location.href = 'SignUp';
  }

  const error = 
    show ? <></> : <p className="text-red-500 text-xs italic">이메일이 존재하지 않습니다 이메일을 다시 확인부탁 드립니다.</p>


  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='grid grid-flow-row auto-rows-5'>
          <div className="mb-4">
            <input  
              onChange={onChange}
              onFocus={() => setShow(true)} type="email" id="email" name="email"
              ref = {myref}
              value={formData.email} 
              placeholder='이메일 또는 아이디'
              className="w-full text-gray-700 border focus:outline-gray-400 p-2"
              />
              {error}
          </div>
          <div className="mb-4">
            <input type="password" id="password" name="password"
              onChange={onChange}
              value={formData.password} 
              placeholder='비밀번호'
              className="w-full text-gray-700 border p-2 focus:outline-gray-400" />
          </div>
          <div className='mb-2'>
          <Switch
                checked={switchOn}
                defaultChecked={switchOn}
                onChange={newJeansCookie}
                className={`${
                  switchOn ? 'bg-blue-400' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    switchOn ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
                
              </Switch><span className='ml-3 text-sm text-gray-400'>아이디 저장</span>
          </div>
          <div className="text-center">
            <button type="submit" 
            className="bg-blue-400 text-white font-bold py-2 px-4 rounded-lg w-full ">로그인</button>
          </div>
          <div className="text-center">
            <button type="button"
            onClick={SignUp} 
            className="bg-blue-400 mt-2 text-white font-bold py-2 px-4 w-full rounded-lg">회원가입</button>
          </div>
        </div>
      </form>   
    </div>
  )
}

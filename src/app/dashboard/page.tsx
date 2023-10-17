'use client'
import { useState, useEffect } from "react";
export default function Page() {
    const [data,setData] = useState<any>([])
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{      
    },[data])
    async function getData() {
        const result =  await fetch(`api/posting`,{
            method:"GET",
            headers:{
                accepts : "application/json"
            }
        }).then(e=>{
            return e.json()
        })
        setData(result)
    }
    async function handleOnClick(i : number)
    {   
       
        location.href= `dashboard/${data[i].category_type}/${data[i].id}`
    }
    return (

        <div className="grid grid-cols-4"> 
            {
                data && 
                data.map((e:any,i:number)=>{
                    return(
                    <div key={i} className="w-56">
                        <button onClick={()=>{handleOnClick(i)}}>{e.title}</button>
                    </div>)
                })
            }
            
        </div>

    );
}
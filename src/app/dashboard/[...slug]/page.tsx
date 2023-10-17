'use client'

import {useState, useEffect } from "react";


export default function Page(query:{params : any}) {
    const [data,setData] = useState<any>([]);
    let id = query.params.slug[1]
    useEffect(()=>{
        getData()
    },[])
    async function getData() {
        await fetch(`/api/posting/${id}`,
        {
            method:"GET"
        }).then(e=>{
           return e.json()
        }).then(e=>{
            setData([e])
        })
    }
    useEffect(()=>{
        console.log(data)
    },[data])

    return (
    <div>
        {
            data && data.map((e:any,key:number)=>{
                return(<div key={key} >
                    {e.title}
                </div>)
            })
        }
    </div>
    );
}
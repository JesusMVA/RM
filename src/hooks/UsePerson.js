import { useState, useEffect } from 'react'

const UsePerson = () => {

  const[person,setPerson]=useState([]);
  const[page,setPage]=useState(1);

  function prev(){
    if(page<=1){
      page(1)
    }else{
      setPage(page - 1)
    }
  }
  function next(){
    if(page>=42){
      page(42)
    }else{
      setPage(page + 1)
    }
  }

  useEffect(()=>{
    async function getdata(){
      const list = await fetch (`https://rickandmortyapi.com/api/character/?page=${page}`)
      const data = await list.json()
      setPerson(data.results)
    }
    getdata();
  },[page])

  return {
    person,
    page,
    prev,
    next
  }
}

export default UsePerson
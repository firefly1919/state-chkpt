
import axios from 'axios';
import { Button } from 'bootstrap';
import { useEffect, useState } from 'react';
import './App.css';
function App() {

  const [data,setData]= useState ([])
useEffect(() => {
axios.get('http://192.168.2.41:3333/api/getallpost').then((res)=>setData(res.data))


}, [])
const [body,setBody]=useState("");
  const [createdAt,setCreatedAt]=useState("");
  const [id,setId]=useState(Math.random());
  const [imageUrl, setImageUrl]=useState("");
  const [namee,setNamee]=useState("");
  const [title, setTitle]=useState("");
  const [video, setVideo]=useState("");

const newpost= async(newcard)=>{
await axios.post('http://192.168.2.41:3333/api/createnewpost',newcard) 
window.location.reload()
}
const deletepost=async(idd)=>{
 await axios.delete('http://192.168.2.41:3333/api/deletepost/' +idd )
 window.location.reload()
}
const editpost= async(idd,data)=>{
  await axios.put('http://192.168.2.41:3333/api/updatepost/'+idd,data)
  window.location.reload()
}
console.log(data)
  return (
    <div className="App">
    <input type= 'text' onChange={(e)=>setImageUrl(e.target.value )}></input>
    <button onClick={()=>newpost({id,title,namee,imageUrl,createdAt,body,video})}>add</button>
     {data.map((el)=>
      <div>
      <img src={el.imageUrl} alt ='404'/>
      <button onClick={()=>deletepost(el.id)}>delete</button>
      <button onClick={()=>editpost(el.id,{id,title,namee,imageUrl,createdAt,body,video})}> edit</button>
  </div>)}
     
    </div>

  );
}

export default App;

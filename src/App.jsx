import { useState ,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { LiaEditSolid } from "react-icons/lia";
import { v4 as uuidv4 } from 'uuid';
import { MdDeleteForever } from "react-icons/md";
// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
function App() {
  // input text
  const [todo, setTodo] = useState("")
  // ek array jo todo hold krega
  const [todos, setTodos] = useState([])
  const [showFinished,setshowFinished] =useState(true)


useEffect(() => {
  let todoString =localStorage.getItem("todos")
  if(todoString){
  let todos = JSON.parse(localStorage.getItem("todos"))
  setTodos(todos)
  }
}, [])

const saveToLS= (params) => {
  localStorage.setItem("todos",JSON.stringify(todos))
}
 
const toggleFinished =(e)=> {
setshowFinished(!showFinished)
 }

const handleEdit = (e,id) => {
   let t = todos.filter(i=>i.id===id)
setTodo(t[0].todo)
let newTodos = todos.filter(item => {
  return item.id !== id
});
setTodos(newTodos)
saveToLS()
}

  
const handleDelete = (e, id) => {
let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
  
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className=' text-white w-full font-bold container mx-auto p-10 min-h-[70vh] bg-slate-600 rounded-xl my-3 mb-5'>
        <div className='main mb-4 ' >
          <h1 className=' text-cyan-100 text-4xl  mb-0 flex justify-center' > Add a Todo</h1>
          <div className='bg-gray-500 mx-auto h-0.5 w-[17%] mb-16'></div>
           <input onChange={handleChange} value={todo} type="text" placeholder='....todo-name....' className="my-2 flex mx-auto w-[70%] py-1 text-black text-center focus:outline-none rounded-lg" />
             <button onClick={handleAdd} disabled={todo.length<=3} className='bg-gray-800 py-1 px-6 w-[300px] mx-auto flex justify-center text-white rounded-lg disabled:bg-slate-700 hover:bg-amber-300 '  >Save</button>
        </div>
               <div className='save'>
                <div className='flex text-4xl  gap-5'>
                <input type="checkbox"  onChange={toggleFinished} checked={showFinished} id="show" /> 
                <label htmlFor="show" >Show Finished</label> </div>
                <div className='=h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>

                 <h1 className='text-cyan-100 text-4xl  flex justify-center'>Your Todos</h1>
                 <div className='bg-gray-500 mx-auto my-2  h-0.5 w-[90%]'></div>
                  <div className='todos'>
                   {todos.length === 0 && <div className='m-5'> No Todos to display </div>}
                    {todos.map(item => {
              
              return (showFinished || !item.isCompleted) && <div key={item.id} className='todo flex justify-between my-6'>
               
                           <div className='flex items-center gap-5'>
                             <input name={item.id} onChange={handleCheckbox} type="checkbox" className='hover:bg-black-400' checked={item.isCompleted} id="" />
                               <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                                </div>

                               {/* line through ek class hai javascript likhne ke lie aise curly bracket use kro */}
                                {/* //button edit and Delete */}

                               <div className='buttons flex align items-center'>
                                {/* ye icons hmne react icons ki website se liye hai import aur icon ka name use krke yaad se */}
                                 <button onClick={(e)=>handleEdit(e,item.id)} className='bg-gray-800 px-3 h-5 text-white rounded-lg hover:bg-amber-300 mx-2'  ><LiaEditSolid /></button>
                                 <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-gray-800 h-5 px-3  text-white rounded-lg hover:bg-amber-300 mx-2'  ><MdDeleteForever />
                                 </button>
                               </div>
                     </div>

            })}</div></div></div></>)
}

export default App

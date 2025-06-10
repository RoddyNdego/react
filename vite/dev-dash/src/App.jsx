
import Counter from "./components/Counter"
// import { useState } from "react"
import './App.css'

function App() {

  return <Counter/>

  // const [popupOpen, setPopupOpen] = useState(false)

  // return (
  //   <>
  //     <Title todo_title="To-do list" />
  //       <div>
  //         <input type="text" onChange={(event) =>{
  //           console.log(event.target.value)
  //         }}/>
  //         <button onClick={() => setPopupOpen(true)}>Add to do</button>
  //       </div>
  //     <Todo task="Get ready for tomorrow"/>
  //     <Todo task="Go to bed early"/>
  //     <Todo task="Wake up early"/>
  //     <Todo task="Go to work"/>
  //     { popupOpen && <Popup alert="Are you reallyyy sure?"/>}
  //   </>
  // )
}

export default App

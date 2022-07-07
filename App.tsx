import { useRef, useState } from "react";
import Message from "./components/Message";
import { MessageInt } from "./model";

const App = () => {
  const inputMessage = useRef<HTMLInputElement | any>(null)
  const [messData, setMessData] = useState<MessageInt[]>([])
  

  const handleSubmit = (e:any) => {
    e.preventDefault()

    //logique d'envoi
    
   if(inputMessage) {
    const mess:MessageInt = {
      id: Math.round(Math.random() * Date.now()),
      message: inputMessage.current.value,
      date:Date.now(),
    }
    setMessData((prevData) => [...prevData, mess]);    
   }
    
    inputMessage.current.value = "";
  }
 

  return (
    <div>
     <h2>To do list</h2>
     <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder='Entrez une chose à faire' id="inputMessage" ref={inputMessage} />
      <input type="submit" value="Envoyer" />
     </form>
     <h2>TO DO :</h2>
     <div>{messData?.map((mess) => (
      <Message mess={mess} messData={messData} setMessData={setMessData} key={mess.id} />
     ))}</div>
    </div>
  );
};

export default App;

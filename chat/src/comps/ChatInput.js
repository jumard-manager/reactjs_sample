import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const ChatInput = ({_callback}) => {
  const [chat,setChat] = useState('');

  const enter = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      _callback(uuidv4(), e.target.value);
      setChat('');
    }
  }

  return (
    <textarea style={{width:'98%'}} value={chat} onChange={(e)=>{setChat(e.target.value)}} onKeyDown={enter}></textarea>
  );
}

export default ChatInput;
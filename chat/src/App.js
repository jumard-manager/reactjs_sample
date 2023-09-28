import './App.css';
import {useState} from 'react';
import ChatList from './comps/ChatList';
import ChatInput from './comps/ChatInput';

function App() {
  const [chatItems,setChatItems] = useState([{key:'key1', val:'Hello!'}]);
  
  const update = (_key, _val) => {
    const newItems = chatItems.concat({key:_key, val:_val});
    setChatItems(newItems);
  }

  return (
    <div className="main">
      <table border="1" width="400px">
        <tbody>
          <tr>
            <td><ChatList _chatItems={chatItems} /></td>
          </tr>
          <tr>
            <td><ChatInput _callback={update} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

const ChatList = (props) => {
  const chatItems = props._chatItems.map((item) => 
    <li key={item.key}>{item.val}</li>
  );

  return (
    <>
      <ul>{chatItems}</ul>
    </>
  );
}

export default ChatList;
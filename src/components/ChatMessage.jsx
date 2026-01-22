import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';

//function ChatMessages({chatMessages}){  
  /*
  function sendMessage(){
    setChatMessages([
      ...chatMessages,
      {
        message: 'test',
        sender: 'user',
        id: crypto.randomUUID()
      }
    ]);
  }
  */
  // To use a function as a hook, the function name must
// start with "use".


export function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  /*
  if (sender === 'robot') {
    return (
      <div>
        <img src="robot.png" width="50" />
        {message}
      </div>
    );
  }
  */

  return (
    <div className={
      sender === 'user' 
        ? 'chat-message-user' 
        : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img src={RobotProfileImage} className="chat-message-profile"/>
      )}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-message-profile"/>
      )}
    </div>
  );
}
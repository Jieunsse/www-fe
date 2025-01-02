import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState('');

  const getMessage = () => {
    axios
      .get('http://localhost:8080/main/test')
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>백엔드로부터 가져온 메시지 : {message}</div>

      <button onClick={getMessage}>데이터 가져오기</button>
    </>
  );
};

export default App;

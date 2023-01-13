import React, { useState } from 'react';

const multitap = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
};

const Multitap = () => {
  const [message, setMessage] = useState('');
  const [encoded, setEncoded] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEncode = () => {
    const encodedMessage = message
      .toLowerCase()
      .split('')
      .map((char) => {
        if(char === " ") return "0";
        for (let key in multitap) {
          if (multitap[key].includes(char)) {
            return key.repeat(multitap[key].indexOf(char) + 1);
          }
        }
        return char;
      })
      .join('')
      .match(/(\d)\1*/g)
      .join('.');
    setEncoded(encodedMessage);
  };

  const handleDecode = () => {
    const decodedMessage = encoded
      .split('.')
      .reduce((acc, curr) => {
        if(curr === "0") return acc += " ";
        acc += multitap[curr[0]][curr.length-1]
        return acc;
      }, "");
    setMessage(decodedMessage);
  };


  return (
    <div>
      <textarea value={message} onChange={handleChange} />
      <button onClick={handleEncode}>Encode</button>
      <button onClick={handleDecode}>Decode</button>
      <div className="code">Encoded: {encoded}</div>
    </div>
  );
};

export default Multitap;
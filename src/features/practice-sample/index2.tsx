import React, { useState } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleDoubleIncrement = () => {
    // 2回カウントアップさせたい！
    // 更新用関数の書き方に変更する必要がある n=>n+1
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleDoubleIncrement}>+2 したいボタン</button>
    </div>
  );
};

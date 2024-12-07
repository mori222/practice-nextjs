'use client'

import { useCallback, useEffect, useState } from 'react';
import Footer from "../components/footer";
import Header from "../components/header";
import InteractiveButton from '../components/button';
import Main from "../components/main";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  
  const handleClick = useCallback(
    () => {
      if (count < 10) {
        setCount((count) => count + 1);
      }
    },
    [count]
  );

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';

    return () => {
      document.body.style.backgroundColor = '';
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) {
      alert('10文字以上入力しないでください');
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  return (
    <div className="grid items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <InteractiveButton onClick={handleClick}>
        ここをクリック！
      </InteractiveButton>
      <button onClick={handleDisplay}>
        {isShow ? '非表示' : '表示'}
      </button>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange}
      />
      <Main page="index"/>
      <Footer />
    </div>
  );
}

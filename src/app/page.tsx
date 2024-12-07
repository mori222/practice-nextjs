'use client'

import { useCallback, useEffect, useState } from 'react';
import Footer from "../components/footer";
import Header from "../components/header";
import InteractiveButton from '../components/button';
import Main from "../components/main";

export default function Home() {
  const [count, setCount] = useState(1);
  
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

  return (
    <div className="grid grid-rows-[100px_50px_50px_1fr_100px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <h1>{count}</h1>
      <InteractiveButton onClick={handleClick}>
        ここをクリック！
      </InteractiveButton>
      <Main page="index"/>
      <Footer />
    </div>
  );
}

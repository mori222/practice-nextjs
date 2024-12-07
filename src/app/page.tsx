'use client'

import { useEffect } from 'react';
import Footer from "../components/footer";
import Header from "../components/header";
import InteractiveButton from '../components/button';
import Main from "../components/main";

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';

    return () => {
      document.body.style.backgroundColor = '';
    }
  }, [])

  return (
    <div className="grid grid-rows-[100px_80px_1fr_100px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <InteractiveButton onClick={() => alert('ボタンが押されました！')}>
        ここをクリック！
      </InteractiveButton>
      <Main page="index"/>
      <Footer />
    </div>
  );
}

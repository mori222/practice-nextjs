'use client'

import Footer from "../../components/footer";
import Main from "../../components/main";
import Header from "../../components/header";
import InteractiveButton from '../../components/button';
import { useCounter } from '../../hooks/useCounter';
import { useInputArray } from '../../hooks/useInputArray';
import { useBgColor } from '../../hooks/useBgColor';

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgColor();

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
      <button onClick = {handleAdd}>追加</button>
      <ul>
        {array.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Main page="about"/>
      <Footer />
    </div>
  );
}

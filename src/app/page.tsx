'use client'

import Footer from "../components/footer";
import Header from "../components/header";
import InteractiveButton from '../components/button';
import Main from "../components/main";
import { useAppState } from '../providers/stateProvider';

export default function Home() {
  const { counterState, inputArrayState } = useAppState();
  const { count, isShow, handleClick, handleDisplay } = counterState;
  const { text, array, handleChange, handleAdd } = inputArrayState;

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
        {array.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Main page="index"/>
      <Footer />
    </div>
  );
}

import { useCallback, useState } from 'react';

export const useInputArray = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState<string[]>([]);
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > 10) {
        alert('10文字以上入力しないでください');
        return;
      }
      setText(e.target.value.trim());
    }, []);
  
    const handleAdd = useCallback(() => {
      setArray((prevArray) => {
        if (prevArray.some((item) => item === text)) {
          alert('同じ文字列は追加できません');
          return prevArray;
        }
        return [...prevArray, text];
      });
    }, [text]);
    return { text, array, handleChange, handleAdd };
  };
'use client'

import { useEffect } from 'react';

export const useBgColor = () => {
    useEffect(() => {
      document.body.style.backgroundColor = 'lightblue';
  
      return () => {
        document.body.style.backgroundColor = '';
      }
    }, []);
};
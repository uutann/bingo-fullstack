"use client"
import List from '@/components/List.'

import React, { useState, useEffect } from 'react';

export default function Home() {
  const initialList: number[] = [];
  const [numberList, setNumberList] = useState<number[]>(initialList);
  const [Number, setNumber] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);

  const bingo = () => {
    const rand = Math.trunc(Math.random() * 100);
    setNumber(rand);
    setNumberList([...numberList, rand]);
    // ガチャアニメーションクラスを付与
    setAnimate(true);
  };

  // アニメーションが終わったらクラスを外しておく(2.5s後)
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <div className='body'>
      <div className="mainWrapper">
        <h1 className={animate ? 'gachaAnimation' : ''}>{Number}</h1>
        <button onClick={() => bingo()}>START</button>
      </div>
      <div className="listWrapper">
        <List numbers={numberList} />
      </div>
    </div>
  )
}
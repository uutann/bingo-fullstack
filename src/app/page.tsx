'use client'
import List from '@/components/List.'

import React, { useState } from 'react'

export default function Home() {
  const initialList: number[] = []
  const [numberList, setNumberList] = useState<number[]>(initialList)
  const [Number, setNumber] = useState<number>(0)
  const bingo = () => {
    const rand = Math.trunc(Math.random() * 100)
    setNumber(rand)
    /*alert('クリック！')*/
    console.log(numberList)
    console.log(typeof numberList)
    setNumberList([...numberList, rand])
  }

  return (
    <div className='body'>
      <div className="mainWrapper">
        <h1>{Number}</h1>
        <button onClick={() => bingo()}>START</button>
      </div>
      <div className="listWrapper">
        <List numbers={numberList} />
      </div>
    </div>
  )
}

import React, { useState, useEffect } from "react"
import Typing from "react-typing-animation"

export const TypingLoop = () => {
  const initArray = new Array(4); 
  initArray.fill(false, 1)
  initArray[0] = true;
  let interval = undefined;

  const [showArray, setReset] = useState(initArray);

  const textArray = [
    "Learn how to use defi",
    "Earn high interest",
    "Ride the crypto wave",
  ]

  const HandleFinishedTyping = index => {

        setReset(previousArray => {
          const newArray = [ ...previousArray]
          newArray[index] = false

          if (newArray.length > index + 1) {
            newArray[index + 1] = true
          } else {
            newArray[0] = true
          }

          return newArray
        }
    )
  }

  return (
    <>
      {showArray.map(
        (item, index) =>
          item ? (
            <Typing speed={20} onFinishedTyping={() => HandleFinishedTyping(index)}>
              <span className="large-text">{textArray[index]}</span>

              <Typing.Backspace count={60} delay={2000} />
            </Typing>
          ) : ''
      )}
    </>
  )
}
  
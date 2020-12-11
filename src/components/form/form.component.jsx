import React, { useState, useEffect, useRef } from 'react'

import CustomButton from '../button/button.component'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Form = (props) => {
  // this will set the previous value of todo when editing in the form
  const editValue = props.edit ? props.edit.value : ''
  const [input, setInput] = useState(editValue)

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: Date.now(), // just a quick way to generate random id :)
      title: input
    })

    setInput('')
  }

  const toggleCloseEdit = e => {
    e.preventDefault()

    props.onSubmit({
      id: '',
      title: ''
    })

    setInput('')
  }

  return (
    <form className="flex justify-center rounded py-4 px-4 m-5 bg-blue-400 relative" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className="px-6 py-3 rounded-tl-md rounded-bl-md"
        name="form"
        type="text"
        placeholder="What is your focus today"
        value={input}
        ref={inputRef}
      />
      <CustomButton className="rounded-tr-md rounded-br-md py-3 px-4 bg-green-100 font-semibold">
        {props.edit ? 'UPDATE' : 'ADD'}
      </CustomButton>
      { props.edit ? <FontAwesomeIcon onClick={toggleCloseEdit} className="absolute top-1 right-1  ml-2" icon={faTimesCircle} /> : null}
    </form>
  )
}

export default Form
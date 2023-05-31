import React, { useState } from 'react'

export function Form({ addStudent }) {
  const [info, setInfo] = useState({ nombre: '', matricula: '' })

  const [error, setError] = useState(false)

  const handleInputChange = e => {
    const { name, value } = e.target
    setInfo(setInfo => ({ ...setInfo, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const isNameValid = /^[\S]{3,}$/.test(info.nombre)
    const isMatriculaValid = info.matricula.length > 5

    setError(!isNameValid || !isMatriculaValid)

    if (isNameValid && isMatriculaValid) {
      setError(false)
      addStudent(info)
      setInfo({ nombre: '', matricula: '' })
    }
  }

  return (
    <div className='flex flex-col items-center text-left'>
      <form
        className='flex flex-col w-[470px] rounded-xl border border-gray-500 p-7'
        onSubmit={handleSubmit}
      >
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium  dark:text-white'>
            Nombre
          </label>
          <input
            className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='text'
            name='nombre'
            placeholder='Nombre'
            value={info.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium  dark:text-white'>
            Matrícula
          </label>
          <input
            className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='text'
            name='matricula'
            placeholder='Matrícula'
            value={info.matricula}
            onChange={handleInputChange}
          />
        </div>

        <button
          type='submit'
          className='text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2'
        >
          Agregar 🧑
        </button>
      </form>
      {error && (
        <p className='text-red-500 pt-4'>
          Por favor chequea que la información sea correcta
        </p>
      )}
    </div>
  )
}

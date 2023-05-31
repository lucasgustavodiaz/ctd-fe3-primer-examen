import { useState } from 'react'
import './App.css'
import { Cards } from './components/Cards'
import { Form } from './components/Form'

let autoid = 0

export function App() {
  const [students, setStudents] = useState([])

  const addStudent = info => {
    setStudents([...students, { info, id: autoid++ }])
  }

  const deleteStudent = id => {
    setStudents(students.filter(student => student.id !== id))
  }

  return (
    <>
      <h1 className='mb-4'>Carga de estudiantes</h1>
      <Form addStudent={addStudent} />
      <Cards students={students} deleteStudent={deleteStudent} />
    </>
  )
}

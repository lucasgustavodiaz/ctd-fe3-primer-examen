export function Cards({ students, deleteStudent }) {
  return (
    <div className='flex flex-wrap justify-center mt-3'>
      {students.map(({ id, info }) => (
        <div className='rounded-xl border border-gray-500 m-4 p-4' key={id}>
          <p>ID: {id}</p>
          <p>Nombre: {info.nombre} </p>
          <p>Matrícula: {info.matricula}</p>
          <button
            className='mt-2'
            onClick={() => {
              deleteStudent(id)
            }}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  )
}

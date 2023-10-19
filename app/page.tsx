import { prisma } from '@/db'
import Image from 'next/image'
import Link from 'next/link'
import TodoItem from '@/components/todoItem'

export default async function Home() {



 const todos = await prisma.todo.findMany()

async function toggleTodo (id:string, complete:boolean) {
  "use server"

  await prisma.todo.update({where: {id}, data: {complete}})

}

  return (
    <>
    <header className='text-3xl flex justify-between mb-4'>
      Todos
      <Link className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none' href="/new">new</Link>
    
    </header>
    <ul className='pl-4'>
      {todos.map(todo => (
        <TodoItem key ={todo.id} {...todo} toggleTodo={toggleTodo} />
            ))}
    </ul>
    </>
  )
}

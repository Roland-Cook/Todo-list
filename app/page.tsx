import { prisma } from '@/db'
import Image from 'next/image'
import Link from 'next/link'


export default async function Home() {


  // await prisma.todo.create({data: {title:"test", complete:false}})

 const todos = await prisma.todo.findMany()



  return (
    <>
    <header className='text-3xl flex justify-between mb-4'>
      Todos
      <Link className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none' href="/new">new</Link>
    
    </header>
    <ul className='pl-4'>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
    </>
  )
}
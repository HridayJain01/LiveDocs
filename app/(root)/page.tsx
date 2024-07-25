import React from 'react'
import Header from '@/components/Header'
import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
const Home = () => async()=> {
  const clerkUser= await currentUser();
  if(!clerkUser) redirect('/sign-in');
  const documents=[];
  return (
    <div>
      <main className="home-container">
        <Header className='sticky left-0 top-0'>
          <div className='flex items-center gap-2 lg:gap-4'>
            Notification
            <SignedIn>
              <UserButton />
            </SignedIn>

          </div>
        </Header>
        {documents.length>0?(
          <div>

          </div>
        ):(
          <div className="document-list-empty">
            <Image 
                src="/images/empty.svg" 
                alt="Document"
                width={40}
                height={40}
                className='mx-auto'  
              />
              
          </div>
        )}
      </main>
    </div>
  )
}

export default Home;
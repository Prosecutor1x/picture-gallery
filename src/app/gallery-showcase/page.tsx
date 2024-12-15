import Image from 'next/image'
import Header from '@/components/gallery-showcase/Header'
import PhotoGrid from '@/components/gallery-showcase/PhotoGrid'

export default async function Home() {
  


  return (
    <main className="min-h-screen bg-gray-800">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
        </div>
        <PhotoGrid />
      </div>
    </main>
  )
}


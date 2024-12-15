'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import LightboxModal from './LightBoxModal'
import { getPhotos } from '@/data/photos'

type Photo = {
  id: number
  src: string
  alt?: string
}

export default function PhotoGrid() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(null)

  useEffect(() => {
    const fetchPhotos = async () => {
      const fetchedPhotos = await getPhotos()
      setPhotos(fetchedPhotos)
    }
    fetchPhotos()
  }, [])

  const handlePhotoClick = (index: number) => {
    setCurrentPhotoIndex(index)
  }

  const handleCloseModal = () => {
    setCurrentPhotoIndex(null)
  }

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (currentPhotoIndex === null) return

    if (direction === 'prev' && currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1)
    } else if (direction === 'next' && currentPhotoIndex < photos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePhotoClick(index)}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={photo.src}
              alt={photo.alt || ''}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
      {currentPhotoIndex !== null && (
        <LightboxModal
          photos={photos}
          currentPhotoIndex={currentPhotoIndex}
          onClose={handleCloseModal}
          onNavigate={handleNavigate}
        />
      )}
    </>
  )
}


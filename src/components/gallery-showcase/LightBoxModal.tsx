'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

type Photo = {
  id: number
  src: string
  alt?: string
}

type LightboxModalProps = {
  photos: Photo[]
  currentPhotoIndex: number
  onClose: () => void
  onNavigate: (direction: 'prev' | 'next') => void
}

export default function LightboxModal({ photos, currentPhotoIndex, onClose, onNavigate }: LightboxModalProps) {
  const currentPhoto = photos[currentPhotoIndex]

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      } else if (event.key === 'ArrowLeft') {
        onNavigate('prev')
      } else if (event.key === 'ArrowRight') {
        onNavigate('next')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, onNavigate])

  return (
    <AnimatePresence>
      {currentPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative"
            onClick={(e:any) => e.stopPropagation()}
          >
            <img
              src={currentPhoto.src}
              alt={currentPhoto.alt || ''}
              width={800}
              height={600}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            {currentPhotoIndex > 0 && (
              <button
                onClick={() => onNavigate('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            {currentPhotoIndex < photos.length - 1 && (
              <button
                onClick={() => onNavigate('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


'use client';

import React, { useState } from 'react';
import { ArrowLeft, PlusCircle } from 'lucide-react';
import AutocompleteTextbox from '@/components/ui/auto-complete';
import { useGallery } from '@/hooks/useGalleryHook';
import { useRouter } from 'next/navigation';


const MainAddImage: React.FC = () => {
  const { addImage } = useGallery();
  const router = useRouter()

  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [member, setMember] = useState('');

  const options = [
    { label: 'RJ', value: 'rj' },
    { label: 'Drason Smith', value: 'drason-smith' },
  ];

  const handleAddImage = async () => {
    if (!link || !member) {
      alert('Link and Member fields are required.');
      return;
    }

    try {
      await addImage({ link, member, title });
      setLink('');
      setTitle('');
      setMember('');
    } catch (error) {
      console.error('Error adding image:', error);
    }
  };

  return (
    <div className="p-4 border-2 border-white rounded-xl bg-gray-800 ">
      <p className="text-lg font-semibold text-center mb-4">Add Image Here</p>

      <div className="flex flex-col gap-4">
        {/* Link Input */}
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Image Link"
          className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />

        {/* Title Input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Image Title (optional)"
          className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />

        {/* Member Autocomplete */}
        <AutocompleteTextbox
          options={options}
          placeholder="Select or type a member"
          onChange={(value) => setMember(value)}
          className="w-full"
        />

        {/* Add Button */}
        <div className="flex justify-center items-center mt-4 gap-2 ">
          <button
            onClick={handleAddImage}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <PlusCircle />
            <span>Add Image</span>
          </button>
          <button
            onClick={()=>router.push('/')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <ArrowLeft/>
            <span>Back</span>
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default MainAddImage;

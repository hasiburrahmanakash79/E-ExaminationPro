import React, { useRef, useState, useContext } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider'
import { CircleStencil, Cropper } from 'react-advanced-cropper'
import 'react-advanced-cropper/dist/style.css'

const UpdateProfilePicture = ({ onImageCrop }) => {
  const inputRef = useRef(null)
  const [image, setImage] = useState(null)
  const { user, loading } = useContext(AuthContext)

  const handleClick = () => {
    inputRef.current.click()
  }

  const handleChange = e => {
    const file = e.target.files[0]
    //console.log("EVENT", e);
    setImage(file)
  }

  const onChange = cropper => {
    //console.log(cropper.getCoordinates(), cropper.getCanvas());
    onImageCrop(cropper.getCroppedImageBlob())
  }

  return (
    <div className='max-w-lg mx-auto'>
      <div>
        {image ? (
          <div>
            <Cropper
              src={URL.createObjectURL(image)}
              onChange={onChange}
              stencilComponent={CircleStencil}
              className={'cropper'}
            />
          </div>
        ) : (
          <img src={user.photoURL} alt='' />
        )}
        <input
          type='file'
          ref={inputRef}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
      </div>
      <div className='flex justify-around'>
        <button
          className='p-2 mt-5 text-xl rounded-md btn-primary '
          onClick={handleClick}
        >
          Change Photo
        </button>
        <button className='p-2 mt-5 text-xl rounded-md btn-primary '>
          Upload Photo
        </button>
      </div>
    </div>
  )
}

export default UpdateProfilePicture

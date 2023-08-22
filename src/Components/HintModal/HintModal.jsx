/* eslint-disable react/prop-types */

const HintModal = ({ question, hint, isModalOpen, onClose }) => {
  return (
    <>
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='modal modal-open'>
            <div className='modal-box'>
              <h2 className='mb-2 text-lg font-semibold'>Hint</h2>
              <p className='mb-4'>{hint}</p>
              <button className='btn' onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HintModal

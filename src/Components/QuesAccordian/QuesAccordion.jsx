/* eslint-disable react/prop-types */
import './QuesAccordion.css'

const QuesAccordion = ({ sq }) => {
  console.log(sq)
  return (
    <div className='container body md:mx-auto'>
      <div className='accordion'>
        <li>
          <input type='radio' name='accordion' id='first'></input>
          <label htmlFor='first'>{sq?.question}</label>
          <div className='content'>
            <p>{sq?.ans}</p>
          </div>
        </li>
      </div>
    </div>
  )
}

export default QuesAccordion

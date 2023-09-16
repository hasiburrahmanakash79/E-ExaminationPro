import { useEffect, useState } from 'react'
import useQuotes from '../../Hooks/useQuotes'

const RandomQuotes = () => {
  const [quoteIndex, setQuoteIndex] = useState(0)
  // getting the quote array from server
  const [quotes, loading, refetch] = useQuotes()
  //   making interval for each quotes to stay for few seconds then move to next index in the array
  useEffect(() => {
    // making sure to refetch new batch of quotes after the first array is finished showing
    if (quoteIndex === quotes.length - 1) {
      refetch()
      setQuoteIndex(0)
    }

    const interval = setInterval(() => {
      setQuoteIndex(prevIndex => prevIndex + 1)
    }, 10000)
    return () => clearInterval(interval)
    // the reason is using three thing as the dependency is for one is to reset the interval for new quote, second is because of the third of the refetch
  }, [quoteIndex, quotes, refetch])

  //making one as current quote not running map because we are just showing one quote at a time
  const currentQuote = quotes[quoteIndex] || {}
  //console.log(currentQuote)

  if (loading) {
    return null
  }

  return (
    <div className='quote-display'>
      <div className='quote-content'>
        <p className='text-white quote-text'>{currentQuote.q}</p>
        <p className='text-white quote-author'> - {currentQuote.a}</p>
      </div>
    </div>
  )
}

export default RandomQuotes

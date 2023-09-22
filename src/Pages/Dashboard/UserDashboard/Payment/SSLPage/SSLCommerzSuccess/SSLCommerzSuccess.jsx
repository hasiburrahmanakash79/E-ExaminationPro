import { useParams } from 'react-router-dom'
import Lottie from "lottie-react";
import successLottie from "../../../../../../assets/animationFile/success.json"
import { useSSLCommerz } from '../../../../../../Hooks/useSSLCommerz/useSSLCommerz';
const SSLCommerzSuccess = () => {
  const { tranId } = useParams()
  const [isSuccess, refetch] = useSSLCommerz();
  console.log("serial number 11 >>>", isSuccess);
  // const paymentData = isSuccess.filter(success => success?.transitionId == tranId)
  // console.log(paymentData);

  return (
    <div className="md:w-1/2 mx-auto text-center py-12">
      <h2 className='md:text-base md:block hidden'>
        Your Payment Success: <span className='text-orange-500'>{tranId}</span>{' '}
      </h2>
      <h2 className='md:text-base md:hidden block'>
        Your Payment Success: <br /><span className='text-orange-500'>{tranId}</span>{' '}
      </h2>
      <Lottie
        animationData={successLottie}
        loop={true} className="md:w-1/2 mx-auto md:h-72" />
    </div>
  )
}

export default SSLCommerzSuccess

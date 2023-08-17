
const Faq = () => {
  return (

    <div className=" py-5 md:py-20 px-5 lg:px-52 ">
      <h2 className="md:ms-52 text-xl md:text-3xl">Frequently Asked Questions</h2>
      <div className="collapse md:w-1/2 my-5 md:mx-auto collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          What is E-examPro?
        </div>
        <div className="collapse-content">
          <p>Welcome to E-examPro, the cutting-edge online platform designed to revolutionize the way students take exams. With a commitment to excellence and innovation, E-examPro provides a seamless and efficient solution for conducting exams in a digital landscape. Say goodbye to traditional exam paper stress and hello to a new era of convenient, accessible, and secure exam-taking.</p>
        </div>
      </div>
      <div className="collapse md:w-1/2 my-5 md:mx-auto  collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Why Students choosing E-examPro platform?
        </div>
        <div className="collapse-content">
          <p>E-examPro adapts to your learning level. The platforms intelligent algorithms present questions that match your competency, giving you a fair and accurate assessment that reflects your true understanding of the subject matter.</p>
        </div>
      </div>
      <div className="collapse md:w-1/2 my-5 md:mx-auto  collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Is E-examPro easy for cheating?
        </div>
        <div className="collapse-content">
          <p>The platform is equipped with anti-cheating measures, such as webcam monitoring and browser lockdown, ensuring that each students performance is genuine and reflective of their own efforts.</p>
        </div>
      </div>
      <div className="collapse md:w-1/2 my-5 md:mx-auto  collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How to participate in E-examPro platform?
        </div>
        <div className="collapse-content">
          <p>New users can quickly register for the platform by using their Google accounts. This simplifies the registration process, reducing friction and encouraging more students to participate in exams.</p>
        </div>
      </div>
    </div>

  )
};

export default Faq;
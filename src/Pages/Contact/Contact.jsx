import { HiRocketLaunch } from "react-icons/hi2";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";
import contact from "../../assets/contact.png";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import successLottie from "../../assets/animationFile/contact1.json";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    setMsg("");
    emailjs
      .sendForm(
        "service_sccjrni",
        "template_qrbc4xn",
        form.current,
        "tYJtdAx20n3Bxru2l"
      )
      .then(
        (result) => {
          if (result.text) {
            setMsg("Message Sent");
            toast.success("Message Sent.", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "colored",
            });
          }
        },
        (error) => {
          setMsg("Message Limit is Over");
        }
      );
  };

  return (
    <div className="min-h-[50vh] py-12 container mx-auto p-5">
      <Helmet>
        <title>Contact Us | E-ExamPro</title>
      </Helmet>
      <SectionTitle title={"Contact"}></SectionTitle>
      <div className="md:grid grid-cols-2 gap-10 items-center pt-3 space-y-5">
        <div className="w-full md:gap-10">
          <form
            data-aos="fade-down"
            data-aos-duration="1000"
            ref={form}
            onSubmit={sendEmail}
            className="pb-5 border-2 shadow-md  rounded-lg md:pt-20 card-body"
          >
            <div className="">
              <div className="form-control">
                <label className="label">
                  <p className="">Name</p>
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="outline outline-1 input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="">Email</p>
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="outline outline-1 input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="">Message</p>
                </label>
                <textarea
                  required
                  name="message"
                  className="outline outline-1 textarea"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="mt-6">
                <button className=" btn hover:-translate-y-1 btn-primary">
                  <span>Send Message</span> <HiRocketLaunch></HiRocketLaunch>
                </button>
                <p className="z-20 mt-3 ">{msg}</p>
              </div>
              <ToastContainer></ToastContainer>
            </div>
          </form>
        </div>
        <div className="md:w-3/4">
          <div className="mb-10">
            <h1 className="border-l-8 border-teal-600 text-3xl font-semibold ps-5 mb-3">
              Contact Our <br /> Instructors
            </h1>
            <p>
              If you have any specific questions or need to reach out for
              support, you can try sending an email.
            </p>
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl" />
              <p>
                Dhanmondi-32, Dhaka <br /> Bangladesh
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-3xl" />
              <p>
                +880 1234567890 <br /> +8802364786732
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl" />
              <p>
                Dhanmondi-32, Dhaka <br /> Bangladesh
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl" />
              <p>
                Dhanmondi-32, Dhaka <br /> Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

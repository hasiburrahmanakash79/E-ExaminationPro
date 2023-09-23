import { HiRocketLaunch } from "react-icons/hi2";
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
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
    <div className="min-h-[50vh] py-12 container mx-auto">
      <Helmet>
        <title>Contact Us | E-ExamPro</title>
      </Helmet>
      <SectionTitle title={"Contact"}></SectionTitle>
      <div className="grid grid-cols-2 items-center pt-3">
        <div>
          <div>
            <h1 className="border-l-8 border-teal-600 text-3xl font-semibold ps-10">
              Contact Our <br /> Instructors
            </h1>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Contact;

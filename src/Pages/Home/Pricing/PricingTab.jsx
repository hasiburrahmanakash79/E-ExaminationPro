import { useContext, useState } from "react";
import { Tab } from "@headlessui/react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import usePrice from '../../../Hooks/usePrice/usePrice'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const PricingTab = () => {
  const [pricePackage] = usePrice()
  const { user } = useContext(AuthContext)
  const [selectedTab, setSelectedTab] = useState(0);
  const defaultTab = pricePackage.findIndex(
    (price) => price.name === "Premium"
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This smoothens the scroll animation
    })
  }
  
  return (
    <div className=" min-w-[85vw] md:hidden">
      <Tab.Group defaultIndex={defaultTab}>
        <Tab.List className="flex p-1 space-x-1 min-w-9/12 max-w-96 rounded-xl">
          {pricePackage.map((price) => (
            <Tab
              key={price.id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 ",
                  "focus:outline-none border focus:ring-2",
                  selected
                    ? "shadow-md border-2"
                    : " "
                )
              }
              onClick={() => setSelectedTab(price.id)}
            >
              {price.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {pricePackage.map((price) => (
            <Tab.Panel
              key={price.id}
              className={classNames(
                "rounded-xl  p-3",
                "border rounded focus:outline-none focus:ring-2"
              )}
            >
              <div className="flex flex-col px-4 divide-y divide-blue-400 h-fit">
                <div>
                  <p className="my-2 text-xl font-bold ">
                    {price.name} Package
                  </p>
                  <h3 className="py-4 text-xl aext-accent">
                    ${price.packageAmount}
                  </h3>
                </div>
                {price.features.map((feature, index) => (
                  <p
                    key={index}
                    className="inline-flex items-center justify-center py-4 uppercase text-start"
                  >
                    {feature.name}
                    {feature.available ? (
                      <FaCircleCheck className="ml-2 text-center aext-accent" />
                    ) : (
                      <MdCancel className="ml-2 text-lg text-center aext-red-500" />
                    )}
                  </p>
                ))}
              </div>
              <div className="py-4 ">
                {price.name === "Free" ? (
                  <Link
                    onClick={user?.email && scrollToTop}
                    to={!user?.email && "/login"}
                    className="btn-primary btn hover:outline-blue-400 hover:outline translate"
                  >
                    {" "}
                    Start by Signing Up!
                  </Link>
                ) : (
                  <Link
                    to={`/paymentOption/${price?._id}`}
                    className={` btn ${
                      price.name === "Premium" ? "btn-info" : "btn-info"
                    } hover:outline-blue-400 hover:outline translate `}
                  >
                    {" "}
                    Start by Signing Up!
                  </Link>
                )}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default PricingTab;

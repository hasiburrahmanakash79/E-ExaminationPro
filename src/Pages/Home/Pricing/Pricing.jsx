import Loading from "../../../Components/Loading/Loading";
import usePrice from "../../../Hooks/usePrice/usePrice";
import PricingCard from "./PricingCard";
import PricingTab from "./PricingTab";

const Pricing = () => {
  //   const pricePackage=[
  //     {
  //         "name": "Free",
  //         "id": 1,
  //         "packageAmount": 0,
  //         "features": [
  //             { "name": "Quiz", "available": true },
  //             { "name": "fill In The Blanks", "available": true },
  //             { "name": "short question", "available": true },
  //             { "name": "long question", "available": false },
  //             { "name": "imageQuestions", "available": true }
  //         ]
  //     },
  //     {
  //         "name": "Premium",
  //         "id": 2,
  //         "packageAmount": 25,
  //         "features": [
  //             { "name": "Everything from Free", "available": true },
  //             { "name": "long question", "available": true },
  //             { "name": "online Exam Room", "available": true },
  //             { "name": "instructor Access", "available": false },
  //             { "name": "blog writing", "available": true }
  //         ]
  //     },
  //     {
  //         "name": "Ultimate",
  //         "id": 3,
  //         "packageAmount": 35,
  //         "features": [
  //             { "name": "Everything from premium", "available": true },
  //             { "name": "Watch & Quiz Digest", "available": true },
  //             { "name": "Watch & write Summary", "available": true },
  //             { "name": "instant access to ExamRoom", "available": true },
  //             { "name": "instructor Access", "available": true },
  //             { "name": "blog writing", "available": true }
  //         ]
  //     }
  // ]

  const [pricePackage, loading] = usePrice();

  if (loading) {
    return <Loading/>;
  }

  return (
    <section className="w-full min-h-screen mx-auto space-y-3 text-center ">
      <h5 className="my-4 text-xl text-orange-400">Exam Facility Packages</h5>
      <h1 className="py-4 text-2xl font-bold">
        Meet our pricing plan that suit you
      </h1>
      <div className="grid grid-cols-1 gap-1 pt-3 mx-auto md:grid-cols-3 w-fit">
        {pricePackage?.map((price) => (
          <PricingCard price={price} key={price?.id} />
        ))}
        <PricingTab pricePackage={pricePackage} />
      </div>
    </section>
  );
};

export default Pricing;

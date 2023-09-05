import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";


const StudentAnalytics = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl">Student Analytics</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center text-xl">Subject</th>
              <th className="text-center text-xl">Exam Given</th>
              <th className="text-center text-xl">View Result</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            <tr>
              <td className="text-center text-lg font-medium">English</td>
              <td className="text-center text-lg font-medium">14-09-2023</td>
              <td className="text-center">
                <Link
                  to="/result"
                  className="hover:text-accent"
                >
                  <button>
                    <FaArrowCircleRight size={30} />
                  </button>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="text-center text-lg font-medium">Chemistry</td>
              <td className="text-center text-lg font-medium">14-09-2023</td>
              <td className="text-center">
                <Link
                  to="/result"
                  className="hover:text-accent"
                >
                  <button>
                    <FaArrowCircleRight size={30} />
                  </button>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="text-center text-lg font-medium">Physics</td>
              <td className="text-center text-lg font-medium">14-09-2023</td>
              <td className="text-center">
                <Link
                  to="/result"
                  className="hover:text-accent"
                >
                  <button>
                    <FaArrowCircleRight size={30} />
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentAnalytics;

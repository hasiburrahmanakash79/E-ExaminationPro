import ContentLoader from "react-content-loader";
import { Link } from "react-router-dom";

const LoadingAdmin = () => {
    return (
        <div className='bg-gradient-to-tr from-[#0B0728] to-[#491A66] '>
                <ContentLoader
                    height={640}
                    width={1260}
                    primaryColor="#d9d9d9"
                    secondaryColor="#ecebeb"
                >
                    <rect x="280" y="30" rx="3" ry="3" width="880" height="40" />
                    <rect x="50" y="95" rx="4" ry="4" width="180" height="80" />
                    <rect x="280" y="100" rx="3" ry="3" width="160" height="60" />
                    <rect x="460" y="100" rx="3" ry="3" width="160" height="60" />
                    <rect x="640" y="100" rx="3" ry="3" width="160" height="60" />
                    <rect x="820" y="100" rx="3" ry="3" width="160" height="60" />
                    <rect x="1000" y="100" rx="3" ry="3" width="160" height="60" />
                    <rect x="50" y="220" rx="3" ry="3" width="180" height="24" />
                    <rect x="50" y="255" rx="3" ry="3" width="180" height="24" />
                    <rect x="50" y="290" rx="3" ry="3" width="180" height="24" />
                    <rect x="50" y="323" rx="3" ry="3" width="180" height="24" />
                    {/* middler codes */}
                    <rect x="50" y="400" rx="3" ry="3" width="180" height="24" />
                    <rect x="50" y="435" rx="3" ry="3" width="180" height="24" />

                    {/* textarea> */}
                    <rect x="280" y="170" rx="3" ry="3" width="880" height="440" />
                    <circle cx="60" cy="530" r="28" />
                    <rect x="100" y="510" rx="3" ry="3" width="130" height="16" />
                    <rect x="100" y="530" rx="3" ry="3" width="105" height="10" />
                </ContentLoader>

                <Link to="/lflgkfpdo" className="py-2 mb-3 ml-24 text-black bg-orange-500 px-7 rounded-2xl">Error</Link>
        </div>
    );
};

export default LoadingAdmin;
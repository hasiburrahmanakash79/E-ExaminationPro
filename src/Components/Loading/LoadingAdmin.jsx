import ContentLoader from "react-content-loader";
const LoadingAdmin = () => {
    return (
        <div className=''>
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
        </div>
    );
};

export default LoadingAdmin;
import ContentLoader from "react-content-loader";

const LoadingDash = () => {
    return (
        <div className='bg-gradient-to-tr from-[#0B0728] to-[#491A66] '>
            <ContentLoader
                height={640}
                width={1260}
                primaryColor="#d9d9d9"
                secondaryColor="#ecebeb"
            >
                <rect x="50" y="96" rx="4" ry="4" width="180" height="55" />
                <rect x="280" y="30" rx="3" ry="3" width="880" height="40" />
                <rect x="50" y="90" rx="3" ry="3" width="180" height="20" />
                <rect x="50" y="200" rx="3" ry="3" width="180" height="20" />
                <rect x="50" y="230" rx="3" ry="3" width="180" height="20" />
                <rect x="50" y="260" rx="3" ry="3" width="180" height="20" />
                <rect x="50" y="290" rx="3" ry="3" width="180" height="20" />
                {/* middler codes */}
                <rect x="50" y="360" rx="3" ry="3" width="180" height="24" />
                <rect x="50" y="395" rx="3" ry="3" width="180" height="24" />

                {/* textarea> */}
                <rect x="280" y="90" rx="3" ry="3" width="880" height="440" />
                <circle cx="60" cy="490" r="28" />
                <rect x="100" y="475" rx="3" ry="3" width="130" height="16" />
                <rect x="100" y="495" rx="3" ry="3" width="105" height="10" />
            </ContentLoader>
        </div>
    );
};

export default LoadingDash;
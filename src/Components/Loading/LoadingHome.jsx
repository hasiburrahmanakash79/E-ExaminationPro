import ContentLoader from 'react-content-loader'
import Container from '../Container';

const LoadingHome = () => {
    return (
        <div className='bg-gradient-to-tr from-[#0B0728] file:to-[#491A66] '>
            <Container>
                <ContentLoader
                    viewBox="0 0 450 425"
                    backgroundColor="#e2e1ff"
                    foregroundColor="#fff"
                >
                    {/* navBer  */}
                    {/* left site */}
                    <rect x="0" y="4" rx="3" ry="3" width="80" height="15" />
                    <rect x="130" y="8" rx="3" ry="3" width="35" height="7" />
                    <rect x="170" y="8" rx="3" ry="3" width="35" height="7" />
                    <rect x="210" y="8" rx="3" ry="3" width="35" height="7" />
                    <rect x="250" y="8" rx="3" ry="3" width="35" height="7" />
                    <rect x="290" y="8" rx="3" ry="3" width="35" height="7" />
                    {/* right site */}
                    <rect x="355" y="4" rx="6" ry="3" width="70" height="15" />
                    <circle cx="440" cy="12" r="10" />
                    {/* slider line */}
                    <rect x="0" y="26" rx="3" ry="3" width="450" height="120" />
                    {/* middle code  */}
                    <rect x="0" y="150" rx="3" ry="3" width="225" height="50" />
                    <rect x="230" y="150" rx="3" ry="3" width="220" height="50" />
                    <rect x="0" y="204" rx="3" ry="3" width="100" height="28" />
                    <rect x="104" y="204" rx="3" ry="3" width="110" height="28" />
                    <rect x="220" y="204" rx="3" ry="3" width="113" height="28" />
                    <rect x="338" y="204" rx="3" ry="3" width="110" height="28" />
                    <rect x="0" y="234" rx="3" ry="3" width="100" height="28" />
                    <rect x="104" y="234" rx="3" ry="3" width="110" height="28" />
                    <rect x="220" y="234" rx="3" ry="3" width="113" height="28" />
                    <rect x="338" y="234" rx="3" ry="3" width="110" height="28" />
                    <rect x="0" y="266" rx="3" ry="3" width="448" height="40" />
                    <rect x="106" y="310" rx="3" ry="3" width="248" height="50" />
                    <rect x="0" y="364" rx="3" ry="3" width="448" height="60" />
                </ContentLoader>
                {/* <Link to="/loadingDash" className="py-2 mb-3 text-black bg-orange-500 px-7 rounded-2xl">Loading Tow</Link> */}

            </Container>
        </div>
    );
};

export default LoadingHome;
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children } : {children: React.ReactNode}) => {
    return (
        <div className="h-full bg-custom-primary">
            <Navbar />
            <main>
                {children}
            </main>
            {/* {Footer} */}
        </div>
    );
};

export default MarketingLayout;

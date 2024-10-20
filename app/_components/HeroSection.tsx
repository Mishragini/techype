import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="relative flex items-center justify-between h-[600px]">
            {/* Left Content */}
            <div className="relative z-10 ml-32 max-w-2xl">
                <h1 className="text-5xl font-semibold mb-6">
                    Hype Your Ideas<br />
                    With <span className="text-[#8B3DFF]">Techype</span>
                </h1>
                <p className="mb-8 text-gray-700 text-base leading-relaxed max-w-[700px]">
                    As the most trusted AI software developer, we create unique AI solutions, innovative mobile
                    apps, and help you hire top global engineers, solving all your tech problems and bringing
                    your ideas to life.
                </p>
                <button className="bg-[#12141D] text-white py-3 px-6 rounded-full hover:bg-gray-800 transition">
                    Schedule Call
                </button>
            </div>

            {/* Right Image */}
            <div className="absolute top-0 right-0 w-[55%] h-full z-0">
                <Image
                    src="/hero.png"
                    alt="Team collaborating"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90"
                />
                {/* Add gradient overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent"
                    aria-hidden="true"
                />
            </div>
        </section>
    );
};

export default HeroSection;

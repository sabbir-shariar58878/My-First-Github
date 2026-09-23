
import heroImage from "../assets/processor.png";

const Hero = () => {
    return (
        <section className="px-4 sm:px-6">
            <div className="mx-auto flex min-h-[460px] max-w-6xl flex-col items-center justify-center gap-8 py-10 sm:gap-10 md:min-h-[500px] md:flex-row md:gap-16 md:py-0">

                {/* Left */}
                <div className="w-full max-w-[600px] text-center md:text-left">
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                        Build Your Ideal{" "}
                        <span className="brand-gradient">
                            Developer Stack
                        </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-[520px] text-[13px] leading-[1.6] text-[#526075] sm:mt-5 sm:text-[15px] md:mx-0 md:text-[16px]">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex justify-center gap-3 sm:mt-7 md:justify-start md:gap-4">
                        <button className="brand-button rounded-lg px-6 py-3 font-semibold text-white">
                            Explore Technologies
                        </button>

                        <button className="rounded-md border border-[#e2e5ea] bg-white px-6 py-2.5 text-[11px] text-[#4b5563] transition hover:bg-[#f8f9fb] sm:px-8 sm:py-3 sm:text-[13px]">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right */}
                <div className="flex w-full max-w-[400px] items-center justify-center md:max-w-[380px]">
                    <img
                        src={heroImage}
                        alt="Development Stack"
                        className="w-[210px] object-contain sm:w-[260px] md:w-[320px]"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;


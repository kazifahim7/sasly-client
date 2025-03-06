import Image from "next/image";

const HowItWorks = () => {
    return (
        <section className="py-10 bg-gray-100 rounded-4xl sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        How does it work?
                    </h2>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        Buy and sell used items effortlessly. Follow these steps to start using our marketplace.
                    </p>
                </div>

                <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden md:block top-2 md:px-20 lg:px-28 xl:px-44">
                        <Image
                            className="w-full"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                            alt="Process Flow"
                            width={800}
                            height={100}
                        />
                    </div>

                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 1 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                                Sign Up for Free
                            </h3>
                            <p className="mt-4 text-base text-gray-600">
                                Create an account to start listing your used items or browsing products available for purchase.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 2 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                                List or Browse Products
                            </h3>
                            <p className="mt-4 text-base text-gray-600">
                                Easily post your secondhand items for sale or explore available listings from other users.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 3 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                                Connect & Trade Securely
                            </h3>
                            <p className="mt-4 text-base text-gray-600">
                                Communicate with sellers or buyers securely, finalize deals, and complete transactions smoothly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

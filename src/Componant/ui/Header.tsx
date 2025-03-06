import Image from 'next/image';

const SecondHandMarketplace = () => {
    return (
        <div className="">
            <section className="py-10  sm:py-16 lg:py-24">
                <div className="px-4 mx-auto container sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                                Buy & Sell Pre-Owned Items with
                                <span className="relative inline-flex">
                                    <span className="absolute lg:w-[70%] inset-x-0 bottom-0 border-b-[25px] border-[#4ADE80]"></span>
                                    <span className="relative">SecondHand Marketplace</span>
                                </span>
                            </h1>
                            <p className="mt-8 text-base text-black sm:text-xl">
                                A seamless and secure platform for buying and selling second-hand products. Connect with sellers and explore great deals today.
                            </p>
                            <div className="mt-10 sm:flex sm:items-center sm:space-x-8 items-center ">
                                <a href="#" className="inline-flex items-center rounded-3xl justify-center px-10 py-4 text-base font-semibold text-black transition-all duration-200 bg-orange-400 hover:bg-orange-600" role="button">Start exploring</a>
                                <a href="#" className="inline-flex items-center   mt-8 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                                    <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path fill="#F97316" stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Watch video
                                </a>
                            </div>
                        </div>
                        <div>
                            <Image
                                width={500}
                                height={400}
                                className="w-full"
                                src="https://i.ibb.co.com/Vc6j4LZn/17017.jpg"
                                alt="Hero Image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SecondHandMarketplace;

const NumbersTellOurStory = () => {
    return (
        <section className="py-10  sm:py-16 bg-gray-100 rounded-md my-6 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Numbers Tell Our Story
                    </h2>
                    <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                        Our SecondHand Marketplace has grown steadily, connecting buyers and sellers for seamless transactions.
                    </p>
                </div>

                <div className="grid grid-cols-1 border-2 p-4 border-orange-300 rounded-2xl gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                                10K+
                            </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Active Users</p>
                        <p className="text-base mt-0.5 text-gray-500">Buying and selling every day</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                                25K+
                            </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Products Sold</p>
                        <p className="text-base mt-0.5 text-gray-500">Helping users find great deals</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                                95%
                            </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Customer Satisfaction</p>
                        <p className="text-base mt-0.5 text-gray-500">Trusted by thousands of users</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NumbersTellOurStory;

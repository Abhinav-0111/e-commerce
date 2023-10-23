import React, { useContext } from "react";
import ContextApi from "../../context/ContextApi";

function ProductCard() {
    const { mode } = useContext(ContextApi);
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1
                        class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                    >
                        Our Latest Collection
                    </h1>
                    <div class="h-1 w-20 bg-pink-600 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/4  drop-shadow-lg ">
                        <div
                            className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                            style={{
                                backgroundColor:
                                    mode === "dark" ? "rgb(46 49 55)" : "",
                                color: mode === "dark" ? "white" : "",
                            }}
                        >
                            <div className="flex justify-center cursor-pointer">
                                <img
                                    className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out object-cover"
                                    src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg"
                                    alt="blog"
                                />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2
                                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    E-Abhi
                                </h2>
                                <h1
                                    className="title-font text-lg font-medium text-gray-900 mb-3"
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    Iphone 15pro Max
                                </h1>
                                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                <p
                                    className="leading-relaxed mb-3"
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    ₹ 150000
                                </p>
                                <div className=" flex justify-center">
                                    <button
                                        type="button"
                                        className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg ">
                        <div
                            className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                            style={{
                                backgroundColor:
                                    mode === "dark" ? "rgb(46 49 55)" : "",
                                color: mode === "dark" ? "white" : "",
                            }}
                        >
                            <div className="flex justify-center cursor-pointer">
                                <img
                                    className=" object-cover object-center rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                                    src="https://cdn1.smartprix.com/rx-izLSMVlI0-w1200-h1200/zLSMVlI0.jpg"
                                    alt="blog"
                                />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2
                                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    E-Abhi
                                </h2>
                                <h1
                                    className="title-font text-lg font-medium text-gray-900 mb-3"
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    Samsung Galaxy S23 Ultra 5G
                                </h1>
                                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                <p
                                    className="leading-relaxed mb-3"
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    ₹ 118000
                                </p>
                                <div className=" flex justify-center">
                                    <button
                                        type="button"
                                        className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg ">
                        <div
                            className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                            style={{
                                backgroundColor:
                                    mode === "dark" ? "rgb(46 49 55)" : "",
                                color: mode === "dark" ? "white" : "",
                            }}
                        >
                            <div className="flex justify-center cursor-pointer">
                                <img
                                    className=" object-center rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out object-cover"
                                    src="data:image/jpeg;base64,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"
                                    alt="blog"
                                />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2
                                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    E-Abhi
                                </h2>
                                <h1
                                    className="title-font text-lg font-medium text-gray-900 mb-3"
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    Google Pixel 8pro
                                </h1>
                                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                <p
                                    className="leading-relaxed mb-3"
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    ₹ 80000
                                </p>
                                <div className=" flex justify-center">
                                    <button
                                        type="button"
                                        className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg ">
                        <div
                            className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                            style={{
                                backgroundColor:
                                    mode === "dark" ? "rgb(46 49 55)" : "",
                                color: mode === "dark" ? "white" : "",
                            }}
                        >
                            <div className="flex justify-center cursor-pointer">
                                <img
                                    className=" object-cover object-center rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                                    src="data:image/jpeg;base64,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"
                                    alt="blog"
                                />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2
                                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    E-Abhi
                                </h2>
                                <h1
                                    className="title-font text-lg font-medium text-gray-900 mb-3"
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    Galaxy Z Fold4 512GB
                                </h1>
                                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                <p
                                    className="leading-relaxed mb-3"
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    ₹ 139000
                                </p>
                                <div className=" flex justify-center">
                                    <button
                                        type="button"
                                        className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductCard;

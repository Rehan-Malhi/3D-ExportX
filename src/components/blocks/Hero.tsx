import Image from 'next/image';
import JacketViewer from '@/components/sm-blocks/3D-jacket';

const Hero = () => {
    return (
        <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
            <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-shrink-0">
                            <a href="#" title="BakerStreet" className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary">
                                <Image width={100} height={100} className="h-8" src="/immg.jpg" alt="BakerStreet" />
                            </a>
                        </div>
                        <div className="md:hidden">
                            <button type="button" className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                            <a href="#" className="font-sans text-base font-normal transition-all duration-200 rounded text-white"> Courses </a>
                            <a href="#" className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-normal leading-7 transition-all duration-200 border-2 rounded-full text-white border-primary hover:bg-white hover:text-black"> whatsapp </a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="absolute w-full h-screen inset-0">
                <Image className="object-cover" fill src="/image.jpg" alt="" />
            </div>

            <div className="relative px-6 mx-auto flex flex-col items-center justify-evenly lg:flex-row sm:px-8 lg:px-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                    {/* Left Side: Text & Buttons */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">Master the basics of baking</h1>
                        <p className="mt-6 tracking-tighter text-white">
                            <span className="font-sans font-normal text-xl lg:text-5xl">The road to the</span><br />
                            <span className="font-serif italic font-normal text-xl lg:text-5xl">perfect loaf</span>
                        </p>


                        <p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida.
                        </p>
                        <p className="mt-8 font-sans text-xl font-normal text-white">Starting at $9.99/month</p>

                        <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
                            <a href="#" className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-white sm:text-lg text-black hover:bg-opacity-90">
                                Get started
                            </a>
                            <a href="#" className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 bg-transparent border-2 rounded-full sm:leading-8 text-white border-primary hover:bg-white hover:text-black sm:text-lg">
                                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor"><path /></svg>
                                Watch trailer
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 w-[200px] right-0 h-[200px] sm:w-[300px] sm:h-[300px] sm:absolute lg:relative lg:w-[400px] lg:h-[400px]">
                    <JacketViewer />
                </div>
            </div>
            {/* Jacket viewer next to heading */}
        </div>
    );
};

export default Hero;

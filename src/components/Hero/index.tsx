import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="text-left lg:text-left">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Enterprise Software <br />
                  Solutions for Every Business
                </h1>
                <p className="mb-12 text-base leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Since 1998, we{'\''}ve been delivering industry-leading ERP and business management software solutions to organizations across multiple sectors in the Middle East and beyond.
                </p>
                <div className="flex flex-col items-start justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href=""
                    className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Schedule Demo
                  </Link>
                  <Link
                    href=""
                    className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <img src="/images/video/image.png" alt="Hero Image" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-8 mt-8 lg:mt-0">
            <img
              src="/images/video/video.jpg"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <SectionTitle
              title="About Us"
              paragraph="MAS Technologies LLC Headquartered in Dubai, U.A.E., is one of the leading ISO 9001:2015 (QMS) certified software solution providers in the region since 1998."
              center={false}
              width="100%"
            />

            <div className="flex flex-col md:flex-row justify-start items-center space-y-8 md:space-y-0 md:space-x-16 mt-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary">22+</h3>
                <p className="text-lg">Years Industry Expertise</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary">60+</h3>
                <p className="text-lg">Satisfied Customers</p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-lg text-body-color dark:text-body-color-dark">
                We are the preferred end-to-end software solution providers for concrete products manufacturing industry, Ready-mix concrete industry, precast concrete industry, construction industry and FMCG distribution industry.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

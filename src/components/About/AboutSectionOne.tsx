import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  const List = ({ number, text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className=" text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {number}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Why Choose Us?"
                paragraph="The ERP Solutions eMAS ERP suite of software solutions provide custom made, feature packed software modules. Providing effective and critical information to the management at the right time and in the right form is a belief we enforce to all our customers. This enables you to take effective business decisions using our decision support system tools."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px]">
                  <div className="w-full px-3">
                    <List number="1" text="We provide state-of-art software at an affordable price.passages of Lorem Ipsum available" />
                    <List number="2" text="Our design is oriented to handle any future business changes because we constantly update our products and services." />
                    <List number="3" text="We listen patiently to your needs and review your requirements in detail. This enables us to provide you with the best possible solutions." />
                    <List number="4" text="We focus on complete employee-software integration. This approach enables all users to benefit from our simple yet effective user training program." />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

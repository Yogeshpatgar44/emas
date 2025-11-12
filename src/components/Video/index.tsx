"use client";

import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="We are ready to help"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
            mb="80px"
          />
        </div>
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[980px] overflow-hidden rounded-md">
                <div className="relative aspect-77/40 items-center justify-center">
                  <video
                    src="https://mas-technology.com/mas-tech-banner-video.mp4"
                    autoPlay
                    muted
                    loop
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat">
            {/* <div className="absolute bottom-0 left-0 right-0 z-[-1] "> */}
            {/* <img src="/images/video/shape.svg" alt="shape" className="w-full" /> */}
          </div>
        </div>
      </section>
    </>
  );
};

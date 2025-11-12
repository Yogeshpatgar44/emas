import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp flex flex-col h-full" data-wow-delay=".15s">
        <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md mx-auto">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black text-center sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium mb-4 flex-grow">
          {paragraph}
        </p>
        <a href="#" className="text-primary hover:underline text-sm font-medium">
          Read More
        </a>
      </div>
    </div>
  );
};

export default SingleFeature;

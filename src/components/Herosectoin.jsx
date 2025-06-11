
import showcase from "../assets/images/showcase.mp4"

const HeroSection = () => {
  return (
    <div className="relative w-full h-[280px] md:h-[600px] lg:h-[600px] bg-darkbg text-white overflow-hidden">
      <video
        className="absolute inset-0 w-fit h-fit lg:w-full lg:h-full  object-cover  object-center "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={showcase} type="video/mp4" />
      </video>

    </div>
  );
};

export default HeroSection;

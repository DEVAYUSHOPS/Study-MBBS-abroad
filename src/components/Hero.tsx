import Image from "next/image";
import "../pages/globals.css"

const Hero = () => {
    return (
      <>
        <section className="text-center py-10 bg-blue-600 text-white">
          <h1 className="text-7xl font-bold">Study MBBS Abroad</h1>
          <p className="text-lg mt-2">Apply now to study in top countries</p>
          <a href="#lead-form">
            <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#fe4f5a] hover:text-white ...">
              Apply Now
            </button>
          </a>
          
        </section>
        <div className="w-full flex justify-center items-center">
          <Image
              src="/images/doctor.jpg"
              width={500}
              height={500}
              alt="Picture of the doctors"
            />
        </div>
      </>
    );
  };
  
  export default Hero;
  
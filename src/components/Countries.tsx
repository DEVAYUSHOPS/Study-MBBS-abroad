import Image from "next/image";

const countries = [
  {
    name: "Russia",
    url: "/images/russia.jpg",
  },
  {
    name: "Uzbekistan",
    url: "/images/uzbekistan.jpg",
  },
  {
    name: "Kazakhstan",
    url: "/images/kazakhstan.jpg",
  },
  {
    name: "Philippines",
    url: "/images/philippines.jpg",
  },
  {
    name: "Georgia",
    url: "/images/georgia.jpg",
  },
  {
    name: "Kyrgyzstan",
    url: "/images/kyrgyzstan.jpg",
  },
  {
    name: "Egypt",
    url: "/images/egypt.jpg",
  },
];
const Countries = () => {
  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-4">Top Countries for MBBS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {countries.map((country) => (
          <div key={country.name} className="p-4 bg-white rounded shadow text-center font-semibold">
            <Image
              src={country.url}
              width={500}
              height={500}
              alt="Picture of the country"
            /> 
            {country.name}

          </div>

        ))}
      </div>
    </section>
  );
};

export default Countries;

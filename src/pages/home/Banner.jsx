
const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Best Products Available!",
      description: "Find the latest and greatest products at unbeatable prices.",
      image: "/banners/banner1.png", 
    },
    {
      id: 2,
      title: "Huge Discounts!",
      description: "Shop with massive discounts on top-quality items.",
      image: "/banners/banner2.png",
    },
    {
      id: 3,
      title: "Exclusive Offers!",
      description: "Get exclusive deals only available on our platform.",
      image: "/banners/banner3.png",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-64 md:h-96">
      <div className="flex animate-slide">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 h-64 md:h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
              {/* <h2 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-sm md:text-lg">{slide.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

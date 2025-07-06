import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




import useImagesData from "../../../hooks/useImagesData";
import { homeBannerBg } from "../../../assets";
import { useNavigate } from "react-router";




const HomeSliderTwo = () => {
  const { images, isLoading, } = useImagesData();
  
  // console.log(images);
  const navigate = useNavigate();




  return (
  <div className="w-full font-jost">
    <Swiper
      style={{
        "--swiper-navigation-color": "#57B4BA",
        "--swiper-navigation-size": "30px",
        "--swiper-pagination-color": "#57B4BA",
      }}
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {isLoading || images.length === 0 ? (
        // Fallback Slide (shown while loading or if images empty)
        <SwiperSlide>
          <div
            className="relative w-full min-h-[50vh] md:min-h-[calc(100vh-112px)] bg-cover bg-center  shadow-lg"
            style={{
              backgroundImage: `url(${homeBannerBg})`,
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-6 text-white px-6 bg-black/5">
              <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                Discover The World
              </h1>
              <button
                onClick={() => navigate("/all-travel-deals")}
                className="px-7 md:px-10 text-xs sm:text-sm md:text-lg bg-btn-color py-1.5 md:py-2 cursor-pointer font-semibold text-white border-2 border-btn-color rounded-4xl transition-colors duration-500 hover:bg-transparent "
              >
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      ) : (
        images.map((image) => (
          <SwiperSlide key={image._id}>
            <div
              className="relative w-full h-[50vh] md:h-[calc(100vh-112px)] bg-cover bg-center  shadow-lg"
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center md:gap-6 text-white px-6">
                <h1 className="text-3xl tracking-wide  md:text-5xl font-extrabold drop-shadow-lg">
                  {image.name || "Explore Beautiful Destinations"}
                </h1>
                <p className="text-sm tracking-wide md:text-xl max-w-2xl drop-shadow-md">
                  {image.description ||
                    " Discover new places and create unforgettable memories."}
                </p>
                <button
                  onClick={() => navigate("/all-travel-deals")}
                  className="px-7 md:px-10 text-xs sm:text-sm md:text-xl bg-btn-color py-1.5 md:py-2 cursor-pointer font-semibold text-white border-2 border-btn-color rounded-4xl transition-colors duration-500 hover:bg-transparent "
                >
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  </div>
);

};

export default HomeSliderTwo;

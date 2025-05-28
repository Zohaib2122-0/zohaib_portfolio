




import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Swiper = () => {
  const [cards] = useState([
    {
      id: 1,
      image: "https://avatars.mds.yandex.net/i?id=b5786c2219b38b94b8b51472202cc0244fc29472-4886004-images-thumbs&n=13",
      title: "Stomach",
      description: "Stomach-related issues...",
      link: "https://lqrs.com",
    },
    {
      id: 2,
      image: "https://avatars.mds.yandex.net/i?id=caf5350462973466ac80334077a3ab7d09d9f09b-3989655-images-thumbs&n=13",
      title: "Diarrhea",
      description: "Diarrhea can result from...",
      link: "https://lqrs.com",
    },
    {
      id: 3,
      image: "https://avatars.mds.yandex.net/i?id=a7d309e73327962a53d29487bf5ab7ed19125ddfe653e733-5440551-images-thumbs&n=13",
      title: "High Blood Pressure",
      description: "High blood pressure increases...",
      link: "https://lqrs.com",
    },
    {
      id: 4,
      image: "https://avatars.mds.yandex.net/i?id=4b6e338406481cc11bc2adaa90bc03f72b4c2ab1-6235668-images-thumbs&n=13",
      title: "Control on Sugar",
      description: "Controlling blood sugar is essential...",
      link: "https://lqrs.com",
    },
    {
      id: 5,
      image: "https://avatars.mds.yandex.net/i?id=50f8ca6dabd7168f8016ddbb8641c0613137302b0016612b-5648147-images-thumbs&n=13",
      title: "Blood Cancer",
      description: "Blood cancer affects blood cells...",
      link: "https://lqrs.com",
    },
    {
      id: 6,
      image: "https://avatars.mds.yandex.net/i?id=d08bc8551d1fd48bbbf9382aa4dc43f003086a36-4577816-images-thumbs&n=13",
      title: "Heart Replacement",
      description: "Heart replacement is a critical...",
      link: "https://lqrs.com",
    },
    {
      id: 7,
      image: "https://avatars.mds.yandex.net/i?id=4d88c956c0dda27840a977142aff2839-5865989-images-thumbs&n=13",
      title: "Brain Tumor",
      description: "Brain tumors can be benign...",
      link: "https://lqrs.com",
    },
    {
      id: 8,
      image: "https://avatars.mds.yandex.net/i?id=e4bfafe8360d7121fcfc5908963edeacbea5ea6d-9211032-images-thumbs&n=13",
      title: "Lungs",
      description: "Lung health is vital...",
      link: "https://lqrs.com",
    },
    {
      id: 9,
      image: "https://avatars.mds.yandex.net/i?id=9fab36f6d10c013e2e272fc687e9a1461ec990fc-8280929-images-thumbs&n=13",
      title: "Broken Arm",
      description: "A broken arm usually results...",
      link: "https://lqrs.com",
    },
  ]);

  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto scroll logic
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        scrollAmount += 1;
        slider.scrollLeft += 1;
      }
    };

    intervalRef.current = setInterval(autoScroll, 20);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Mouse drag scroll logic
  useEffect(() => {
    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDownHandler = (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const mouseUpHandler = () => {
      isDown = false;
    };

    const mouseMoveHandler = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", mouseDownHandler);
    slider.addEventListener("mouseleave", mouseUpHandler);
    slider.addEventListener("mouseup", mouseUpHandler);
    slider.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      slider.removeEventListener("mousedown", mouseDownHandler);
      slider.removeEventListener("mouseleave", mouseUpHandler);
      slider.removeEventListener("mouseup", mouseUpHandler);
      slider.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div>
      <div className="text-6xl text-center  text-gray-600 font-bold m-5">
        <h1>Get Treatment</h1>
      </div>

      <div
        ref={sliderRef}
        className="overflow-x-hidden scrollbar-hide mb-4 relative px-0.5 m-8"
        style={{ overflowY: "hidden", whiteSpace: "nowrap", cursor: "grab" }}
      >
        <div className="flex gap-4 w-max">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-none w-64 snap-center transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-md text-center font-semibold text-gray-900">{card.title}</h3>
                  <div className="flex justify-center items-center mt-4">


                    <Link to={"/createappointment"}>
                      <button className="border-2  bg-gray-800 text-xs font-light rounded-md p-2 text-white">
                        Get Treatment
                      </button>
                    </Link>


                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

"use client";
import { Maps } from "@/app/api/maps/interface";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "./globals.css";
import Loader from "@/components/Loader/Loader";

interface DataItem {
  id: string;
  imgUrl: string;
}
interface Splash {
  splash: string;
  narrativeDescription: string;
}

function Maps() {
  const listRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maps, setMaps] = useState<Maps[]>([]);
  const [splash, setSplash] = useState<Splash[]>([]);
  const [data, setData] = useState<DataItem[]>([]); // Asume que tienes un estado para los datos
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios("http://localhost:3000/api/maps");
        const response = await data.data;
        setMaps(response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  useEffect(() => {
    const splashSet = () => {
      const splash = maps.map((item) => ({
        splash: item.splash,
        narrativeDescription: item.narrativeDescription,
      }));
      console.log(splash);
      setSplash(splash);
    };

    splashSet();
  }, [maps]);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode?.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }

    console.log(currentIndex);
  }, [currentIndex]);

  console.log(maps);

  const scrollToImage = (direction: string) => {
    if (direction === "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === splash.length - 1;
      if (!isLastSlide) {
        setCurrentIndex((curr) => curr + 1);
      }
    }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="main-container">
      {maps.length > 0 ? (
        <div className="slider-container">
          <div className="leftArrow" onClick={() => scrollToImage("prev")}>
            &#x276E;
          </div>
          <div className="rightArrow" onClick={() => scrollToImage("next")}>
            &#x276F;
          </div>
          <div className="container-images">
            <ul ref={listRef}>
              {splash.map((item, index) => {
                return (
                  <li key={index}>
                    <Image
                      alt="img"
                      src={item.splash}
                      width={1000}
                      height={500}
                    />
                    <p
                      className={`text-white font-semibold top-[530px] absolute flex px-10 py-20 items-center ${
                        index === currentIndex ? "visible" : "hidden"
                      } overflow-hidden whitespace-pre-wrap w-[50%] h-36 bg-[#9c8551] text-center rounded-tl-3xl rounded-br-3xl

                   `}>
                      {item.narrativeDescription || "No description"}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dots-container">
            {splash.map((_, idx) => (
              <div
                key={idx}
                className={`dot-container-item ${
                  idx === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(idx)}>
                •
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader image="/maps_loader.jpg" />
      )}
    </div>
  );
}

export default Maps;

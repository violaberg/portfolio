"use client";

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'

const projects = [
  {
    id: "1",
    name: "Infinity Health Hub",
    description: "Infinity Health Hub is an online forum designed to support neurodivergent women at every life stage. It provides a safe space to connect, share experiences, and access tailored health resources — from mental health and reproductive care to pregnancy, postnatal support, and menopause. This project was developed during a Code Institute hackathon in collaboration with Trust in Soda, April 2024.",
    image: "./images/project_1.png",
    repo: "https://github.com/violaberg/infinity-health-hub",
    demo: "https://infinity-hub-15161149b9fb.herokuapp.com/",
  },
  {
    id: "2",
    name: "Bling It",
    description: "Bling It is a fictional e-commerce gemstone shop inspired by my love for diamonds and rubies. It offers a curated selection of gemstones, each with detailed specs, pricing, and images. Users can easily browse categories, add items to their wishlist, and leave reviews. The shop also features a secure checkout process for a smooth shopping experience.",
    image: "./images/project_2.png",
    repo: "https://github.com/violaberg/bling-it",
    demo: "https://bling-it-242ac659e1b6.herokuapp.com/",
  },
  {
    id: "3",
    name: "Wine O'Clock",
    description: "Wine O'Clock is a fictional wine cellar located in the heart of the Bordeaux wine region, France. This project invites wine enthusiasts to explore the rich history and traditions of winemaking. The site features a curated gallery, visitor reviews, and a blog covering all things wine. Whether you're a connoisseur or a beginner, Wine O'Clock offers something for everyone. For bookings or inquiries, a contact form is available.",
    image: "./images/project_3.png",
    repo: "https://github.com/violaberg/wine-o-clock",
    demo: "https://wine-o-clock-223a2b0e8720.herokuapp.com/",
  },
  {
    id: "4",
    name: "ForThe50",
    description: "For the 50 aims to raise awareness about modern slavery, which affects an estimated 50 million people worldwide. Our mission is to shed light on this issue and give a voice to those affected. The platform provides essential tools to help identify modern slavery and offers resources, including contact information, to take action. Join us in standing up against this horrific crime and supporting the fight for freedom.",
    image: "./images/project_4.png",
    repo: "https://github.com/violaberg/ForThe50",
    demo: "https://forthe50-67eaa7388853.herokuapp.com/",
  },
];

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="embla">
      <div className="embla__viewport overflow-hidden rounded-lg mt-6" ref={emblaMainRef}>
        <div className="embla__container flex">
          {projects.map((project) => (
            <div className="embla__slide" key={project.id}>
              <div className="card relative max-w-sm w-full">
                <svg
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                  className="noise w-full h-full absolute top-0 left-0"
                  preserveAspectRatio="none"
                >
                  <filter id="noiseFilter">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.85"
                      numOctaves="6"
                      stitchTiles="stitch"
                    />
                  </filter>
                  <rect
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid meet"
                    filter="url(#noiseFilter)"
                  />
                </svg>
                <img
                  src={project.image}
                  alt={project.name}
                  className="img-fluid w-3/4 mx-auto project-img shadow-lg rounded-lg"
                />
                <div className="content p-4">
                  <h2 className="text-lg font-semibold text-center">
                    {project.name}
                  </h2>
                  <p className="py-2">{project.description}</p>
                </div>
                <div className="flex justify-between mt-2 px-4">
                  <button
                    onClick={() => window.open(project.repo, "_blank")}
                    className="btnCard rounded-lg shadow-lg font-semibold p-3 flex-1 mr-2 cursor-pointer"
                  >
                    Repo
                  </button>
                  <button
                    onClick={() => window.open(project.demo, "_blank")}
                    className="btnCard rounded-lg shadow-lg font-semibold p-3 flex-1 ml-8"
                  >
                    Live Site
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport overflow-hidden" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container flex flex-wrap gap-2 ml-2">
            {slides.map((index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel;

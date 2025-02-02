"use client";

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'

const projects = [
  {
    id: "1",
    name: "Project 1",
    description: "A brief description of Project 1.",
    image: "#",
    repo: "https://github.com/project1",
    demo: "https://project1.demo",
  },
  {
    id: "2",
    name: "Project 2",
    description: "A brief description of Project 2.",
    image: "#",
    repo: "https://github.com/project2",
    demo: "https://project2.demo",
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
                  className="h-40 w-full object-cover rounded-lg"
                />
                <div className="content p-4">
                  <h2 className="text-lg font-semibold text-center">
                    {project.name}
                  </h2>
                  <p className="text-center py-2">{project.description}</p>
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
          <div className="embla-thumbs__container flex flex-wrap gap-2">
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

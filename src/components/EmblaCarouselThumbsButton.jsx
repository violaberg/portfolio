"use client";

import React from 'react'

export const Thumb = (props) => {
  const { selected, index, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number btnCard rounded-lg text-base items-center justify-center font-semibold px-6 py-1"
        aria-label={`Select slide ${index + 1}`}
      >
        {index + 1}
      </button>
    </div>
  )
}

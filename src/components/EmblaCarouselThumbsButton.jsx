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
        className="embla-thumbs__slide__number primaryBtn rounded-lg shadow-lg font-semibold ml-2 px-8 py-2"
      >
        {index + 1}
      </button>
    </div>
  )
}

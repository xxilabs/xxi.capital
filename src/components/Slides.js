import { useEffect, useState } from 'react'
import useWindowDimensions from '../lib/useWindowDimensions'

const delayms = 10000

export default function Slides() {
  const { height, width } = useWindowDimensions()

  return (
    <iframe
      src={`https://docs.google.com/presentation/d/e/2PACX-1vTLnPwcPLctj0EUXzj43FhTB8JrJzybiRXbxQzFVTytahxSOTsz9k8CWWQYelVLNpNjPRxu-iTQl_Xd/embed?start=false&loop=true&delayms=${delayms}`}
      frameborder="0"
      allowfullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      width={width}
      height={height}>
    </iframe>
  )
}

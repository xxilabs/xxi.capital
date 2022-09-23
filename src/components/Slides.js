import { useEffect, useState } from 'react'
import useWindowDimensions from '../lib/useWindowDimensions'

const delayms   = 10000
const srcWidth  = 900
const srcHeight = 559
const margin    = 100

export default function Slides() {
  const { height, width } = useWindowDimensions()

  let ratio = Math.min(width / srcWidth, height / srcHeight);

  return (
    <iframe
      src={`https://docs.google.com/presentation/d/e/2PACX-1vTLnPwcPLctj0EUXzj43FhTB8JrJzybiRXbxQzFVTytahxSOTsz9k8CWWQYelVLNpNjPRxu-iTQl_Xd/embed?start=false&loop=true&delayms=${delayms}`}
      frameBorder="0"
      allowfullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      width={srcWidth*ratio-margin}
      height={srcHeight*ratio-margin}>
    </iframe>
  )
}

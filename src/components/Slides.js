import { useEffect, useState, useRef } from 'react'
import useDimensions from '../lib/useDimensions'

const delayms   = 10000
const srcWidth  = 960
const srcHeight = 569
const margin    = 50

const styles = {
}

export default function Slides() {
  const { height, width } = useDimensions(margin)

  let ratio = Math.min(width / srcWidth, height / srcHeight)

  return (
    <div style={styles}>
      <iframe
        src={`https://docs.google.com/presentation/d/e/2PACX-1vTLnPwcPLctj0EUXzj43FhTB8JrJzybiRXbxQzFVTytahxSOTsz9k8CWWQYelVLNpNjPRxu-iTQl_Xd/embed?start=false&loop=true&delayms=${delayms}`}
        frameBorder="0"
        allowFullScreen={true}
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        width={srcWidth*ratio}
        height={srcHeight*ratio}>
      </iframe>
    </div>
  )
}

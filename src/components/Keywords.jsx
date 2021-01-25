// TODO convert to .TSX
/* eslint-disable no-undef */
import { React, useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'

// eslint-disable-next-line no-undef
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Keywords() {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 50, innerHeight: 50 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [
      { color: '#c23369' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: '#28b4d7' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(words), 2000))
    // ref.current.push(setTimeout(() => set(words.slice(0, -1)), 5000))
    ref.current.push(setTimeout(() => set(words), 8000))
    ref.current.push(setTimeout(() => set(words), 8000))
  }, [])

  // TODO: refactor this...
  function styl(innerHeight) {
    const divStyle = { overflow: 'hidden', height: innerHeight }
    if (align === 'right') {
      divStyle.marginRight = 'auto'
    } else {
      divStyle.marginLeft = 'auto'
    }
    return divStyle
  }
  // eslint-disable-next-line no-void
  useEffect(() => void reset(), [])

  return (
    <div id="root">
      <div>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div
            className="transitions-item"
            key={key}
            style={rest}
            onClick={reset}>
            <animated.div style={styl(align, innerHeight)}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

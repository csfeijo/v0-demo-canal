"use client"

import { useEffect, useState, useRef, type RefObject } from "react"

type IntersectionObserverOptions = {
  threshold?: number
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(
  options: IntersectionObserverOptions = {},
): [RefObject<HTMLDivElement>, boolean] {
  const { threshold = 0.1, root = null, rootMargin = "0%", freezeOnceVisible = true } = options

  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref?.current

    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting

        if (isIntersecting || !freezeOnceVisible) {
          setIsVisible(isIntersecting)
        }

        if (isIntersecting && freezeOnceVisible) {
          observer.disconnect()
        }
      },
      { threshold, root, rootMargin },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, freezeOnceVisible])

  return [ref, isVisible]
}

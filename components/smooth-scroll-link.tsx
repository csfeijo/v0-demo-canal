"use client"

import type React from "react"

import type { ReactNode } from "react"
import Link from "next/link"

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function SmoothScrollLink({ href, children, className }: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Check if the href is an anchor link
    if (href.startsWith("#")) {
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}

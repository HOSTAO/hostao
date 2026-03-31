'use client'

import { useEffect } from 'react'

export default function BodyClassSetter({ bodyClass }: { bodyClass: string }) {
  useEffect(() => {
    if (bodyClass) {
      document.body.className = bodyClass
    }
    return () => {
      document.body.className = ''
    }
  }, [bodyClass])

  return null
}

'use client'

import { useEffect, useId, useState } from 'react'

export function Mermaid({ children }) {
  const id = useId().replace(/:/g, '')
  const [svg, setSvg] = useState('')
  const code = typeof children === 'string' ? children : String(children ?? '')

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const mermaid = (await import('mermaid')).default
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'loose',
        theme: 'neutral'
      })
      try {
        const { svg: rendered } = await mermaid.render(`mmd-${id}`, code.trim())
        if (!cancelled) setSvg(rendered)
      } catch (err) {
        if (!cancelled) setSvg(`<pre>${String(err)}</pre>`)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [code, id])

  if (!svg) {
    return (
      <pre className="mermaid-fallback" style={{ opacity: 0.6 }}>
        {code}
      </pre>
    )
  }
  return (
    <div
      className="mermaid"
      dangerouslySetInnerHTML={{ __html: svg }}
      style={{ overflowX: 'auto', margin: '1rem 0' }}
    />
  )
}

export default Mermaid

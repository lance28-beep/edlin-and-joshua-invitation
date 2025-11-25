"use client"

import * as React from "react"

const FALLBACK_VERSION = "19.2.0"

if (typeof React !== "undefined") {
  const currentVersion = (React as any).version

  if (typeof currentVersion !== "string" || currentVersion.trim().length === 0) {
    Object.defineProperty(React, "version", {
      value: FALLBACK_VERSION,
      configurable: true,
      writable: false,
    })
  }
}

export {}



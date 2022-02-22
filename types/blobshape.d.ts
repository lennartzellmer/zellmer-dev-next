interface Blobshape {
  path: string
  seedValue: number
}

interface Config {
  size: number
  growth: number
  edges: number
  seed: null | string
}

declare module 'blobshape' {
  export default function (config: Config): Blobshape
}

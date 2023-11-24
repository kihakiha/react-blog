declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.png' {
  const value: any
  export = value
}

declare module '*.jpg' {
  const value: any
  export = value
}

declare module '*.jpeg' {
  const value: any
  export = value
}

declare const __IS_DEV__: boolean

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*?raw' {
  const contents: string;
  export = contents;
}

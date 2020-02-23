/**
 * Adds TS support for importing css modules (CRA pattern)
 */
declare module '*.module.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.stories.css' {
  const content: { [className: string]: string };
  export default content;
}

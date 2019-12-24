import { CSSProperties } from "react";

export const checkEnum = (enumT: any) => (
  props: any,
  propName: any,
  componentName: any
) => {
  let error = null;
  const prop = props[propName];
  const exist = Object.values(enumT).includes(prop);

  if (!exist) {
    const errorMsg = `Failed prop type: Invalid prop '${propName} of type '${typeof prop}' and value '${prop}' supplied to '${componentName}', expected 'enum'`;
    error = new Error(errorMsg);
  }
  return error;
};

// const cssProperties = {} as CSSProperties;

// export const checkStyle = (
//   props: any,
//   propName: any,
//   componentName: any
// ) => {
//   let error = null;
//   const prop = props[propName];
//   // const exist = Object.values(enumT).includes(prop);

//   if (!(prop instanceof cssProperties)) {
//     const errorMsg = `Failed prop type: Invalid prop '${propName} of type '${typeof prop}' and value '${prop}' supplied to '${componentName}', expected 'enum'`;
//     error = new Error(errorMsg);
//   }
//   return error;
// }; 
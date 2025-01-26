import React from "react";
import { useElements } from "./state";

const renderElement = (node) => {
  if (!node || !node.type) return null; // Handle missing or invalid nodes

  const { type, props, key } = node;

  const children = Array.isArray(props?.children)
    ? props.children.map((child, index) =>
        renderElement({ ...child, key: index })
      )
    : props?.children;

  return React.createElement(type, { ...props, key }, children);
};

const Preview = () => {
  const { data } = useElements();
  console.log({ data });
  return <div>{data ? renderElement(data) : <p>Loading...</p>}</div>;
};

export default Preview;

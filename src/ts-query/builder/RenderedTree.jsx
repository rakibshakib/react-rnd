import React from "react";

const RenderedTree = ({ node }) => {
  if (!node) return null;

  const { type, props } = node;
  const children = Array.isArray(props.children)
    ? props.children.map((child, index) => (
        <RenderedTree key={index} node={child} />
      ))
    : props.children;

  return React.createElement(type, { ...props }, children);
};

export default RenderedTree;

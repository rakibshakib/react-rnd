import ComponentPicker from "./ComponentPicker";
import RenderedTree from "./RenderedTree";

const DroppableCanvas = ({ tree, setTree }) => {
  const addElement = (comp) => {
    setTree((prevTree) => ({
      ...prevTree,
      props: {
        ...prevTree.props,
        children: [
          ...(prevTree.props?.children || []),
          {
            type: comp.type,
            props: {
              style: comp.style || {}, // Inline styles
              children: comp.children || comp.label || null, // Text or children
              onClick: comp.onClick || undefined, // Add the onClick if provided
            },
          },
        ],
      },
    }));
  };

  return (
    <div
      className="canvas flex justify-start gap-4"
      style={{ border: "1px dashed #ccc", minHeight: "300px", padding: "10px" }}
    >
      <ComponentPicker onAdd={addElement} />
      <RenderedTree node={tree} />
    </div>
  );
};

export default DroppableCanvas;

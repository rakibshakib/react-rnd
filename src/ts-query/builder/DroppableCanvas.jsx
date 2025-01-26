import ComponentPicker from "./ComponentPicker";
import RenderedTree from "./RenderedTree";

const DroppableCanvas = ({ tree, setTree }) => {
  const addElement = (type) => {
    setTree({
      ...tree,
      props: {
        ...tree.props,
        children: [
          ...(tree.props.children || []),
          {
            type,
            props: { style: {}, children: type === "button" ? "Button" : "" },
          },
        ],
      },
    });
  };

  return (
    <div
      className="canvas"
      style={{ border: "1px dashed #ccc", minHeight: "300px", padding: "10px" }}
    >
      <ComponentPicker onAdd={addElement} />
      <RenderedTree node={tree} />
    </div>
  );
};

export default DroppableCanvas;

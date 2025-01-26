import { useState } from "react";
import DroppableCanvas from "./DroppableCanvas";

const BuilderPages = () => {
  const [tree, setTree] = useState({
    type: "div",
    props: { style: {}, children: [] },
  });

  return (
    <div className="editor">
      <DroppableCanvas tree={tree} setTree={setTree} />
      <button
        onClick={() => console.log(JSON.stringify(tree, null, 2))}
        className="p-2 mt-4 border rounded"
      >
        Save JSON
      </button>
    </div>
  );
};

export default BuilderPages;

import { useState } from "react";
import DroppableCanvas from "./DroppableCanvas";
import Preview from "./Preview";
import { useElements } from "./state";

const BuilderPages = () => {
  const [tree, setTree] = useState({
    type: "div",
    props: { style: {}, children: [] },
  });

  const { setData } = useElements();

  return (
    <div className="flex justify-between gap-5">
      <div className="editor w-1/2">
        <DroppableCanvas tree={tree} setTree={setTree} />
        <button
          onClick={() => {
            setData(tree);
          }}
          className="p-2 mt-4 border rounded"
        >
          Preview
        </button>
      </div>
      <div className="w-1/2 border p-5">
        <Preview />
      </div>
    </div>
  );
};

export default BuilderPages;

import Child from "./Child";
import UpdateUser from "./UpdateUser";

const Parent = () => {
  return (
    <div className="w-4/5 my-5 mx-auto">
      <div className="flex justify-between items-center gap-8">
        <UpdateUser />
        <Child />
      </div>
    </div>
  );
};

export default Parent;

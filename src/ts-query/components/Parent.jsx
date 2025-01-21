import Update from "./Update";
import User from "./User";

const Parent = () => {
  return (
    <div className="w-4/5 my-5 mx-auto">
      <div className="flex justify-between items-center gap-8">
        <Update />
        <div>
          <User />
        </div>
      </div>
    </div>
  );
};

export default Parent;

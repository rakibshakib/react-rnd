import { useUserState } from "../user";

const User = () => {
  const { data } = useUserState();
  return (
    <div className="flex items-center justify-center mx-auto">
      <div className="w-[250px] py-5 rounded-md px-5 border-white shadow-lg bg-purple-100 text-black flex flex-col items-center gap-2">
        <p className="text-lg font-bold">{data?.name || "N/A"}</p>
        <p>Status: {data?.isActive ? "Active" : "Inactive"}</p>
      </div>
    </div>
  );
};

export default User;

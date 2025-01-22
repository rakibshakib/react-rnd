import React, { useEffect, useState } from "react";
import { useGetUserList } from "./useGetUser";

const User = () => {
  const { data: users, isFetched, isSuccess } = useGetUserList();
  const [data, setData] = useState([]);
  const [userIdSet, setUserIdSet] = useState(new Set());
  const [userIdList, setUserIdList] = useState([]);

  useEffect(() => {
    isSuccess && setData(users);
  }, [users, isSuccess]);

  // handler fun start
  const onCheckHandler = ({ index, id }) => (event) => {
      const isChecked = event.target.checked;
      // Approach #1: Update `data` directly (mutating original data)
      // setData((prevData) => {
      //   const updatedData = [...prevData];
      //   updatedData[index] = { ...updatedData[index], isChecked };
      //   // updatedData[index].isChecked = isChecked
      //   return updatedData;
      // });

      // Approach #2: Manage selection state with an array
      // setUserIdList((prevList) =>
      //   isChecked
      //     ? [...prevList, { id }]
      //     : prevList.filter((user) => user._id !== id)
      // );

      // Approach #3: Use a Set for constant-time operations
      setUserIdSet((prevSet) => {
        const updatedSet = new Set(prevSet);
        isChecked ? updatedSet.add(id) : updatedSet.delete(id);
        return updatedSet;
      });
    };
  // handler fun end


  console.log({data})

  if (!isFetched)
    return <div className="text-center font-bold py-6">Loading...</div>;
  return (
    <div>
      <p>User List: </p>
      <div className="flex flex-col items-start gap-4 py-4">
        {data?.map((user, index) => (
          <div key={user._id} className="flex items-center gap-4  rounded-md shadow-sm shadow-white px-5 py-2">
            <p>{index + 1}</p>
            <p className="font-bold text-lg">{user.name}</p>
            <label>
              <input
                className="w-6 h-6 p-4 rounded-lg checked:accent-purple-900"
                type="checkbox"
                name={user.name}
                id={user.name}
                value={user?.isChecked}
                // checked={user.isChecked} // Approach #1: ⚠ Error: 'isChecked' not in Uerr type
                // checked={userIdList.some((item) => item.id === user._id)} // Approach #2
                checked={userIdSet.has(user._id)} // Approach #3 o(1)
                onChange={onCheckHandler({ index, id: user._id })}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;

import React from "react";
import  useStore  from "../store/store";

 function UserList() {
  const users = useStore((state) => state.users);
  const selectUser = useStore((state) => state.selectUser);
  const deleteUser = useStore((state) => state.deleteUser);

  return (<>
  
  <ul>
    {users.map((user) => (
        <li key={user.id}>
            {user.name}({user.age})
            <button onClick={() => selectUser(user)}>수정</button>
            <button onClick={() => deleteUser(user.id)}>삭제</button>
        </li>
    ))}
  </ul>
  </>)
}

export default UserList
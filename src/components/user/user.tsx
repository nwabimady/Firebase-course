import { FC } from "react";
import { useUserContext } from "../../user-provider";
import { Logout } from "./logout";
import { TaskList } from "./task-list";

export const User: FC = () => {
  const [user] = useUserContext();
  return (
    <div>
      <span>{user?.displayName}</span>
      <TaskList />
      <Logout />
    </div>
  );
};

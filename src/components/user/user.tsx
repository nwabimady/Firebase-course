import { FC } from "react";
import { useUserContext } from "../../user-provider";
import { Logout } from "./logout";
import { TaskList } from "./task-list";
import { CreateTask } from "./create-task";

export const User: FC = () => {
  const [user] = useUserContext();
  return (
    <div>
      <span>{user?.displayName}</span>
      <TaskList />
      <CreateTask />
      <br />
      <Logout />
    </div>
  );
};

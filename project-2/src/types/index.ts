export type User = {
  id: string;
  username: string;
  password: string;
};

export type Todo = {
  id: string;
  user_id: string;
  task: string;
  completed: boolean;
};

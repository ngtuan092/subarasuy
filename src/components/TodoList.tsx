import React from "react";
import TodoItem from "./TodoItem";
import "./ScrollbarHide.css";
import { Collapse } from "antd";
import "./TodoList.css";
import CollapseButton from "./CollapseButon";
import TodoForm from "./TodoForm";
import { useSelector } from "react-redux";

interface item {
  id: number;
  pinned: boolean;
  title: string;
  description?: string;
  completed: boolean;
  priority: number;
}

const TodoList: React.FC = () => {
  const activeKey = useSelector((state: any) => state.active.id);
  const todos: item[] = useSelector((state: any) => state.todos.todos);
  return (
    <div className="flex flex-col items-center mt-10 h-full text-white">
      <div className="flex flex-col items-center w-1/3 h-3/4 bg-m-gray rounded-lg shadow-xl shadow-black pb-10">
        <h1 className="text-3xl font-bold mt-10 mb-10 z-10">Todo List</h1>

        <Collapse className="w-full" bordered={false} activeKey={activeKey}>
          <Collapse.Panel header={<CollapseButton />} showArrow={false} key="1">
            <TodoForm />
          </Collapse.Panel>
        </Collapse>

        <div className="overflow-auto scrollbar-hide border-t w-full">
          <div className="table border-spacing-y-1 w-full snap-y scroll-smooth">
            {todos.map((item) => (
              <TodoItem
                id={item.id}
                key={item.id}
                title={item.title}
                description={item?.description}
                priority={item.priority}
                completed={item.completed}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

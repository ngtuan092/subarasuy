import React from "react";
import TodoItem from "./TodoItem";
import "./ScrollbarHide.css";
import { Collapse } from "antd";
import "./TodoList.css";
import CollapseButton from "./CollapseButon";
import TodoForm from "./TodoForm";

interface item {
  id: number;
  pinned: boolean;
  title: string;
  description?: string;
  completed: boolean;
  priority: number;
}
const items: item[] = [
  {
    id: 1,
    pinned: true,
    title: "Todo 1",
    completed: false,

    priority: 3,
  },
  {
    id: 2,
    title: "Todo 2",
    pinned: false,
    description: "Todo 2 description",
    completed: false,
    priority: 2,
  },
  {
    id: 3,
    title: "Todo 3",
    pinned: false,
    description: "Todo 3 description",
    completed: false,
    priority: 1,
  },
  {
    id: 4,
    title: "Todo 4",
    pinned: false,
    completed: false,
    priority: 3,
  },
  {
    id: 5,
    title: "Todo 5",
    pinned: false,
    completed: false,
    priority: 2,
  },
  {
    id: 6,
    pinned: false,
    title:
      "Todo 6 a a a a a a aa a a a a a aa a a a a a a a a a a a a a a a a Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus pariatur alias ut libero nesciunt deleniti atque doloremque qui quisquam tempora eos, reiciendis est animi aperiam accusamus! Corrupti, enim esse!",
    completed: false,
    priority: 1,
  },
  {
    id: 7,
    title: "Todo 7",
    pinned: false,
    completed: false,
    priority: 3,
  },
];

const TodoList: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-10 h-full text-white">
      <div className="flex flex-col items-center w-1/3 h-3/4 bg-m-gray rounded-lg shadow-xl shadow-black pb-10">
        <h1 className="text-3xl font-bold mt-10 mb-10 z-10">Todo List</h1>

        <Collapse className="w-full" bordered={false}>
          <Collapse.Panel header={<CollapseButton />} showArrow={false} key="1">
            <TodoForm />
          </Collapse.Panel>
        </Collapse>

        <div className="overflow-auto scrollbar-hide border-t w-full">
          <div className="table border-spacing-y-1 w-full snap-y scroll-smooth">
            {items.map((item) => (
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

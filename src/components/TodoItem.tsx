import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import "./TodoItem.css";
import { useSelector } from "react-redux";
import { setFocus } from "../redux/slices/focusSlice";
interface TodoItemProps {
  id: number;
  title: string;
  description: string | undefined;
  completed: boolean;
  priority: number;
}
const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  description,
  priority,
  completed,
}) => {
  const [edit, setEdit] = React.useState(false);
  const [titleState, setTitleState] = React.useState(title);
  const [descriptionState, setDescriptionState] = React.useState(description);
  // const [priorityState, setPriorityState] = React.useState(priority); will be used later
  const [completedState, setCompletedState] = React.useState(completed);
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setEdit(false);
    }
  };
  const dispatch = useDispatch();
  const onFocus = useSelector((state: RootState) => state.focus.id);
  if (edit && onFocus !== id) {
    setEdit(false);
    console.log("Save", titleState);
  }
  return (
    <div className="relative snap-center border-b border-black border-opacity-25 hover:bg-m-gray-75 w-full">
      <div
        className="table-cell w-1/12 hover:cursor-pointer text-center align-middle text-emerald-500"
        onClick={() => {
          setCompletedState(!completedState);
          setEdit(false);
        }}
      >
        <FontAwesomeIcon
          icon={faCheck}
          className={completedState ? "visible" : "invisible"}
        />
      </div>
      <div className="table-cell w-10 hover:cursor-pointer">
        <div className="flex flex-col gap-y-1">
          <div
            className="border border-transparent text-xl field"
            onClick={() => {
              setCompletedState(!completedState);
              setEdit(false);
            }}
            style={{
              textDecoration: completedState ? "line-through" : "none",
              display: edit && onFocus === id ? "none" : "block",
            }}
          >
            {titleState}
          </div>
          <input
            value={titleState}
            onChange={(e) => setTitleState(e.target.value)}
            onKeyDown={onKeyDown}
            className="bg-transparent text-xl field"
            style={
              edit && onFocus === id
                ? { display: "block" }
                : { display: "none" }
            }
          />
          {description && (
            <>
              <div
                onClick={() => {
                  setCompletedState(!completedState);
                  setEdit(false);
                }}
                style={{
                  textDecoration: completedState ? "line-through" : "none",
                  display: edit && onFocus === id ? "none" : "block",
                }}
                className="opacity-50 border border-transparent field"
              >
                {descriptionState}
              </div>
              <input
                type="text"
                value={descriptionState}
                onChange={(e) => setDescriptionState(e.target.value)}
                onKeyDown={onKeyDown}
                className="bg-transparent field"
                style={
                  edit && onFocus === id
                    ? { display: "block" }
                    : { display: "none" }
                }
              />
            </>
          )}
        </div>
      </div>
      <div className="table-cell w-1/12 text-emerald-500">
        <button
          className="disabled:opacity-25"
          disabled={completedState}
          onClick={() => {
            setEdit(!edit);
            dispatch(setFocus({ id }));
            if (edit) {
              console.log("Save", titleState);
            }
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
      <div className="table-cell w-1/12 text-red-500">
        <button
          onClick={() => {
            console.log("Delete");
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

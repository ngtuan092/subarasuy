import { faArrowDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
const CollapseButton = () => {
  const [showTodoForm, setShowTodoForm] = useState(false);
  return (
    <div
      onClick={() => setShowTodoForm(!showTodoForm)}
      className="bg-m-gray-50 flex flex-col items-center text-white justify-center border-t border-dashed w-full hover:bg-m-gray-200 cursor-pointer"
    >
      <div className="h-10 text-2xl rounded-full bg-m-gray-300 flex items-center justify-center relative">
        <Transition
          show={!showTodoForm}
          as={Fragment}
          enter="transition-all ease-in-out duration-500"
          enterFrom="transform rotate-0 opacity-0 scale-50"
          enterTo="transform rotate-90 opacity-100 scale-100"
          leave="transition-all ease-in-out duration-500"
          leaveFrom="transform rotate-90 opacity-100 scale-100"
          leaveTo="transform -rotate-45 opacity-40 scale-50"
        >
          <FontAwesomeIcon
            className="absolute text-m-gray-300 my-2"
            icon={faPlus}
          />
        </Transition>
        <Transition
          show={showTodoForm}
          as={Fragment}
          enter="transition-all ease-in-out duration-500"
          enterFrom="transform rotate-90 opacity-0 scale-50"
          enterTo="transform rotate-0 opacity-100 scale-100"
          leave="transition-all ease-in-out duration-500"
          leaveFrom="transform rotate-90 opacity-100 scale-100"
          leaveTo="transform rotate-45 opacity-40 scale-50"
        >
          <FontAwesomeIcon
            className="absolute text-m-gray-300 my-2"
            icon={faArrowDown}
          />
        </Transition>
      </div>
    </div>
  );
};

export default CollapseButton;

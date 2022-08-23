import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { IMenuSelect } from "src/const/filter-list";

interface IMenuSelectProps {
  title: string;
  displayValue?: "vertical" | "horizontal";
  objSelect: IMenuSelect[];
}

export default function RadioSelectForm({
  title,
  objSelect,
  displayValue,
}: IMenuSelectProps) {
  return (
    <div className="w-full ">
      <div className="mx-auto w-full max-w-md bg-transparent ">
        <Disclosure>
          {({ open }: any) => (
            <>
              <Disclosure.Button className="flex w-full justify-between text-left  bg-transparent  focus:outline-none ">
                <span className="font-semibold capitalize">{title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-black`}
                />
              </Disclosure.Button>
              {!open && (
                <div>
                  <Disclosure.Panel
                    static
                    className={`mt-2 text-sm text-gray-500 ${
                      displayValue === "horizontal" && "grid grid-cols-4"
                    }`}
                  >
                    {objSelect.map((value: IMenuSelect, index) => {
                      return (
                        <div
                          key={index}
                          className="cursor-pointer flex items-start my-5"
                        >
                          {/* color : bg-gray-400 if active */}
                          <div className="w-5 h-5  border"></div>
                          <span className="ml-3 capitalize">{value.name}</span>
                        </div>
                      );
                    })}
                  </Disclosure.Panel>
                </div>
              )}
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

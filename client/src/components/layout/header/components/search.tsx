import React, { useState } from "react";
import { Combobox } from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export default function Search() {
  const [selectedPerson, setSelectedPerson] = useState("");
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <div className="relative w-full font-medium">
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Input
          placeholder="Tìm kiếm..."
          className="border w-full focus:outline-0 px-2 py-2 font-medium text-sm"
          onChange={(event: any) => setQuery(event.target.value)}
          displayValue={(person: any) => person.name}
        />
        <Combobox.Options
          style={{ zIndex: "990" }}
          className={`text-sm absolute border top-10 w-full  bg-gray-400 text-white ${
            !query && "hidden"
          }`}
        >
          {filteredPeople.length > 0
            ? filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.id}
                  value={person}
                  className=" py-3 px-1 border-b"
                >
                  {person.name}
                </Combobox.Option>
              ))
            : "No infomation"}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}

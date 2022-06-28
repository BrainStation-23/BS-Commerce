import React, { useState } from "react";

interface language {
  name: string;
}

const Language: React.FC = (props) => {
  const [open, setOpen] = useState(false);
  const languageList: language[] = [
    { name: "English" },
    { name: "German" },
    { name: "French" },
  ];
  return (
    <div className="inline-block relative">
      <button
        className="inline-flex items-center"
        onClick={() => setOpen(!open)}
      >
        <span className="mr-1">English</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <ul
        className={`top-7 overflow-hidden absolute text-gray-700 whitespace-nowrap bg-white border p-4 z-50 transition-all duration-500 ease-linear top ${
          open ? "h-[110px] opacity-100" : "h-0 opacity-0"
        }`}
      >
        {languageList.map((language) => (
          <li key={language.name} className="py-1">
            {language.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;

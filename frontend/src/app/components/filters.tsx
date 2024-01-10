"use client";

import { useState } from "react";

interface FiltersProps {
  total: number;
}

const Filters: React.FC<FiltersProps> = ({ total }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="w-screen 2xl:container 2xl:mx-auto">
      <div className="md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <div className="flex justify-between items-center mb-4">
          <input
            className="dark:bg-white dark:text-gray-800 dark:placeholder-gray-400 dark:focus:placeholder-gray-500 dark:focus:ring dark:focus:ring-gray-800 dark:focus:ring-offset-2 dark:focus:ring-offset-gray-800 dark:focus:ring-opacity-50 focus:ring focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-gray-800 focus:ring-opacity-50 text-base font-normal text-gray-600 dark:placeholder-gray-300 dark:focus:placeholder-gray-400 placeholder-gray-600 py-4 px-6 w-full border-none outline-none"
            type="text"
            id="search"
            name="search"
            placeholder="Search"
          />

          <button
            className="cursor-pointer dark:bg-white dark:text-gray-800 text-white sm:flex focus:ring-offset-2 py-4 px-6 flex text-base leading-4 font-normal text-white justify-center items-center"
            style={{ height: "56px" }}
          >
            Buscar
          </button>

          <button
            onClick={() => setShowFilter(!showFilter)}
            className="cursor-pointer dark:bg-white dark:text-gray-800 text-white dark:hover:bg-gray-100 sm:flex hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center"
          >
            <svg
              className="mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6 4V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6 12V20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 4V14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 18V20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M18 4V5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M18 9V20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Filtros
          </button>
        </div>

        <p className="text-xl dark:text-gray-400 leading-5 text-gray-600 font-medium">
          {total} filmes
        </p>

        <button
          onClick={() => setShowFilter(!showFilter)}
          className="cursor-pointer mt-6 block sm:hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white dark:text-gray-800 dark:bg-white dark:hover:bg-gray-100 justify-center items-center"
        >
          <svg
            className="mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M6 4V8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M6 12V20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 4V14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 18V20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M18 4V5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M18 9V20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Filters
        </button>
      </div>

      {showFilter && (
        <div
          id="filterSection"
          className="block relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 dark:bg-gray-800 w-full"
        >
          <div
            onClick={() => setShowFilter(!showFilter)}
            className="cursor-pointer text-gray-800 dark:text-white absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4"
          >
            <svg
              className="lg:w-6 lg:h-6 w-4 h-4"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 1L1 25"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
              <path
                d="M1 1L25 25"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <div className="flex space-x-2 text-gray-800 dark:text-white">
              <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium ">
                Diretor
              </p>
            </div>
            <div className="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
              <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Leather"
                  name="Leather"
                  value="Leather"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600">
                      Leather
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Cotton"
                  name="Cotton"
                  value="Cotton"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600">
                      Cotton
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 md:justify-center md:items-center items-center justify-end">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Fabric"
                  name="Fabric"
                  value="Fabric"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600">
                      Fabric
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Crocodile"
                  name="Crocodile"
                  value="Crocodile"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600">
                      Crocodile
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Wool"
                  name="Wool"
                  value="Wool"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600">
                      Wool
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

          <div>
            <div className="flex space-x-2 text-gray-800 dark:text-white">
              <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium ">
                Gênero
              </p>
            </div>
            <div className="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
              <div className="flex md:justify-center md:items-center items-center justify-start">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Large"
                  name="Large"
                  value="Large"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300">
                      Large
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Medium"
                  name="Medium"
                  value="Medium"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300">
                      Medium
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex md:justify-center md:items-center items-center justify-end">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Small"
                  name="Small"
                  value="Small"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300">
                      Small
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex md:justify-center md:items-center items-center justify-start">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Mini"
                  name="Mini"
                  value="Mini"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300">
                      Mini
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block absolute right-0 bottom-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="hover:bg-gray-700 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800"
            >
              Aplicar filtro
            </button>
          </div>

          <div className="block md:hidden w-full mt-10">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="w-full hover:bg-gray-700 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800"
            >
              Aplicar filtro
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window?.localStorage?.getItem("token");

    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Dogflix</span>
          <Image
            className="w-auto"
            src="/logo-vertical.png"
            alt="dogflix logo"
            style={{ minWidth: "120px", height: "100px" }}
            width={100}
            height={100}
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="/" className="text-sm font-semibold leading-6 text-white-900">
          Home
        </a>
        <a
          href="#"
          className="text-sm font-semibold leading-6 text-white-900 hidden"
        >
          Cadastro de Usuários
        </a>
        <a
          href="#"
          className="text-sm font-semibold leading-6 text-white-900 hidden"
        >
          Cadastro de Filmes
        </a>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        {token ? (
          <a
            href="/"
            className="text-sm font-semibold leading-6 text-white-900"
            onClick={(e) => {
              e.preventDefault();

              localStorage?.removeItem("token");
              window.location.href = "/";
            }}
          >
            Sair
          </a>
        ) : (
          <a
            href="/login"
            className="text-sm font-semibold leading-6 text-white-900"
          >
            Entrar
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

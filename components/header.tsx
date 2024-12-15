import Link from "next/link";
import Image from "next/image";
import { Wrapper } from "./wrapper";

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md ">
      <Wrapper>
        <div className="flex justify-between items-center">
          <Image
            width={165}
            height={78}
            className="w-[165px]"
            alt="suiss programa"
            src="/images/suiss.png"
          />
          <nav>
            <Link
              href="#programas"
              className="mx-2 hidden md:inline-block font-pluto-medium"
            >
              Programas
            </Link>
            <Link
              href="#instituciones"
              className="mx-2 hidden md:inline-block font-pluto-medium"
            >
              Instituciones
            </Link>
            <Link
              href="#como-funciona"
              className="mx-2 hidden md:inline-block font-pluto-medium"
            >
              Cómo Funciona
            </Link>
            <Link
              href="#ingresar"
              className="mx-2 bg-red-500 text-white px-4 py-2 rounded"
            >
              Ingresar
            </Link>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;

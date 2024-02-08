import React, { useEffect, useMemo, useState } from "react";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const languages = [
  {
    key: "esp",
    p: "Esp",
    flag: "https://www.worldometers.info/img/flags/sp-flag.gif",
  },
  {
    key: "eng",
    p: "Eng",
    flag: "https://www.worldometers.info/img/flags/uk-flag.gif",
  },
  {
    key: "br",
    p: "Br",
    flag: "https://www.worldometers.info/img/flags/br-flag.gif",
  },
  {
    key: "kor",
    p: "Kor",
    flag: "https://www.worldometers.info/img/flags/ks-flag.gif",
  },
  {
    key: "jp",
    p: "Jp",
    flag: "https://www.worldometers.info/img/flags/ja-flag.gif",
  },
];

function NavBar() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));

  const selectedValue = useMemo(() => {
    const selectedLanguage = languages.find(
      (language) => language.key === Array.from(selectedKeys)[0]
    );
    if (selectedLanguage) {
      return (
        <div className="flex gap-2">
          <Image
            src={selectedLanguage.flag}
            alt="flag"
            width={27}
            height={0}
            className="object-contain rounded-lg"
          />
          <p className="text-base">{selectedLanguage.p}</p>
        </div>
      );
    }
    return selectedLanguage;
  }, [selectedKeys]);

  useEffect(() => setSelectedKeys(new Set(["eng"])), [setSelectedKeys]);

  return (
    <div className="h-18 text-white mb-10 ">
      <div className="navbar mx-auto bg-[#111C26] flex justify-around items-center">
        <div className="w-[80%] flex">
        <div className="w-96 mx-auto mt-2">
          <Image
            className="py-14"
            src="/logo.svg"
            alt="icon"
            width={210}
            height={0}
          />
        </div>

        <div className="flex justify-around m-auto w-[50%] text-xl items-center">
          <Link href="/agent" className="flex gap-2">
            <Image
              className="mx-auto my-0 h-[100%]"
              src="/agents_nav.svg"
              alt="agents"
              width={24}
              height={0}
            />
            Agents
          </Link>
          <Link href="/weapons" className="flex gap-2">
            <Image
              className="mx-auto my-0 h-[100%]"
              src="/weapon_nav.svg"
              alt="weapons"
              width={24}
              height={0}
            />
            Weapons
          </Link>
          <Link href="/maps" className="flex gap-2">
            <Image
              className="mx-auto my-0 h-[100%]"
              src="/maps_nav.svg"
              alt="weapons"
              width={24}
              height={0}
            />
            Maps
          </Link>

          <Dropdown backdrop="blur">
            <DropdownTrigger className="w-14">
              <Button
                variant="solid"
                className="capitalize text-white text-base p-2">
                {selectedValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Language selection"
              variant="flat"
              disallowEmptySelection
              defaultSelectedKeys="eng"
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}>
              {languages.map((item, index) => (
                <DropdownItem key={item.key}>
                  {/* Optionally, you can include the flag here */}
                  <div className="flex gap-2">
                    <Image
                      src={item.flag}
                      alt="flag"
                      width={25}
                      height={0}
                      className="object-contain rounded-lg"
                    />
                    <p className="text-base">{item.p}</p>
                  </div>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import Image from "next/image";
import HeaderItems from "./HeaderItems";
import{
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
}
from "@heroicons/react/outline";
function Header() {
  return (
    <header className="flex flex-col mb-20 md:flex-row m-5 justify-between items-center">
        <div className="flex flex-grow justify-evenly max-w-3xl">
            <HeaderItems 
                title='HOME'
                Icon={HomeIcon}
            />
            <HeaderItems 
                title='TRENDING'
                Icon={LightningBoltIcon}
            />
            <HeaderItems 
                title='VERIFIED'
                Icon={BadgeCheckIcon}
            />
            <HeaderItems 
                title='COLLECTIONS'
                Icon={CollectionIcon}
            />
            <HeaderItems 
                title='SEARCH'
                Icon={SearchIcon}
            />
            <HeaderItems 
                title='ACCCOUNT'
                Icon={UserIcon}
            />
        </div>
        <Image
            className="object-contain text-blue-600 mr-5"
            src="https://links.papareact.com/ua6"
            width={200}
            height={100}
            alt=''
        />
    </header>
  )
}

export default Header;
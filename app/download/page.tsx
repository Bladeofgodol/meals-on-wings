import Image from "next/image";
import Footer from "../component/Footer";

const platforms = [
  {
    id: "phone",
    image: "/image/phone.png",
    buttons: [
      {
        href: "#",
        bgColor: "bg-green-600",
        label: "Android",
        icon: "/image/play-store.png",
        iconSize: "h-10 w-10",
      },
      {
        href: "#",
        bgColor: "bg-dodgerblue",
        label: "Apple",
        icon: "/image/app-store.png",
        iconSize: "h-12 w-12",
      },
    ],
  },
  {
    id: "computer",
    image: "/image/laptop.png",
    buttons: [
      {
        href: "#",
        bgColor: "bg-white text-dodgerblue",
        label: "Windows",
        icon: "/image/window.png",
        iconSize: "h-10 w-10",
      },
      {
        href: "#",
        bgColor: "bg-white text-gray-500",
        label: "MacOS",
        icon: "/image/mac-os.png",
        iconSize: "h-10 w-10",
      },
      {
        href: "#",
        bgColor: "bg-white text-slate-800",
        label: "Linux",
        icon: "/image/linux.png",
        iconSize: "h-10 w-10",
      },
    ],
  },
];

function DownloadButton({ href, bgColor, label, icon, iconSize }: any) {
  return (
    <a href={href}>
      <div
        className={`flex ${bgColor} rounded-xl justify-evenly py-5 px-10 gap-5 border-gray-600 hover:shadow-md hover:bg-slate-900 hover:text-white transition-colors duration-200`}
      >
        <div className={`relative ${iconSize}`}>
          <Image
            src={icon}
            alt={label}
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        {label}
      </div>
    </a>
  );
}

function DownloadSection({ id, image, buttons }: any) {
  return (
    <div className="snap-start  md:h-screen lg:my-20 text-5xl" id={id}>
      <div className="h-full md:h-screen w-full relative">
        <div className="relative h-full w-full flex p-1 items-center font-bold flex-col lg:flex-row py-5 pt-20 md:py-0 text-white justify-around px-40">
          <div className="relative w-full h-1/2 lg:h-2/3 lg:w-1/2">
            <Image
              src={image}
              alt={id}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-10 md:gap-20">
            {buttons.map((button: any, index: any) => (
              <DownloadButton key={index} {...button} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Download() {
  return (
    <main className="md:h-screen overflow-auto md:snap-y md:snap-mandatory scroll-smooth">
      <div className="h-screen md:h-auto">
        {platforms.map((platform) => (
          <DownloadSection key={platform.id} {...platform} />
        ))}
      </div>
      <div className="snap-start min:h-1/3 mt-10">
        <Footer />
      </div>
    </main>
  );
}

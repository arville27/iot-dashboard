import Image from "next/image";

const Footer = () => (
  <footer className="bg-neutral p-4 shadow-md md:px-6 md:py-8">
    <div className="px-4 sm:flex sm:items-center sm:justify-between">
      <div className="flex items-center">
        <button>
          <span className="sr-only">IoT Guest Notify</span>
          <Image
            width={30}
            height={30}
            className="mr-5"
            src="/dark.png"
            alt="Icon"
          />
        </button>
        <span className="self-center whitespace-nowrap text-lg font-semibold tracking-wide text-neutral-content">
          IoT Guest Notify
        </span>
      </div>
      <span className="tracking-wide text-neutral-content/80">
        Made with ❤️ by <span className="font-bold">DYV</span>
      </span>
    </div>
    <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
    <span className="block text-sm text-neutral-content/60 sm:text-center">
      © <span className="font-bold"> DYV. </span>
      All Rights Reserved.
    </span>
  </footer>
);

export default Footer;

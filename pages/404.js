import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-2xl text-gray-700 font-semibold mb-8 mt-6 text-center">
          Pagina nu a fost găsită
        </h1>
        <div>
          <Image src="/svg/page_not_found.svg" width="600" height="400" />
        </div>
      </div>
    </div>
  );
}

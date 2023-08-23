import { Link } from "next/link";

const CarInsuranceLink = () => {
  return (
    <div>
      <Link href="/car-insurance">
        <a className="flex items-center justify-center w-full px-8 py-3 mt-6 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 md:w-auto md:mt-0">
          Vezi ofertele
        </a>
      </Link>
    </div>
  );
};

export default CarInsuranceLink;

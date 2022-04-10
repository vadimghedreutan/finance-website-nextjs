import Image from "next/image";

function Team({ home }) {
  return (
    <section className="section_team">
      <div className="container">
        <div className="md:grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <Image
              src={home.team_image.url}
              width="250"
              height="250"
              objectFit="cover"
            />
          </div>

          <div className="flex items-center justify-center text-center md:text-left p-2">
            <div>
              <p className="text-lg text-white pb-2">
                Our goal is to be at the heart of the financial services
                industry as businesses expand across.
              </p>
              <h3 className="font-semibold">Nelu Tofan</h3>
              {/* <span className="text-xs text-gray-500"></span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

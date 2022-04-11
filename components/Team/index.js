import Image from "next/image";

function Team({ home }) {
  return (
    <section className="section_team">
      <div className="container">
        <div className="md:grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <Image
              src={home.team_image.url}
              width="400"
              height="400"
              objectFit="cover"
            />
          </div>

          <div className="flex items-center justify-center text-left p-2">
            <div>
              <span className="text-xl font-medium text-gray-700">
                Care este scopul nostru?
              </span>
              <p className="text-xl text-white pb-6 pt-1">
                Zâmbetul clientului care ne mulțumește pentru colaborarea!
              </p>
              <h3 className="font-semibold text-gray-700">
                Nelu Tofan - CEO Tofan Consult
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

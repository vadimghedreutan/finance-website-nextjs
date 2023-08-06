import Image from "next/image";

function Team({ home }) {
  return (
    <section className="section_team bg-sky-900">
      <div className="container">
        <div className="md:grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <Image
              src={home.team_image.url}
              width="400"
              height="400"
              alt="Tofan Consult"
              objectFit="cover"
            />
          </div>

          <div className="flex items-center justify-center text-left p-2">
            <div>
              <span className="text-xl font-semibold">
                Care este scopul nostru?
              </span>
              <p className="text-xl text-white pb-6 pt-1">
                Zâmbetul clientului care ne mulțumește pentru colaborarea!
              </p>
              <h3 className="font-semibold text-neutral-300">
                Nelu Tofan - Cofondator Tofan Consult
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

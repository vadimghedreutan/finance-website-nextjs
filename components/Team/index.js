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
              <span className="text-xl font-medium text-gray-700">
                Hi there! We’re Company.
              </span>
              <p className="text-lg text-white pb-4 pt-1">
                We’re an award-winning digital agency for bright ideas — a small
                team of designers, developers and thinkers who are excited to
                help you bring your idea to life. Here’s what we’re all about...
              </p>
              <h3 className="font-semibold text-gray-700">- Nelu Tofan</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

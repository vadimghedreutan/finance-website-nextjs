import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Reviews() {
  return (
    <section>
      <div className="container">
        <div className="reviews">
          <div className="flex justify-center mb-7">
            <div className="md:w-1/2 text-center">
              <h1 className="text-[1.5rem] font-semibold">
                Nice words by nicer people
              </h1>
              <span className=" text-gray-600 hidden md:inline-flex">
                We work closely with our clients to help explore, refine and
                execute their ideas. Here’s what some of them are saying...
              </span>
            </div>
          </div>
          <ul className="reviews_cards">
            <li>
              <blockquote>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem."
              </blockquote>
              <cite>- Jane Doe</cite>
            </li>
            <li>
              <blockquote>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem."
              </blockquote>
              <cite>- Jane Doe</cite>
            </li>
            <li>
              <blockquote>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem."
              </blockquote>
              <cite>- Jane Doe</cite>
            </li>
          </ul>

          <div className="flex justify-center mt-6">
            <div className="flex items-center flex-row gap-2">
              <div className="">
                <BsFillArrowRightCircleFill className="w-8 h-8" />
              </div>
              <div>
                <a href="#" className=" font-medium">
                  Read more kind words
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;

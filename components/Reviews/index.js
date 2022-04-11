import { RichText } from "prismic-reactjs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Reviews({ comments }) {
  return (
    <section>
      <div className="reviews">
        <div className="flex justify-center mb-7">
          <div className="md:w-1/2 text-center">
            <h1 className="text-[1.5rem] font-semibold">
              Ce spun oamenii despre noi
            </h1>
          </div>
        </div>
        <div className="reviews-container scrollbar-hide snap-x">
          {comments?.map((comment) => {
            return (
              <div className="item shadow-lg" key={comment.slug}>
                <blockquote className="text-gray-500">
                  {RichText.asText(comment.description)}
                </blockquote>
                <cite>- {RichText.asText(comment.name)}</cite>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Reviews;

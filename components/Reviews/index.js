import { RichText } from "prismic-reactjs";

function Reviews({ comments }) {
  return (
    <section className="reviews">
      <div className="container pt-8">
        <div className="flex justify-center mb-7">
          <div className="md:w-1/2 text-center">
            <h1 className="text-2xl font-semibold text-white">
              Ce spun oamenii despre noi
            </h1>
          </div>
        </div>
        <div className="reviews-container scrollbar-hide snap-x">
          {comments?.map((comment) => {
            return (
              <div className="item shadow-lg" key={comment.slug}>
                <blockquote>{RichText.asText(comment.description)}</blockquote>
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

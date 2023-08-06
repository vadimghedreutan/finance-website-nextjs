import { RichText } from "prismic-reactjs";

function Reviews({ comments }) {
  return (
    <section className="reviews">
      <div className="container pt-8">
        <div className="flex item-center justify-center sm:justify-start mb-7">
          <h1 className="text-2xl font-semibold text-white ml-7">
            Ce spun oamenii despre noi
          </h1>
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

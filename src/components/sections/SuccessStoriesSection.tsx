import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

interface SuccessStoriesSectionProps {
  showReviews?: boolean;
}

export default function SuccessStoriesSection({
  showReviews = false,
}: SuccessStoriesSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="text-center">
        <h2 className="mb-8 font-heading text-4xl font-semibold uppercase text-brand-red sm:text-6xl md:text-[76px]" style={{ lineHeight: "1" }}>
          Success Stories
        </h2>

        {showReviews && (
          <>
            <div className="mx-auto mb-8 flex items-center justify-center gap-4">
              <div>
                <p className="font-heading text-lg font-semibold uppercase tracking-wider text-brand-dark">
                  Excellent
                </p>
                <div className="flex items-center justify-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-1 text-sm text-brand-gray-light">
                  Based on 170+ reviews
                </p>
              </div>
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Lynn Jourdan",
                  text: "Spurling is exceptional. I am 73 and have been going to the gym since I was in my late 40s. The professional team makes all the difference.",
                },
                {
                  name: "Washburn Family",
                  text: "We joined Spurling because we needed accountability and direction with our fitness goals. The coaches are amazing and truly care about each member.",
                },
                {
                  name: "Martha Crow",
                  text: "Spurling has been life changing! I've been going for over a year and have gained strength, confidence and friends. Best decision I ever made.",
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="rounded-lg border border-gray-200 p-6 text-left shadow-sm"
                >
                  <div className="mb-3 flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-brand-gray">
                    {review.text}
                  </p>
                  <p className="font-heading text-sm font-semibold text-brand-dark">
                    {review.name}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        <Button href="/testimonial/" variant="outlined" size="large">
          View More Testimonials
        </Button>
      </Container>
    </section>
  );
}

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-brand-dark py-20 pt-32">
      <Container className="text-center">
        <h1 className="font-heading text-6xl font-bold text-brand-red sm:text-8xl">
          404
        </h1>
        <h2 className="mt-4 font-heading text-2xl font-semibold text-white sm:text-3xl">
          Page Not Found
        </h2>
        <p className="mx-auto mt-4 max-w-md text-gray-300">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}

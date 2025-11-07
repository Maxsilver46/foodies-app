import Link from "next/link";
import ImageSlideshow from "@/components/images/slideShow";
import CallToAction from "@/components/utils/callToAction";

export default function Home() {
  return (
    <>
      <header className="flex gap-12 mt-12 mb-16 px-20 mx-auto w-[100%] ">
        <div className="w-[40rem] h-[35rem]">
          <ImageSlideshow />
        </div>
        <div>
          <div className="text-[#ddd6cb] text-3xl flex flex-col gap-8 py-8 w-[40rem]">
            <h1
              className="text-4xl font-bold font-montserrat tracking-[0.15rem] uppercase
              bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent"
            >
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="text-3xl flex gap-8">
            <Link
              href="/community"
              className="inline-block mt-4 py-2 px-0 rounded-lg bg-transparent
              font-normal text-[#ff9b05] no-underline hover:text-[#f9b241]"
            >
              Join the Community
            </Link>
            <CallToAction href="/meals">Explore Meals</CallToAction>
          </div>
        </div>
      </header>
      <main>
        <section
          className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%]
          my-8 mx-auto text-center"
        >
          <h2 className="text-5xl font-bold m-8">How it works</h2>
          <p className="m-[1em]">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="m-[1em]">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section
          className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] 
          my-8 mx-auto text-center"
        >
          <h2 className="text-5xl font-bold mb-4">Why NextLevel Food?</h2>
          <p className="m-[1em]">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="m-[1em]">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}

import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

export default function CommunityPage() {
  return (
    <>
      <header className="gap-12 mt-12 mx-auto mb-20 w-[90%] max-w-[75rem] text-[#ddd6cb] text-2xl text-center">
        <h1 className="font-montserrat text-6xl font-bold mb-12">
          One shared passion: <span className="highlight-gradient">Food</span>
        </h1>
        <p className="text-3xl">
          Join our community and share your favorite recipes!
        </p>
      </header>
      <main className="w-[100%] mx-auto my-0 text-center">
        <h2 className="font-montserrat text-5xl font-bold mt-28 text-[#ddd6cb]">
          Community Perks
        </h2>

        <ul className="list-none my-16 mx-0 p-0">
          <li className="flex flex-col items-center gap-8">
            <Image
              src={mealIcon}
              alt="A delicious meal"
              className="w-40 h-40 object-contain"
            />
            <p className="font-montserrat text-4xl font-bold my-4 text-[#ddd6cb]">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              className="w-40 h-40 object-contain"
            />
            <p className="font-montserrat text-4xl font-bold mb-4 text-[#ddd6cb]">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              className="w-40 h-40 object-contain"
            />
            <p className="font-montserrat text-4xl font-bold m-0 text-[#ddd6cb]">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}

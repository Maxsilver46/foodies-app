import Image from "next/image";
import CallToAction from "@/components/utils/callToAction";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article
      className="flex flex-col justify-between h-full rounded meal-card-gradient
      shadow-[0_0_12px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 
      ease-in-out text-[#ddd6cb]"
    >
      <header>
        <div className="relative w-50 h-60">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="py-2 px-4 pt-2">
          <h2 className="m-0 text-2xl font-montserrat">{title}</h2>
          <p className="text-xs text-[#cfa69b] italic">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="py-4 px-4 pt-4 m-0">{summary}</p>
        <div className="p-4 text-right">
          <CallToAction href={`/meals/${slug}`}>View Details</CallToAction>
        </div>
      </div>
    </article>
  );
}

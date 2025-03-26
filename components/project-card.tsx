import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  location?: string;
  shortId?: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  location,
  shortId,
}: ProjectCardProps) {
  return (
    <div className="bg-card rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-100 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          {location && (
            <span className="text-xs font-medium bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
              {location}
            </span>
          )}
          {shortId && (
            <span className="text-xs font-medium bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
              #{shortId}
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-neutral-600 mt-2 text-sm">{description}</p>
        <div className="mt-4">
          <Button asChild className="rounded-full px-6">
            <Link href={`/products?project=${id}`}>Support This Project</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

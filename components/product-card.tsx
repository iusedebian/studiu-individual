import type { Product } from "@/app/constants";
import { cn } from "@/lib/utils";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { name, description, price, starCount, image } = product;
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Link
        href={"/products/" + name.toLocaleLowerCase()}
        className="flex h-56 w-52 flex-col items-center justify-center gap-3 rounded-2xl bg-[#1E293B] p-6"
      >
        <Image
          src={image}
          width={130}
          height={160}
          className="max-h-40"
          alt={name}
        />
      </Link>
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-base">{name}™</h3>
        <p className="text-xs">{description}</p>
        <div className="flex gap-1">
          {new Array(starCount).fill(0).map((_, index) => (
            <StarIcon key={index} className="h-4 w-4 text-amber-400" />
          ))}
        </div>
        <p className="text-xs">${price}</p>
      </div>
    </div>
  );
}
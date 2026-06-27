import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={48} reverse duration={30} durationOnHover={10}>
        {logos.map((logo) => (
          <div
            key={`logo-${logo.alt}`}
            className="flex items-center justify-center h-14 w-14 md:h-20 md:w-20"
          >
            <img
              alt={logo.alt}
              className="pointer-events-none h-full w-full select-none object-contain"
              loading="lazy"
              src={logo.src}
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}

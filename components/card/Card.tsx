import Image, { StaticImageData } from "next/image";

interface CardProps {
  children: JSX.Element | JSX.Element[];
  img?: string | StaticImageData;
}
export const Card = ({ children, img }: CardProps) => {
  return (
    <div className="bg-white w-full h-full lg:h-[95%] lg:w-[90%] rounded-2xl shadow-2xl flex">
      {img && (
        <div className="h-full w-[50%] hidden lg:block rounded-2xl shadow-2xl">
          <Image
            src={img}
            alt="login image"
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
        </div>
      )}
      <div className={`w-full ${img ? "lg:w-1/2" : "w-full"}`}>{children}</div>
    </div>
  );
};

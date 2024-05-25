import { useEffect, useState } from "react";
import Track from "../Track/Track";
import "./sliderStyle.css";
import { Stack, Skeleton } from "@chakra-ui/react";
import CustomSkeleton from "../skeletonb/CustomSkeleton";

export default function SliderComponet() {
  const [isLoaded, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="mx-auto grid lg:grid-rows-1 lg:grid-cols-6 md:grid-cols-5 md:grid-rows-1 sm:grid-cols-4 sm:grid-rows-1">
        {[...Array(9)].map((_, index) =>
          isLoaded ? <CustomSkeleton key={index}   /> : <Track key={index} />
        )}
      </div>
    </>
  );
}

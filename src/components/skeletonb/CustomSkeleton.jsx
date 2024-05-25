import { Skeleton, Stack } from "@chakra-ui/react";
import "../Slider/sliderStyle.css";

function CustomSkeleton({ isLoaded }) {
  return (
    <Stack>
      <Skeleton height="8.4rem" className="mt-3 w-[8.3rem]" id="fade-skeleton" />
      <Skeleton
        height="15px"
        className=" w-[7rem] mx-[12px] fade-skeleton"
        fadeDuration={4}
      />
      <Skeleton
        height="15px"
        className=" w-[4rem] mx-[34px] fade-skeleton"
        fadeDuration={4}
      />
    </Stack>
  );
}

export default CustomSkeleton;

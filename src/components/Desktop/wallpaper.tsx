import { useStorage } from "@/contexts/StorageContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Wallpaper = () => {
  const background = useStorage((state) => state.storage.background);
  const [wallpaper, setWallpaper] = useState("/images/" + background?.image ?? "/images/faded_gallery-WUJiLwXzY6w-unsplash.jpg");

  useEffect(() => {
    if (background?.image) {
      setWallpaper("/images/" + background.image);
    } else {
      setWallpaper("/images/faded_gallery-WUJiLwXzY6w-unsplash.jpg");
    }
  }, [background]);
  return (
    <div className="absolute inset-0 z-[-1] bg-cover bg-fixed bg-center bg-no-repeat w-screen h-screen">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        src={wallpaper}
        className="object-cover h-full w-full"
        alt="wallpaper"
      />
    </div>
  );
};

export default Wallpaper;

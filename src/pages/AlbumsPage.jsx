import AlbumComponent from "../components/album/AlbumComponent";

export default function AlbumPage() {
  return (
 
    <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-zinc-100 dark:bg-zinc-900 "
      >
      {[1, 2, 3, 4, 5].map((album) => {
           return <AlbumComponent />;
         })}
      
        
      </div>
  );
}

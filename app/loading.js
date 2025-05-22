import Image from "next/image";

function loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <h1 className="text-5xl font-bold italic text-stone-600">Loading...</h1>
      <Image
        src="/images/Other_Images/loading.gif"
        alt="Loading Gif"
        width={200}
        height={200}
        className="h-1/2 w-1/2 rounded-xl object-cover"
      />
    </div>
  );
}

export default loading;

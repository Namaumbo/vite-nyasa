import { Button } from "@chakra-ui/react";
export default function VotingPage() {
  return (
    <>
     
      <main className="flex flex-col items-center justify-center  bg-gray-100 bg-[#0d1117] py-12">
        <div className="max-w-md w-full space-y-8 px- md:px-0">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
              Vote for The Audio Track
            </h1>
            <p className="mt-4 text-lg text-gray-600 w-[20rem] m-[auto] dark:text-gray-400">
              Cast your vote to support the artist for the music shoot out.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
            <div className="flex items-center space-x-4">
              <img
                alt="Candidate"
                className="rounded-md"
                height={80}
                src="photo2.jpg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={150}
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  John Doe
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Candidate for City Council
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600 dark:text-gray-400">
                Total Votes : 
                <span className=" pl-1 font-bold text-gray-900 dark:text-gray-100">
                   123
                </span>
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 w-[15rem] text-white font-bold py-2 px-6 rounded">
                Vote
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

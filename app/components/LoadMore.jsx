import { useFetcher } from "@remix-run/react";
const LoadMore = ({ offset }) => {
  const fetcher = useFetcher();
  return (
    <div className="flex items-center justify-center">
      <button
        className="py-3  px-12 text-xl border-2 border-white text-white"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          fetcher.load(`/archives/images?offset=${offset}`);
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMore;

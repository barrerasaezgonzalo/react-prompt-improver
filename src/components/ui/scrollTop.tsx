import { useScrollToTop } from "@/hooks/useScrollToTop";

export function ScrollTop() {
  const { isVisible, scrollToTop } = useScrollToTop({
    threshold: 0,
  });

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 px-4 py-2 rounded-lg bg-zinc-800 text-white shadow-lg cursor-pointer"
        >
          ↑
        </button>
      )}
    </>
  );
}

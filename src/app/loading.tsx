export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-canvas">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-10 h-10">
          <div
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: "rgba(126,34,206,0.12)" }}
          />
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent animate-spin"
            style={{ borderTopColor: "#7E22CE" }}
          />
        </div>
        {/* Logo wordmark */}
        <span className="font-display font-bold text-[17px] tracking-tight text-ink select-none">
          space<span className="text-royal">-ai</span>
        </span>
      </div>
    </div>
  );
}

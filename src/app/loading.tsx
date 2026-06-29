export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-canvas">
      <div className="flex flex-col items-center gap-5">
        {/* Animated rings */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-100" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent animate-spin"
            style={{ borderTopColor: "#06B6D4", borderRightColor: "#3B82F6" }}
          />
        </div>
        {/* aibizmod wordmark */}
        <span className="font-display font-bold text-lg tracking-tight text-ink select-none">
          ai<span className="text-cyan-400">biz</span>mod
        </span>
      </div>
    </div>
  );
}

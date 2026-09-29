export const ReferralSystem = ({ waitlistCount, referralCode }) => {
  return (
    <div className="max-w-2xl mx-auto mb-16 relative z-30 mt-[-40px] md:mt-[-80px] px-2 md:px-0">
      <div className="bg-nom-bg/80 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-nom-green/20 shadow-xl text-center">
        <p className="text-lg mb-6">You're currently <span className="font-bold text-nom-green">#{waitlistCount}</span> in line.</p>

        <div className="bg-white/60 p-6 rounded-2xl mb-8 border border-nom-green/10">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2 opacity-60">Your Referral Link</p>
          <div className="flex flex-col gap-4 items-center">
            <input
              readOnly
              value={referralCode}
              className="w-full text-center bg-transparent border-none font-mono text-nom-brown focus:ring-0 text-xl font-bold"
            />
            <button
              onClick={() => navigator.clipboard.writeText(referralCode)}
              className="px-6 py-2 bg-nom-green text-nom-brown font-bold rounded-xl text-sm hover:bg-nom-green/80 transition-all shadow-sm"
            >
              Copy
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
          <div className="p-4 bg-nom-green/10 rounded-xl border border-nom-green/5">
            <h3 className="font-bold mb-1 text-sm">Invite 1 Friend</h3>
            <p className="text-[10px] md:text-xs opacity-80 leading-tight">25% off your first month or year of subscription.</p>
          </div>
          <div className="p-4 bg-nom-green/10 rounded-xl border border-nom-green/5">
            <h3 className="font-bold mb-1 text-sm">Invite 10 Friends</h3>
            <p className="text-[10px] md:text-xs opacity-80 leading-tight">Get your first year free.</p>
          </div>
          <div className="p-4 bg-nom-green/10 rounded-xl border border-nom-green/5">
            <h3 className="font-bold mb-1 text-sm">Invite 100 Friends</h3>
            <p className="text-[10px] md:text-xs opacity-80 leading-tight">Lifetime Pro membership.</p>
          </div>
          <div className="p-4 bg-nom-green/10 rounded-xl border border-nom-green/5">
            <h3 className="font-bold mb-1 text-sm">Invite 1000</h3>
            <p className="text-[10px] md:text-xs opacity-80 leading-tight">10% of referred users subscription fees.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

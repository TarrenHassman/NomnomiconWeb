export const WaitlistForm = ({ email, setEmail, handleJoin, waitlistCount, isLoading }) => {
  return (
    <div className="max-w-md mx-auto mb-32 relative z-30 mt-[-40px] md:mt-[-80px] px-2 md:px-0">
      <div className="bg-nom-bg/80 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-nom-green/20 shadow-xl">
        <form onSubmit={handleJoin} className="flex flex-col gap-4">
          <div className="relative group">
            <input
              type="email"
              placeholder="Enter your email for early access"
              className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-nom-green/30 focus:border-nom-green focus:outline-none transition-all text-lg shadow-sm group-hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-nom-brown text-white font-bold py-4 rounded-2xl text-xl hover:bg-nom-brown/90 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg flex items-center justify-center ${isLoading ? 'opacity-70 cursor-not-allowed hover:scale-100' : ''}`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Joining...
              </>
            ) : (
              'Sign up for Early Access'
            )}
          </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-nom-green/20">
          <p className="text-center text-sm font-bold text-nom-brown/80 mb-4 uppercase tracking-wide">
            Refer Friends to Unlock Rewards
          </p>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="p-2 bg-white/40 rounded-xl border border-nom-green/10">
              <span className="block text-lg font-bold text-nom-green">1</span>
              <span className="text-[10px] md:text-xs text-nom-brown/70 leading-tight block">25% Off Sub</span>
            </div>
            <div className="p-2 bg-white/40 rounded-xl border border-nom-green/10">
              <span className="block text-lg font-bold text-nom-green">10</span>
              <span className="text-[10px] md:text-xs text-nom-brown/70 leading-tight block">1 Year Free</span>
            </div>
            <div className="p-2 bg-white/40 rounded-xl border border-nom-green/10">
              <span className="block text-lg font-bold text-nom-green">100</span>
              <span className="text-[10px] md:text-xs text-nom-brown/70 leading-tight block">Lifetime Pro</span>
            </div>
            <div className="p-2 bg-white/40 rounded-xl border border-nom-green/10">
              <span className="block text-lg font-bold text-nom-green">1000</span>
              <span className="text-[10px] md:text-xs text-nom-brown/70 leading-tight block">10% Rev Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

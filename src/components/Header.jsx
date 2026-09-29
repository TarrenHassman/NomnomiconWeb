import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header className="pt-6 md:pt-8 flex justify-center sticky top-0 z-50">
      <div className="bg-nom-green/30 px-6 py-2 rounded-full border border-nom-green/50 flex items-center gap-2 backdrop-blur-sm shadow-sm">
        <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
          <img 
            src={logo} 
            alt="NomNomicon Logo" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = 'w-full h-full bg-nom-brown flex items-center justify-center text-nom-green font-bold text-xl';
              fallback.innerText = 'N';
              e.target.parentElement.appendChild(fallback);
            }}
          />
        </div>
        <span className="text-2xl font-semibold tracking-tight">NomNomicon</span>
      </div>
    </header>
  );
};

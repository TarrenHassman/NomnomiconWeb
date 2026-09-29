export const Features = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      <div className="text-left p-6">
        <div className="text-nom-green text-3xl mb-4">✨</div>
        <h3 className="text-xl font-bold mb-2">Exclusivity</h3>
        <p className="text-nom-brown/70">Early access is limited to the first 5,000 seekers. Once the doors close, the grimoire is sealed.</p>
      </div>
      <div className="text-left p-6">
        <div className="text-nom-green text-3xl mb-4">⌛</div>
        <h3 className="text-xl font-bold mb-2">Urgency</h3>
        <p className="text-nom-brown/70">Launch sequence has begun. Positions are filling faster than a potion brews.</p>
      </div>
      <div className="text-left p-6">
        <div className="text-nom-green text-3xl mb-4">🤝</div>
        <h3 className="text-xl font-bold mb-2">Community</h3>
        <p className="text-nom-brown/70">Connect with fellow explorers and share your culinary discoveries in our private forum.</p>
      </div>
    </section>
  );
};

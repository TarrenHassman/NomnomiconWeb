export const Features = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      <div className="text-left p-6">
        <div className="text-nom-green text-3xl mb-4">✨</div>
        <h3 className="text-xl font-bold mb-2">Discover</h3>
        <p className="text-nom-brown/70">Explore a growing compendium of ingredients, dishes, and food knowledge.</p>
      </div>
      <div className="text-left p-6">
        <div className="text-nom-green text-3xl mb-4">⌛</div>
        <h3 className="text-xl font-bold mb-2">Understand</h3>
        <p className="text-nom-brown/70">Make sense of what is in your food with clear nutritional insights.</p>
      </div>
      <div className="text-left p-6">
        <div className="text-nom-green text-3xl mb-4">🤝</div>
        <h3 className="text-xl font-bold mb-2">Keep track</h3>
        <p className="text-nom-brown/70">Build a clearer picture of your eating habits over time.</p>
      </div>
    </section>
  );
};

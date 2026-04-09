export default function VigVaultHomepage() {
  const WHOP_URL = "https://whop.com/your-product";
  const STRIPE_URL = "https://buy.stripe.com/your-checkout";

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">VigVault</h1>
        <p className="text-white/70 mb-8">Beat the books. Systematically.</p>
        <div className="flex gap-4 justify-center">
          <a href={WHOP_URL} className="bg-green-400 text-black px-6 py-3 rounded-full font-semibold">
            Join on Whop
          </a>
          <a href={STRIPE_URL} className="border border-white/20 px-6 py-3 rounded-full">
            Pay with Stripe
          </a>
        </div>
      </div>
    </div>
  );
}

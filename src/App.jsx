import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WaitlistForm } from './components/WaitlistForm'
import { ReferralSystem } from './components/ReferralSystem'
import { Features } from './components/Features'
import { MockupShowcase } from './components/MockupShowcase'
import { Footer } from './components/Footer'
import { joinWaitlist, getWaitlistCount } from './firebase' // Import Firebase functions
import { CompendiumShowcase } from './components/CompendiumShowcase'

function App() {
  const [email, setEmail] = useState('')
  const [isJoined, setIsJoined] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState(0) // Start at 0, fetch real count
  const [referralCode, setReferralCode] = useState('')
  const [isLoading, setIsLoading] = useState(false) // Add loading state

  useEffect(() => {
    // Fetch initial waitlist count from Firebase
    const fetchCount = async () => {
      const count = await getWaitlistCount();
      setWaitlistCount(count);
    };
    fetchCount();
  }, [])

  const handleJoin = async (e) => {
    e.preventDefault()
    if (email) {
      setIsLoading(true);
      // Get referral code from URL if exists
      const urlParams = new URLSearchParams(window.location.search);

      try {
        const result = await joinWaitlist(email);
        
        if (result.success) {
          setIsJoined(true)
          if (result.isNew) {
            setWaitlistCount(prev => prev + 1)
          }
          // Set referral link with the generated code from Firebase
          const userReferralCode = result.data.referralCode;
          setReferralCode(`${userReferralCode}`);
        } else {
          console.error("Failed to join waitlist:", result.error);
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error joining waitlist:", error);
        alert("An error occurred. Please check your connection.");
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="min-h-screen bg-nom-bg text-nom-brown font-sans selection:bg-nom-green selection:text-white">
      <Header />

      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <MockupShowcase />

          <div style={{paddingTop: '8rem'}}>
            {!isJoined ? (
          <WaitlistForm
            email={email}
            setEmail={setEmail}
            handleJoin={handleJoin}
            waitlistCount={waitlistCount}
            isLoading={isLoading}
          />
        ) : (
          <ReferralSystem
            waitlistCount={waitlistCount}
            referralCode={referralCode}
          />
        )}
          </div>

      </main>

      <Footer />
    </div>
  )
}

export default App

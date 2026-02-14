export default function ArjunPortfolio() {
  // ===== Scroll Reveal Effect =====
  const handleScroll = () => {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 80) {
        el.classList.add('active');
      }
    });
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 200);
  }

  // ===== Cursor Glow Trail =====
  if (typeof document !== 'undefined') {
    document.onmousemove = (e) => {
      const dot = document.createElement('div');
      dot.className = 'cursor-dot';
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      document.body.appendChild(dot);

      setTimeout(() => dot.remove(), 300);
    };
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <div className="max-w-4xl mx-auto p-6">


        {/* Profile Photo */}
        <div className="flex justify-center mt-8 reveal reveal-left">
          <img
            src="/assets/profile.jpg"
            alt="Arjun Profile"
            className="w-44 h-44 rounded-full object-cover border-2 border-cyan-400 shadow-lg shadow-cyan-400/40 transition duration-300 hover:scale-110 hover:shadow-cyan-400/80"
            loading="lazy"
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6 reveal reveal-right">
          <a className="text-orange-400" href="http://t.me/ppkunjumon">Telegram</a>
          <a className="text-orange-400" href="https://x.com/p_p_kunjumon">X</a>
          <a
            className="text-orange-400"
            href="https://www.linkedin.com/in/arjun-a-454b85256"
          >
            LinkedIn
          </a>
        </div>

        {/* Contact Section */}
        <div className="mt-14 reveal reveal-left">
          <h3 className="text-center text-green-400 text-xl mb-4">Contact Me</h3>

          <form
            action="https://script.google.com/macros/s/AKfycbw6ewGnAic3cLPz6xfXz74Ap3OfD1GSfflBwbrtCtMkporFLHE7EUS2AZRP4MwbVZYLEw/exec"
            method="POST"
            target="_blank"
            className="space-y-3"
          >
            <input className="w-full p-3 text-black" type="text" name="entry.1" placeholder="Name" required />
            <input className="w-full p-3 text-black" type="text" name="entry.2" placeholder="Age" required />
            <input className="w-full p-3 text-black" type="tel" name="entry.3" placeholder="Mobile Number" required />
            <input className="w-full p-3 text-black" type="email" name="entry.4" placeholder="Email Address" required />
            <input className="w-full p-3 text-black" type="message" name="entry.5" placeholder="Message" required />


            <input
              className="w-full bg-green-600 p-3 cursor-pointer hover:bg-green-700"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>

        {/* About Section */}
        <div className="mt-16 text-center leading-relaxed reveal reveal-right">
          <h3 className="text-green-400 text-xl mb-2">About Me</h3>
          <p>
            Cybersecurity enthusiast skilled in penetration testing, network security,
            and threat analysis. Trained at RedTeam Hackers Academy and actively
            building hands-on experience in SOC monitoring and security operations.
          </p>
        </div>
      </div>

      {/* Cursor Style */}
      <style>{`
        .cursor-dot {
          position: fixed;
          width: 8px;
          height: 8px;
          background: #00ffff;
          border-radius: 50%;
          pointer-events: none;
          box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
          z-index: 9999;
        }

        .reveal {
          opacity: 0;
          transition: all 1s ease;
        }

        .reveal-left {
          transform: translateX(-80px);
        }

        .reveal-right {
          transform: translateX(80px);
        }

        .reveal.active {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
}

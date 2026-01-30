import { FaGithub, FaLinkedin, FaMoon, FaRegMoon } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkmode = Cookies.get('darkmode') === 'on';
    setDarkMode(storedDarkmode);
    updateBodyClass(storedDarkmode);
  }, []);

  const updateBodyClass = (isDark) => {
    document.body.classList.toggle('darkmode', isDark);
    document.body.classList.toggle('lightmode', !isDark);
  };

  const handleToggle = () => {
    const newValue = !darkMode;
    setDarkMode(newValue);

    if (newValue) {
      Cookies.set('darkmode', 'on', { expires: 365 });
    } else {
      Cookies.remove('darkmode');
    }

    updateBodyClass(newValue);
  };

  return (
    <footer>
      <div style={{display:'flex',justifyContent:'center'}}>
        <a target="_blank" rel="norefferer noreferrer" href="mailto:luciaalday03@gmail.com"><MdEmail size={30} /></a>
        <a target="_blank" rel="norefferer noreferrer" href="https://www.github.com/luciaalday"><FaGithub size={30} /></a>
        <a target="_blank" rel="norefferer noreferrer" href="https://www.linkedin.com/in/Lucia-Alday"><FaLinkedin size={30} /></a>
      </div>
      <p>Lucia Alday &copy;2026</p>
      <button
        onClick={handleToggle}
        aria-label='Toggle dark mode'
        title={darkMode ? 'Turn off darkmode' : 'Turn on darkmode'}
        >
        {Cookies.get('darkmode') === 'on' ? <FaMoon size={20} /> : <FaRegMoon size={20} />}
      </button>
    </footer>
  )
}
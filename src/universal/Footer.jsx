import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer-home">
      <p>Lucia Alday &copy;2026</p>
      <div style={{display:'flex',justifyContent:'center'}}>
        <a target="_blank" rel="norefferer noreferrer" href="mailto:luciaalday03@gmail.com"><MdEmail size={30} /></a>
        <a target="_blank" rel="norefferer noreferrer" href="https://www.github.com/luciaalday"><FaGithub size={30} /></a>
        <a target="_blank" rel="norefferer noreferrer" href="https://www.linkedin.com/in/Lucia-Alday"><FaLinkedin size={30} /></a>
      </div>
    </footer>
  )
}
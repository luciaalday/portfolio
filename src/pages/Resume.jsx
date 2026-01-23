import { MdDownload } from "react-icons/md";

export default function Resume() {
  return (
    <div className="resume">
      <p>Resume</p>
      <a href="../img/Resume_Lucia Alday.pdf" download={"Resume_LuciaAlday.pdf"}><MdDownload /> Download Resume</a>
    </div>
  )
}
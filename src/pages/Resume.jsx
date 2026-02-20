/** src/pages/Resume.jsx
 *
 * Purpose: Display resume and allow PDF download
*/
import { MdDownload } from "react-icons/md";
import MyResume from '../img/Resume_Lucia Alday.pdf';

export default function Resume() {
  return (
    <div className="resume">
      <p>Resume</p>
      <iframe
        src={MyResume}
        width='100%'
        title='PDF'
        style={{aspectRatio: '1/1.414', border:'none'}}
      />
      <a href="../img/Resume_Lucia Alday.pdf" download={"Resume_LuciaAlday.pdf"}><MdDownload /> Download Resume</a>
    </div>
  )
}
/** src/pages/DevProjects.jsx
 * 
 * Purpose: Showcase coding projects
 * Projects:
 *    1. Marana ARS Code admin page and editor (remove any identifying content)
 *    2. Event planner site (maybe)
 *    3. Hackathon site UrbanIntel
 *    4. SKELETON GUI (maybe)
 *    5. www.uahealthconnectforschools.org
 */
import PDFViewer from '../components/PDFViewer';
import UrbanIntelPPTX from '../img/powerpoints/UrbanIntel.pdf';
import UrbanIntelPNG from '../img/powerpoints/UrbanIntelScreenshot.png';

export default function DevProjects() {
  return (
    <main>
      <article>
          <h1>UrbanIntel</h1>
          <h2>QWER Hacks at UCLA, February 2026</h2>
          <p>Throughout the process of writing the paper, </p>
      </article>
      <article>
        <section>
          <PDFViewer file={UrbanIntelPPTX} />
        </section>
        <section>
          <img src={UrbanIntelPNG} alt='Screenshot of UrbanIntel web view'/>
        </section>
      </article>
    </main>
  )
}
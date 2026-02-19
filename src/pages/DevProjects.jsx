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
import AILitReview from '../img/powerpoints/ITC AI_Lit Review.pdf';
import PDFViewer from '../components/PDFViewer';

export default function DevProjects() {
  return (
    <main>
      <article>
        <section>
          <h1>ITC Preliminary Research</h1>
          <p>Throughout the process of writing the paper, </p>
        </section>
        <section>
          <PDFViewer file={AILitReview} />
        </section>
      </article>
      <article>
        <section>
          <h1>Second presentation</h1>
        </section>
        <section>
          <PDFViewer file={AILitReview} />
        </section>
      </article>
    </main>
  )
}
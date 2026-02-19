/** src/pages/Research.jsx
 * 
 * Purpose: Showcase research projects and backend heavy coding
 * Projects:
 *		1. ITC Lit Review presentation
 * 		2. ITC Paper final result
 * 		3. Hailey and McNaught's comet spectroscopy project
 */
import AILitReview from '../img/powerpoints/ITC AI_Lit Review.pdf';
import PDFViewer from '../components/PDFViewer';

export default function Research() {
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
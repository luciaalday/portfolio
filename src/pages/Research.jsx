/** src/pages/Research.jsx
 *
 * Purpose: Showcase research projects and backend heavy coding
 * Projects:
 *		1. ITC Lit Review presentation
 * 		2. ITC Paper final result
 * 		3. Hailey and McNaught's comet spectroscopy project
 */
import AILitReview from '../img/powerpoints/ITC AI_Lit Review.pdf';
import ITCPaper from '../img/powerpoints/TPEG ITC_ 2025.pdf';
import Spectroscopy from '../img/powerpoints/HalleyMcNaughtComets.pdf';

export default function Research() {
	return (
	<main>
		<article>
			<section>
			</section>
		</article>
		<article>
			<section>
				<h1>Exploring the Integration of Machine Learning and Animatronic Attention</h1>
				<h2>International Telemetry Conference</h2>
				<p>
					As part of a multidisciplinary undergraduate research team, I co-authored and presented a paper at the International Telemetry Conference exploring the integration of machine learning into animatronic systems. Our work investigated how speech recognition, computer vision, telemetry, and reinforcement learning can enable animatronics to respond dynamically to guest behavior rather than relying on pre-programmed sequences.
				</p>
				<p>
					The research examined the use of predictive and generative AI models to process real-time audio input, translate speech into structured commands, and trigger responsive motion through API-based communication with animatronic control software. My contributions included developing and implementing Python-based parsing logic to interpret transcriptions and interface with animation control systems, helping bridge AI output with physical motion execution.
				</p>
			</section>
			<section>
				<iframe
					src={ITCPaper}
					width='100%'
					style={{aspectRatio: '1/1.15', border:'none'}}
					title='PDF'
				/>
			</section>
		</article>
		<article>
			<section>
				<iframe
					src={AILitReview}
					title='PDF'
					width='100%'
					style={{aspectRatio:'1/0.65'}}
				/>
			</section>
			<section>
				<h1>Preliminary Research</h1>
				<h2>International Telemetry Conference</h2>
				<p>
					During the early research phase, I also created and delivered an educational presentation introducing foundational AI concepts such as supervised learning, deep learning, and speech-to-text architectures to support team understanding and guide implementation decisions.
				</p>
				<p>
					This project combined technical research, applied programming, and systems integration to explore how intelligent autonomy can enhance immersive themed environments.
				</p>
			</section>
		</article>
		<article>
			<section>
				<h1>Finding the Elemental Composition of Halley's and McNaught's Comets</h1>
				<h2>Case Studies of using Reflectance Spectroscopy</h2>
				<p>
					For this project, I used publicly available data sets of wavelengths emitted from the comets over time and analyzed the files using Jupyter Notebook with the numpy and matplotlib.pyplot libraries. I concluded that Halley's comet is made up largely of Hydrogren and Silicon and McNaught's comet is highly made of of Hydrogen and Oxygen. Other elements known to be present were identified on the graph although the amount was less distinct than the aforementioned elements.
				</p>
				<p>
					Check out the Github repository <a href='https://github.com/luciaalday/Cosmos-project'>here</a>
				</p>
			</section>
			<section>
				<iframe
					src={Spectroscopy}
					title='PDF'
					width='100%'
					style={{aspectRatio:'1/1.15'}}
				/>
			</section>
		</article>
	</main>
	)
}
/** src/pages/DevProjects.jsx
 *
 * Purpose: Showcase coding projects
 * Projects:
 *    1. Hackathon site UrbanIntel
 *    2. www.uahealthconnectforschools.org
 *    3. Marana ARS Code admin page and editor (remove any identifying content)
 *    4. Event planner site or blog post site
 */
import UrbanIntelPPTX from '../img/powerpoints/UrbanIntel.pdf';
import UrbanIntelPNG from '../img/powerpoints/UrbanIntelScreenshot.png';
import UAHealthConnectPNG from '../img/powerpoints/UAHealthConnect.png';

export default function DevProjects() {
  return (
    <main>
      <article>
        <div style={{textAlign:'center', margin:'auto'}}>
          <h1>UrbanIntel</h1>
          <h2>QWER Hacks at UCLA, February 2026</h2>
          <p>
            Urban Intel was developed during a sustainability-focused hackathon to explore how data-driven tools can support smarter urban decision-making. The platform aggregated urban and environmental indicators and presented them through a clear, accessible web interface.
          </p>
          <p>
            I contributed to both frontend development and interface design, focusing on usability, structured information flow, and rapid prototyping under time constraints. The project reflects my interest in building human-centered tools that translate complex data into meaningful, actionable insights.
          </p>
          <p>
            Check out the Github repository <a href='https://github.com/luciaalday/QWERHacks'>here</a>
          </p>
        </div>
      </article>
      <article>
        <section>
          <iframe
            src={UrbanIntelPPTX}
            title='PDF'
            width='100%'
            style={{aspectRatio:'1/0.65'}}
          />
        </section>
        <section>
          <img src={UrbanIntelPNG} alt='Screenshot of UrbanIntel web view' style={{maxHeight:'50vh'}}/>
        </section>
      </article>
      <article>
        <section>
          <img alt='uahealthconnectforschools.org screenshot' src={UAHealthConnectPNG} style={{maxHeight:'80vh'}} />
        </section>
        <section>
          <h1>UA Health Connect for Schools</h1>
          <h2>Implementing the Stock Albuterol for Every (SAFE) School Program</h2>
          <p></p>
        </section>
      </article>
      <article>
        <section>
          <h1>Legal Code Editor</h1>
          <h2>Using Slate.js, React, Firebase Authentication, Realtime Database, and Cloud Functions</h2>
          <p>
            Creating a dynamic solution for the legal department to modify ARS codes and keep track of version control
          </p>
          <p>
            Check out the Github repository <a href='https://github.com/luciaalday/update-legal-fines'>here</a>
          </p>
        </section>
        <section>
          {/** insert a pdf compiling the different page views, redacting any data */}
        </section>
      </article>
      <article>
        <section>
          {/** insert a pdf compiling relevant images */}
        </section>
        <section>
          <h1>Events Registration Board</h1>
          <h2>Using SQLite, and React to make an events board complete with admin and user functionality</h2>
          <p>
            Check out the Github repository <a href='https://github.com/luciaalday/project'>here</a>
          </p>
        </section>
      </article>
    </main>
  )
}
/** src/pages/DevProjects.jsx
 *
 * Purpose: Showcase coding projects
 * Projects:
 *    1. Hackathon site UrbanIntel
 *    2. www.uahealthconnectforschools.org
 *    3. Marana ARS Code admin page and editor (remove any identifying content)
 *    4. Event planner site or blog post site
 */
import ScrollSection from '../components/SideScrollSection';
import UrbanIntelPPTX from '../img/powerpoints/UrbanIntel.pdf';
import UrbanIntelPNG from '../img/powerpoints/UrbanIntelScreenshot.png';
import UAHealthConnectPNG from '../img/powerpoints/UAHealthConnect.png';
import EventUI1 from '../img/powerpoints/events/edit-event.png';
import EventUI2 from '../img/powerpoints/events/login-light.png';
import EventUI3 from '../img/powerpoints/events/signup-dark.png';
import EventUI4 from '../img/powerpoints/events/userdash-dark.png';
import Legal1 from '../img/powerpoints/legal/change-password.png';
import Legal2 from '../img/powerpoints/legal/create-new.png';
import Legal3 from '../img/powerpoints/legal/manage-edits.png';
import Legal4 from '../img/powerpoints/legal/manage-users.png';
import Legal5 from '../img/powerpoints/legal/version-history.png';

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
            In my internship at the Town of Marana, I created a apge for the legal team to easily access and edit ARS Code information. The styling was made to be cohesive with other official materials from the town while maintaining a clean, modern look and feel. Users and admin have different permissions when it comes to editing and approving edits, and rather than relying on the IT team to authorize admin users, Cloud Functions were implemented to allow admin users to authorize each other while preserving the security of the accounts. 
          </p>
          <p>
            Check out the Github repository <a href='https://github.com/luciaalday/update-legal-fines'>here</a>
          </p>
        </section>
        <section>
          {/** TODO redact any identifying data */}
          <ScrollSection title="Fine editor">
            <div className="scroll-item">
              <img src={Legal1} alt='Fine editor screenshot' />
            </div>
            <div className="scroll-item">
              <img src={Legal2} alt='Fine editor screenshot' />
            </div>
            <div className="scroll-item">
              <img src={Legal3} alt='Fine editor screenshot' />
            </div>
            <div className="scroll-item">
              <img src={Legal4} alt='Fine editor screenshot' />
            </div>
            <div className="scroll-item">
              <img src={Legal5} alt='Fine editor screenshot' />
            </div>
          </ScrollSection>
        </section>
      </article>
      <article>
        <section>
          <ScrollSection title="Events-UI">
            <div className='scroll-item'>
              <img src={EventUI1} alt='EventsUI Screenshot' />
            </div>
            <div className='scroll-item'>
              <img src={EventUI2} alt='EventsUI Screenshot' />
            </div>
            <div className='scroll-item'>
              <img src={EventUI3} alt='EventsUI Screenshot' />
            </div>
            <div className='scroll-item'>
              <img src={EventUI4} alt='EventsUI Screenshot' />
            </div>
          </ScrollSection>
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
/** src/pages/ArtPortfolio.jsx
 *
 * Purpose: Showcase art and graphic design
 * Projects:
 *    1. Graphic Design
 *        a. T-Shirts
 *    2. Infographics
 *        a. One pager
 *        b. graphical abstract
 *    3. Digital art
 *        a. Adobe
 *        b. Procreate
 *    4. Physical media
 *        a. Paintings
 *        b. Pen/pencil
*/
import ScrollSection from '../components/SideScrollSection';

import SolarOvenShirt from '../img/graphic_design/solar oven T-shirt Lucia Alday high resolution.png';
import TucsonCSA from '../img/graphic_design/Tucson CSA.png';
import FolkDance from '../img/graphic_design/ua_folk_dance.png';
import MercyCares from '../img/graphic_design/Mercy CARES 2024-25 Banner.png';

import DigitalShip from '../img/art/Alday_ocean ship.jpeg';
import AlbumCover from '../img/art/album_cover.png';
import FrogWaterfall from '../img/art/Alday_frog forest waterfall.jpg';
import NightDrive from '../img/art/Alday_night_drive.jpg';

export default function ArtPortfolio() {
  return (
    <main className="portfolio">

      <ScrollSection title="Graphic Design">
        <div className="scroll-item">、
          <img src={SolarOvenShirt} alt="Artwork" />
        </div>
        <div className="scroll-item">
          <img src={TucsonCSA} alt="Artwork" />
        </div>
        <div className="scroll-item">
          <img src={FolkDance} alt="Artwork" />
        </div>
        <div className="scroll-item">
          <img src={MercyCares} alt="Artwork" />
        </div>
      </ScrollSection>

      <ScrollSection title="Digital Art">
        <div className="scroll-item">
          {/** TODO create toggle for each image to display information on click */}
          <img src={DigitalShip} alt="Ocean ship digital artwork" />
        </div>

        <div className="scroll-item">
          <img src={FrogWaterfall} alt="Artwork" />
        </div>

        <div className="scroll-item">
          <img src={NightDrive} alt="Artwork" />
        </div>

        <div className="scroll-item">
          <img src={AlbumCover} alt="Artwork" />
        </div>
      </ScrollSection>

      <ScrollSection title="Illustrations">
        <div className="scroll-item">
          <img src={DigitalShip} alt="Artwork" />
        </div>
      </ScrollSection>

    </main>
  );
}
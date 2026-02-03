import ScrollSection from '../components/SideScrollSection';

import DigitalShip from '../img/art/Alday_ocean ship.jpeg';
import AlbumCover from '../img/art/album_cover.png';
import FrogWaterfall from '../img/art/Alday_frog forest waterfall.jpg';
import NightDrive from '../img/art/Alday_night_drive.jpg';

export default function ArtPortfolio() {
  return (
    <main className="portfolio">

      <ScrollSection title="Digital Art">
        <div className="scroll-item">
          {/** TODO create toggle for each image to display information on click */}
          <div className="image-wrap">
            <img src={DigitalShip} alt="Ocean ship digital artwork" />
          </div>
        </div>

        <div className="scroll-item">
          <div className="image-wrap">
            <img src={FrogWaterfall} alt="Artwork" />
          </div>
        </div>

        <div className="scroll-item">
          <div className="image-wrap">
            <img src={NightDrive} alt="Artwork" />
          </div>
        </div>

        <div className="scroll-item">
          <div className="image-wrap">
            <img src={AlbumCover} alt="Artwork" />
          </div>
        </div>
      </ScrollSection>

      <ScrollSection title="Illustrations">
        <div className="scroll-item">
          <div className="image-wrap">
            <img src={DigitalShip} alt="Artwork" />
          </div>
        </div>
      </ScrollSection>

    </main>
  );
}
import DigitalShip from '../img/art/Alday_ocean ship.jpeg';

export default function ArtPortfolio () {
  return (
    <div className="art">
      <p>Art portfolio page</p>
      <table>
        <tbody>
          <tr>Graphic design</tr>
          <tr>
            <td>Digital Media</td>
          </tr>
          <tr>
            <td>
              <img alt="Ship on a calm ocean night" src={DigitalShip} width={200} />
            </td>
          </tr>
          <tr>Black, white, and a splash of color</tr>
          <tr>Paintings</tr>
        </tbody>
      </table>
    </div>
  )
}
import dragon1 from '../Dragon/acnologia.webp'
import dragon2 from '../Dragon/belserion.webp'
import dragon3 from '../Dragon/grandeeney.webp'
import dragon4 from '../Dragon/igneel.jpg'
import dragon5 from '../Dragon/metalicana.webp'
import dragon6 from '../Dragon/skiadrum.webp'

const About = () => {
   return (
      <section className="guild-wrapper">

         <div className="guild-row-1">

            <div className="guild-col-1">
               <img src={dragon1} alt="" />
               <p className="overlay"> Acnologia </p>
            </div>

            <div className="guild-col-1">
               <img src={dragon2} alt="" />
               <p className="overlay"> Belserion </p>

            </div>

         </div>


         <div className="guild-row-1">

            <div className="guild-col-1">
               <img src={dragon3} alt="" />
               <p className="overlay"> Grandeeney </p>
            </div>

            <div className="guild-col-1">
               <img src={dragon4} alt="" />
               <p className="overlay"> Igneel </p>

            </div>

         </div>

         <div className="guild-row-1">

            <div className="guild-col-1">
               <img src={dragon5} alt="" />
               <p className="overlay"> Metalicana </p>
            </div>

            <div className="guild-col-1">
               <img src={dragon6} alt="" />
               <p className="overlay"> Skiadrum </p>

            </div>

         </div>
      </section>
   );
}

export default About;
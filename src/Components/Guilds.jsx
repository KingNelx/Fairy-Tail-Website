import fairytail from '../Guilds/fairy-tail.jpg'
import bluepegasus from '../Guilds/blue-pegasus.png'
import lamiascale from '../Guilds/lamia-scale.png'
import mermaidheel from '../Guilds/mermaid-heel.png'
import quatrocerberus from '../Guilds/quatro-cerberus.jpg'
import raventail from '../Guilds/raven-tail.png'
import sabertooth from '../Guilds/saber-tooth.png'
import twilightogre from '../Guilds/twilight-ogre.jpg'

const Guilds = () => {
    return (
        <section className="guild-wrapper">

            <div className="guild-row-1">

                <div className="guild-col-1">
                    <img src={fairytail} alt="" />
                    <p className="overlay"> Fairy Tail </p>
                </div>

                <div className="guild-col-1">
                    <img src={sabertooth} alt="" />
                    <p className="overlay"> Sabertooth </p>

                </div>

            </div>

            <div className="guild-row-1">

                <div className="guild-col-1">
                    <img src={lamiascale} alt="" />
                    <p className="overlay"> Lamia Scale </p>
                </div>

                <div className="guild-col-1">
                    <img src={mermaidheel} alt="" />
                    <p className="overlay"> Mermaid Heel </p>
                </div>

            </div>

            <div className="guild-row-1">

                <div className="guild-col-1">
                    <img src={quatrocerberus} alt="" />
                    <p className="overlay"> Quatro Cerberus </p>
                </div>

                <div className="guild-col-1">
                    <img src={raventail} alt="" />
                    <p className="overlay"> Raven Tail Guild </p>
                </div>

            </div>

            <div className="guild-row-1">

                <div className="guild-col-1">
                    <img src={bluepegasus} alt="" />
                    <p className="overlay"> Blue Pegasus </p>
                </div>

                <div className="guild-col-1">
                    <img src={twilightogre} alt="" />
                    <p className="overlay"> Twilight Ogre </p>
                </div>

            </div>
        </section>
    );
}

export default Guilds;
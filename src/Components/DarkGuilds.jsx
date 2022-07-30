import dg1 from '../DarkGuilds/grimiore_heart.webp'
import dg2 from '../DarkGuilds/oracion-seis.png'
import dg3 from '../DarkGuilds/phantom-lord.png'
import dg4 from '../DarkGuilds/tartaros.png'
const DarkGuilds = () => {
    return (
        <section className="guild-wrapper">

            <div className="guild-row-1">

                <div className="guild-col-1">
                    <img src={dg1} alt="" />
                    <p className="overlay"> Grimoire Heart </p>
                </div>

                <div className="guild-col-1">
                    <img src={dg2} alt="" />
                    <p className="overlay"> Oracion Seis </p>

                </div>

            </div>


            <div className="guild-row-1">

                <div className="guild-col-1">
                    <img src={dg3} alt="" />
                    <p className="overlay"> Phantom Lord </p>
                </div>

                <div className="guild-col-1">
                    <img src={dg4} alt="" />
                    <p className="overlay"> Tartaros </p>

                </div>

            </div>
        </section>
    );
}

export default DarkGuilds;
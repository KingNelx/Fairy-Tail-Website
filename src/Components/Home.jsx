import fairy1 from '../BG-Img/fairy-1.jpg'
import fairy2 from '../BG-Img/fairy-2.webp'
import fairy3 from '../BG-Img/fairy-3.jpg'
import fairy4 from '../BG-Img/fairy-4.jpg'
import fairy5 from '../BG-Img/fairy-5.webp'
import fairy6 from '../BG-Img/fairy-6.jpg'

const Home = () => {
    return (
        <div>
            <div className="home-bg"></div>
            <section className="home-container">
                <div className="home-details">
                    <h1> Fairy Tail フェアリーテイル</h1>
                    <p>
                        Fairy Tail is a Japanese manga series written and illustrated by
                        Hiro Mashima. It was serialized in Kodansha's Weekly Shōnen Magazine
                        from August 2006 to July 2017, with the individual chapters
                        collected and published into 63 tankōbon volumes.
                    </p>
                    <div></div>
                </div>
            </section>

            <section>
                <div className="home-gallery">
                    <div className="home-gallery-col">

                        <div className="home-gallery-row">
                            <img src={fairy1} alt="" />
                        </div>

                        <div className="home-gallery-row">
                            <img src={fairy2} alt="" />
                        </div>

                    </div>

                    <div className="home-gallery-col">

                        <div className="home-gallery-row">
                            <img src={fairy3} alt="" />
                        </div>

                        <div className="home-gallery-row">
                            <img src={fairy4} alt="" />
                        </div>

                    </div>

                    <div className="home-gallery-col">

                        <div className="home-gallery-row">
                            <img src={fairy5} alt="" />
                        </div>

                        <div className="home-gallery-row">
                            <img src={fairy6} alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

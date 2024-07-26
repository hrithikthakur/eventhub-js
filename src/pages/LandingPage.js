import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <img
        className={styles.unsplashf2krfQfcqwIcon}
        alt=""
        src="/unsplashf2krf-qfcqw@2x.png"
      />
      <nav className={styles.header}>
        <a className={styles.eventHub}>
          <span>Event</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.hub}>Hub</span>
        </a>
        <div className={styles.featuresParent}>
          <a className={styles.features}>Features</a>
          <a className={styles.features}>Community</a>
          <a className={styles.features}>Pricing</a>
        </div>
      </nav>
      <b className={styles.madeForThoseContainer}>
        <p className={styles.madeForThose}>{`Made for those `}</p>
        <p className={styles.madeForThose}>who do</p>
      </b>
      <div className={styles.groupParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.lookingForParent}>
              <div className={styles.lookingFor}>Looking for</div>
              <DropdownButton
                className={styles.accordion}
                title="Choose event type"
                as={ButtonGroup}
                style={{
                  width: "290",
                  height: "40",
                  backgroundColor: "#ececec",
                  borderRadius: "5px",
                }}
              >{` `}</DropdownButton>
            </div>
            <div className={styles.lookingForParent}>
              <div className={styles.lookingFor}>Location</div>
              <div className={styles.accordion1}>
                <div className={styles.accordionTitle}>Choose location</div>
                <img
                  className={styles.fetherIconsChevronDown}
                  alt=""
                  src="/fether-icons--chevrondown.svg"
                />
              </div>
            </div>
            <div className={styles.lookingForParent}>
              <div className={styles.lookingFor}>When</div>
              <DropdownButton
                className={styles.accordion}
                title="Choose data and time"
                as={ButtonGroup}
                style={{
                  width: "290",
                  height: "40",
                  backgroundColor: "#ececec",
                  borderRadius: "5px",
                }}
              >{` `}</DropdownButton>
            </div>
          </div>
        </div>
        <button className={styles.button}>
          <img
            className={styles.fetherIconsSearch}
            alt=""
            src="/fether-icons--search.svg"
          />
        </button>
      </div>
      <div className={styles.upcomingEventsParent}>
        <b className={styles.upcomingEvents}>
          <span>{`Upcoming `}</span>
          <span className={styles.hub}>Events</span>
        </b>
        <div className={styles.accordionParent}>
          <DropdownButton
            className={styles.accordion3}
            title="Weekdays"
            as={ButtonGroup}
            style={{
              width: "140",
              height: "100%",
              backgroundColor: "rgba(104, 124, 148, 0.05)",
              borderRadius: "5px",
            }}
          >{` `}</DropdownButton>
          <DropdownButton
            className={styles.accordion3}
            title="Event type"
            as={ButtonGroup}
            style={{
              width: "140",
              height: "100%",
              backgroundColor: "rgba(104, 124, 148, 0.05)",
              borderRadius: "5px",
            }}
          >{` `}</DropdownButton>
          <DropdownButton
            className={styles.accordion3}
            title="Any category"
            as={ButtonGroup}
            style={{
              width: "140",
              height: "100%",
              backgroundColor: "rgba(104, 124, 148, 0.05)",
              borderRadius: "5px",
            }}
          >{` `}</DropdownButton>
        </div>
      </div>
      <div className={styles.button1}>
        <img
          className={styles.phosphorIconsCaretleft}
          alt=""
          src="/phosphor-icons--caretleft.svg"
        />
      </div>
      <div className={styles.button2}>
        <img
          className={styles.phosphorIconsCaretleft}
          alt=""
          src="/phosphor-icons--caretright.svg"
        />
      </div>
      <div className={styles.eventParent}>
        <div className={styles.event}>
          <img className={styles.eventIcon} alt="" src="/event@2x.png" />
          <div className={styles.freeWrapper}>
            <div className={styles.accordionTitle}>FREE</div>
          </div>
          <div
            className={styles.bestselllerBookBootcamp}
          >{`BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow`}</div>
          <div className={styles.saturdatMarch18}>
            Saturdat, March 18, 9.30PM
          </div>
          <div className={styles.onlineEvent}>
            ONLINE EVENT - Attend anywhere
          </div>
        </div>
        <div className={styles.event}>
          <img className={styles.eventIcon} alt="" src="/event1@2x.png" />
          <div className={styles.freeWrapper}>
            <div className={styles.accordionTitle}>FREE</div>
          </div>
          <div
            className={styles.bestselllerBookBootcamp}
          >{`BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow`}</div>
          <div className={styles.saturdatMarch18}>
            Saturdat, March 18, 9.30PM
          </div>
          <div className={styles.onlineEvent}>
            ONLINE EVENT - Attend anywhere
          </div>
        </div>
        <div className={styles.event}>
          <img className={styles.eventIcon} alt="" src="/event2@2x.png" />
          <div className={styles.freeWrapper}>
            <div className={styles.accordionTitle}>FREE</div>
          </div>
          <div
            className={styles.bestselllerBookBootcamp}
          >{`BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow`}</div>
          <div className={styles.saturdatMarch18}>
            Saturdat, March 18, 9.30PM
          </div>
          <div className={styles.onlineEvent}>
            ONLINE EVENT - Attend anywhere
          </div>
        </div>
      </div>
      <div className={styles.createEvents}>
        <div className={styles.createEventsChild} />
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        <div className={styles.groupContainer}>
          <button className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <b className={styles.createEvents1}>Create Events</b>
          </button>
          <b className={styles.makeYourOwn}>{`Make your own Event `}</b>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
        </div>
      </div>
      <div className={styles.trendingCollegesParent}>
        <b className={styles.trendingColleges}>
          <span>{`Trending `}</span>
          <span className={styles.hub}>colleges</span>
        </b>
        <div className={styles.button3}>
          <div className={styles.accordionTitle}>Load more...</div>
        </div>
        <div className={styles.cardParent}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <div className={styles.rating}>
                <img
                  className={styles.fetherIconsSearch}
                  alt=""
                  src="/star.svg"
                />
                <div className={styles.div}>4.8</div>
              </div>
              <div className={styles.button4}>
                <div className={styles.exclusive}>EXCLUSIVE</div>
              </div>
            </div>
            <div className={styles.cardBody}>
              <b className={styles.accordionTitle}>Harvard University</b>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.div}>Cambridge, Massachusetts, UK</div>
              <div className={styles.button5}>
                <img
                  className={styles.fetherIconsMoreHorizontal}
                  alt=""
                  src="/fether-icons--morehorizontal.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage1}>
              <div className={styles.rating}>
                <img
                  className={styles.fetherIconsSearch}
                  alt=""
                  src="/star.svg"
                />
                <div className={styles.div}>4.8</div>
              </div>
              <div className={styles.button4}>
                <div className={styles.exclusive}>EXCLUSIVE</div>
              </div>
            </div>
            <div className={styles.cardBody1}>
              <b className={styles.accordionTitle}>Stanford University</b>
            </div>
            <div className={styles.cardFooter}>
              <a
                className={styles.stanfordCalifornia}
                href={`https://www.google.com/search?sxsrf=AJOqlzWlyTLtaKSRKUmdnu_Vsm5vVZDeqA:1673156797068&q=Stanford,+California&stick=H4sIAAAAAAAAAONgVuLSz9U3MKwqrDQrecRoyi3w8sc9YSmdSWtOXmNU4-IKzsgvd80rySypFJLgYoOy-KR4uJC08SxiFQkuScxLyy9K0VFwTszJBLLyMhMBZbReiV0AAAA&sa=X&ved=2ahUKEwjEtqvkorf8AhUN7nMBHUpyAisQzIcDKAB6BAgXEAE`}
                target="_blank"
              >
                Stanford, California
              </a>
              <div className={styles.button5}>
                <img
                  className={styles.fetherIconsMoreHorizontal}
                  alt=""
                  src="/fether-icons--morehorizontal.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage2}>
              <div className={styles.rating}>
                <img
                  className={styles.fetherIconsSearch}
                  alt=""
                  src="/star.svg"
                />
                <div className={styles.div}>4.8</div>
              </div>
              <div className={styles.button4}>
                <div className={styles.exclusive}>EXCLUSIVE</div>
              </div>
            </div>
            <div className={styles.cardBody1}>
              <b className={styles.accordionTitle}>Nanyang University</b>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.div}>Nanyang Ave, Singapura</div>
              <div className={styles.button5}>
                <img
                  className={styles.fetherIconsMoreHorizontal}
                  alt=""
                  src="/fether-icons--morehorizontal.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <b className={styles.ourPartneredUniversity}>Our Partnered University</b>
      <b className={styles.weveHadThe}>
        We've had the pleasure of working with prestigious Institurions. These
        are just some of them.
      </b>
      <div className={styles.image4Parent}>
        <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      </div>
      <div className={styles.landingPageChild} />
      <b className={styles.eventHub1}>
        <span>Event</span>
        <span className={styles.span1}>{` `}</span>
        <span className={styles.hub}>Hub</span>
      </b>
      <div className={styles.inputParent}>
        <div className={styles.input}>
          <div className={styles.accordionTitle}>Enter your mail</div>
        </div>
        <div className={styles.button10}>
          <div className={styles.accordionTitle}>Subscribe</div>
        </div>
      </div>
      <div className={styles.homeParent}>
        <a className={styles.home}>Home</a>
        <a className={styles.home}>About</a>
        <a className={styles.services}>Services</a>
        <a className={styles.services}>Get in touch</a>
        <a className={styles.home}>FAQs</a>
      </div>
      <div className={styles.landingPageItem} />
      <div className={styles.nonCopyrightedContainer}>
        <p className={styles.madeForThose}>
          Non Copyrighted © 2024 Upload by EventHub
        </p>
      </div>
      <div className={styles.phosphorIconsLinkedinlogoParent}>
        <a className={styles.phosphorIconsLinkedinlogo}>
          <img
            className={styles.vectorStrokeIcon}
            alt=""
            src="/vector-stroke.svg"
          />
          <img
            className={styles.vectorStrokeIcon1}
            alt=""
            src="/vector-stroke1.svg"
          />
          <img
            className={styles.vectorStrokeIcon2}
            alt=""
            src="/vector-stroke2.svg"
          />
          <img
            className={styles.vectorStrokeIcon3}
            alt=""
            src="/vector-stroke3.svg"
          />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </a>
        <a className={styles.phosphorIconsLinkedinlogo}>
          <img
            className={styles.vectorStrokeIcon4}
            alt=""
            src="/vector-stroke4.svg"
          />
          <img
            className={styles.vectorStrokeIcon}
            alt=""
            src="/vector-stroke5.svg"
          />
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        </a>
        <a className={styles.phosphorIconsLinkedinlogo}>
          <img
            className={styles.vectorStrokeIcon6}
            alt=""
            src="/vector-stroke6.svg"
          />
          <img
            className={styles.vectorStrokeIcon7}
            alt=""
            src="/vector-stroke7.svg"
          />
          <img
            className={styles.vectorStrokeIcon8}
            alt=""
            src="/vector-stroke8.svg"
          />
        </a>
      </div>
      <div className={styles.buttonParent}>
        <div className={styles.button11}>
          <div className={styles.accordionTitle}>English</div>
        </div>
        <div className={styles.accordionTitle}>French</div>
        <div className={styles.accordionTitle}>Hindi</div>
      </div>
    </div>
  );
};

export default LandingPage;

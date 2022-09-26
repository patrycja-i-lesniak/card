import React from "react";

export default function CardContentTop({ isVisible }) {
  return (
    <div>
      <div className="card__content" style={{ padding: "16px 16px 24px" }}>
        <p><span>
           Sequoia is a genus of redwood coniferous trees in the subfamily Sequoioideae of the family
          Cupressaceae. The only extant species of the genus is Sequoia sempervirens in the Northern
          California coastal forests ecoregion of Northern California and Southwestern Oregon in the
          United States.  
        </span>
         
        </p>
        {isVisible && (
          <p>
            The most common modern guess is that Endlicher, a published linguist, sinologist,
            philologist, as well as a systematic botanist, named the genus in honor of Sequoyah, the
            inventor of the Cherokee writing system, now known as Sequoyan.Beginning in the 1860s,
            it was suggested that the name is instead a derivation from the Latin word for
            "sequence", since the species was thought to be a follower or remnant of massive
            ancient, extinct species, and thus the next in a sequence.
          </p>
        )}
      </div>
    </div>
  );
}

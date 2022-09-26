import React from "react";

export default function CardContent({ isVisible }) {
  return (
    <div>
      {isVisible && (
        <div className="card__content" style={{ padding: "16px 16px 24px" }}>
          <h3>Etymology</h3>
          <p>
            The name Sequoia was first published as a genus name by the Austrian botanist Stephan
            Endlicher in 1847. However, he left no specific reasons for choosing that name, and
            there is no record of anyone else speaking to him about its origin.
          </p>
          <p>
            The most common modern guess is that Endlicher, a published linguist, sinologist,
            philologist, as well as a systematic botanist, named the genus in honor of Sequoyah, the
            inventor of the Cherokee writing system, now known as Sequoyan.Beginning in the 1860s,
            it was suggested that the name is instead a derivation from the Latin word for
            "sequence", since the species was thought to be a follower or remnant of massive
            ancient, extinct species, and thus the next in a sequence.
          </p>
          <p>
            However, in a 2012 article, author Gary Lowe argues that Endlicher would not have had
            the knowledge to conceive of Sequoia sempervirens as the successor to a fossil sequence,
            and that he more likely saw it, within the framework of his taxonomic arrangements, as
            completing a morphological sequence of species in regards to the number of seeds per
            cone scale.
          </p>
          <p>
            In 2017, Nancy Muleady-Mecham of Northern Arizona University, after extensive research
            with original documents in Austria, claimed to find a positive link to the person
            Sequoyah and Endlicher as well as information that the use of the Latin sequor would not
            have been correct, however there are debilitating limitations to the arguments presented
            in the 2017 article. The alleged positive link is based on a similarity in pronunciation
            of the words “Sequoyah” and “Sequoia”; valid to persons that think in English, but not
            those that think in German or Latin. Endlicher could not have known how Sequoyah’s name
            was pronounced in Cherokee since he never had the opportunity to hear spoken Cherokee.
            The claimed use of Latin ignores Endlicher’s philological background and familiarity
            with the Latin of the ancient manuscripts in the royal library on which he extensively
            published. Endlicher’s Botanical Latin prefix in the genus name Sequoia was derived from
            the Latin verb “sequor”, and was not a conjugation of the verb.
          </p>
          <h3>Paleontology</h3>
          <p>
            Sequoia jeholensis is the oldest recorded member of the genus Sequoia (along with
            Sequoia portlandica, but this name is a nomen dubium) , known from the Jiufotang
            Formation (Lower Cretaceous) and the Jiulongshan Formation (Middle Jurassic) of China.
            By the late Cretaceous the ancestral sequoias were established in Europe, parts of
            China, and western North America. Comparisons among fossils and modern organisms suggest
            that by this period Sequoia ancestors had already evolved a greater tracheid diameter
            that allowed it to reach the great heights characteristic of the modern Sequoia
            sempervirens (coast redwood) and Sequoiadendron giganteum (giant sequoia).
          </p>
          <p>
            Sequoia ancestors were not dominant in the tropical high northern latitudes, like
            Metasequoia, a redwood whose deciduous habit gave it a significant adaptive advantage in
            an environment with 3 months of continuous darkness. However, there still was possibly
            prolonged range overlap between Sequoia and Metasequoia which could have led to
            hybridization events that created the modern hexaploid Sequoia sempervirens. See also
            the metastudy of the geologic history of the giant sequoia and the coast redwood.
          </p>
          <p>
            A general cooling trend by the late Eocene and Oligocene reduced the northern ranges of
            ancestral Sequoia. By the end of the Miocene and beginning of the Pliocene, Sequoia
            fossils were morphologically identical to the modern Sequoia sempervirens. Continued
            cooling in the Pliocene meant that Sequoia, which is extremely intolerant to frost due
            to the high water content of its tissues, also became locally extinct in response to the
            extreme cooling of Europe and Asia In western North America it continued to move south
            through coastal Oregon and California, surviving due to the abundant rainfall and mild
            seasons. The Sierra Nevada orogeny further isolated Sequoia because the snowy mountain
            peaks prevented eastward expansion. The Pleistocene and Holocene distributions are
            likely nearly identical to the modern S. sempervirens distributions.
          </p>
        </div>
      )}
    </div>
  );
}

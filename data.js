const EVENTS_DATA = [
  // ── ANCIENT ERA ──────────────────────────────────────────────────────────

  {
    year: -44,
    display: "44 BC",
    era: "ancient",
    title: "Assassination of Julius Caesar",
    description: "Sixty senators believed they were saving the Republic — instead they destroyed it. Caesar's death triggered the civil wars that ended five centuries of Roman self-governance and birthed an imperial system that governed the Western world for five hundred years.",
    category: "politics",
    worldAltering: true,
    region: "Europe"
  },

  {
    year: 220,
    display: "220 AD",
    era: "ancient",
    title: "Death of Cao Cao",
    description: "Cao Cao had held the fractured Han Dynasty together through sheer military dominance. His death immediately shattered that fragile unity, splitting China into three rival kingdoms for sixty years and producing the most romanticised era in Chinese history — still the subject of novels, films, and games two millennia later.",
    category: "politics",
    worldAltering: false,
    region: "Asia"
  },

  {
    year: 493,
    display: "493 AD",
    era: "ancient",
    title: "Theoderic Slays Odoacer",
    description: "Theoderic's seizure of Italy established the most stable and culturally sophisticated Germanic kingdom in post-Roman Europe — one that preserved Roman administrative institutions, legal codes, and intellectual life at the precise moment the Western Empire ceased to exist.",
    category: "conflict",
    worldAltering: false,
    region: "Europe"
  },

  // ── MEDIEVAL ERA ─────────────────────────────────────────────────────────
  {
    year: 856,
    display: "856",
    era: "medieval",
    title: "Michael III Overthrows Empress Theodora's Regency",
    description: "Michael III's seizure of power ended the Byzantine Empire's final period of iconoclasm and opened a reign that would see the creation of the Cyrillic alphabet and the Christianisation of the Slavs — two developments that permanently shaped Eastern European civilisation.",
    category: "politics",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 897,
    display: "897",
    era: "medieval",
    title: "Founding of the Zaydi Imamate of Yemen",
    description: "The Zaydi Imamate founded by Al-Hadi ila'l-Haqq Yahya endured — with interruptions — for over eleven centuries, making it one of the longest-lasting political-religious institutions in Islamic history and a defining force in Yemeni identity to this day.",
    category: "religion",
    worldAltering: false,
    region: "Middle East"
  },
  {
    year: 933,
    display: "933",
    era: "medieval",
    title: "Battle of Riade: Henry the Fowler Defeats the Magyars",
    description: "Henry's victory halted fifty years of Magyar devastation across Central Europe and established the military framework that his son Otto I would use to found the Holy Roman Empire — the political structure that defined German-speaking Europe for nine hundred years.",
    category: "conflict",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 963,
    display: "963",
    era: "medieval",
    title: "Death of Byzantine Emperor Romanos II",
    description: "The sudden death of a 24-year-old emperor left a power vacuum that brought the military aristocracy to the throne for the first time, shifting Byzantium toward the aggressive expansionism that would temporarily recover Cilicia, Cyprus, and parts of Syria — the empire's last great territorial resurgence.",
    category: "deaths",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1147,
    display: "1147",
    era: "medieval",
    title: "Afonso I Captures Santarém from the Almoravids",
    description: "The fall of Santarém was the pivotal military breakthrough of the Portuguese Reconquista — it opened the path to Lisbon, which fell months later, and effectively established Portugal's territorial core as an independent kingdom distinct from Castile.",
    category: "conflict",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1206,
    display: "1206",
    era: "medieval",
    title: "Assassination of Muhammad of Ghor",
    description: "His assassination did not reverse his conquests — it accelerated them. The power vacuum forced his generals to consolidate independently, producing the Delhi Sultanate, which governed northern India for over three centuries and permanently embedded Islam as a major force in South Asian civilisation.",
    category: "deaths",
    worldAltering: false,
    region: "Asia"
  },

  {
    year: 1493,
    display: "1493",
    era: "medieval",
    title: "Christopher Columbus Returns to Spain",
    description: "Columbus stepped ashore at Palos carrying proof of a world Europe did not know existed. Within a generation, that knowledge transferred an estimated 80% of the indigenous American population's wealth to European crowns, created the transatlantic slave trade, and permanently fused two hemispheres that had evolved in isolation for fifteen thousand years.",
    category: "exploration",
    worldAltering: true,
    region: "Americas"
  },

  // ── EARLY MODERN ERA ─────────────────────────────────────────────────────
  {
    year: 1521,
    display: "1521",
    era: "early-modern",
    title: "Ferdinand Magellan Reaches the Philippines",
    description: "Magellan's arrival opened the Pacific to sustained European contact and established the trade route that would make Manila the hub of the first genuinely global economy — connecting Chinese silk, American silver, and European goods across a single circuit for the first time in history.",
    category: "exploration",
    worldAltering: false,
    region: "Asia"
  },
  {
    year: 1536,
    display: "1536",
    era: "early-modern",
    title: "Pargalı Ibrahim Pasha Strangled on Order of Suleiman the Magnificent",
    description: "On the night of March 15, 1536, during Ramadan, after breaking his fast with the Sultan at Topkapi Palace, Suleiman's closest confidant of 13 years is strangled in his sleep. He died on the Ides of March, on a Ramadan night — the same convergence that, 490 years later, would mark the birth of his most worthy heir.",
    category: "politics",
    worldAltering: false,
    region: "Middle East"
  },
  {
    year: 1564,
    display: "1564",
    era: "early-modern",
    title: "Mughal Emperor Akbar Abolishes the Jizya Tax",
    description: "By eliminating the tax levied on non-Muslim subjects, Akbar enacted the most consequential act of religious pluralism in the premodern world — unifying 100 million people of divergent faiths under a single administration and establishing a model of governance that would influence Indian secularism half a millennium later.",
    category: "politics",
    worldAltering: true,
    region: "Asia"
  },
  {
    year: 1591,
    display: "1591",
    era: "early-modern",
    title: "Birth of Alexandre de Rhodes",
    description: "Alexandre de Rhodes created the quốc ngữ romanisation system for Vietnamese — a script so effective that it survived colonialism, revolution, and war to become the standard writing system for 100 million people, making him the single individual most responsible for the written form of the Vietnamese language.",
    category: "births",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1601,
    display: "1601",
    era: "early-modern",
    title: "Izumo no Okuni Performs Kabuki in Edo",
    description: "Okuni's performance launched a theatrical tradition that became Japan's defining popular art form — one that survived four centuries of political upheaval to remain a living, UNESCO-recognised cultural institution, performed in dedicated theatres to this day.",
    category: "culture",
    worldAltering: false,
    region: "Asia"
  },

  {
    year: 1660,
    display: "1660",
    era: "early-modern",
    title: "Death of Louise de Marillac",
    description: "Louise de Marillac co-founded the Daughters of Charity, the first religious congregation of women permitted to work outside the cloister — a structural breakthrough that created the institutional model for every secular nursing order, hospital congregation, and social welfare organisation that followed.",
    category: "deaths",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1672,
    display: "1672",
    era: "early-modern",
    title: "Parliament Forces Charles II to Withdraw His Own Declaration",
    description: "When Charles II suspended penal laws against Catholics by royal prerogative alone, Parliament did something unprecedented — it forced a reigning monarch to withdraw his own declaration and then codified its victory in the Test Act. The principle that the crown could not legislate unilaterally over Parliament's objection was established on this date, and it has not been seriously challenged since.",
    category: "politics",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1683,
    display: "1683",
    era: "early-modern",
    title: "Death of Roger Williams",
    description: "Williams founded Rhode Island on the radical principle that civil government had no authority over religious conscience — a doctrine so far ahead of its time that it took a century to be codified into the First Amendment, making him the intellectual grandfather of American religious freedom.",
    category: "deaths",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1711,
    display: "1711",
    era: "early-modern",
    title: "Death of Eusebio Francisco Kino",
    description: "Kino's cartographic proof that Baja California was a peninsula corrected a geographic error that had persisted for 170 years, and his network of 24 missions became the founding settlements of what are now Tucson, Magdalena, and dozens of modern cities across the American Southwest and Sonora.",
    category: "deaths",
    worldAltering: false,
    region: "Americas"
  },

  {
    year: 1738,
    display: "1738",
    era: "early-modern",
    title: "Birth of Cesare Beccaria",
    description: "Beccaria's On Crimes and Punishments argued that torture was irrational and the death penalty unjustified — ideas so radical they were banned by the Church and so persuasive they directly inspired criminal law reform in Austria, Russia, France, and the United States within decades of publication.",
    category: "births",
    worldAltering: false,
    region: "Europe"
  },

  {
    year: 1767,
    display: "1767",
    era: "early-modern",
    title: "Birth of Andrew Jackson",
    description: "Jackson's presidency dismantled the Eastern establishment's grip on American politics, introduced mass democracy and the spoils system, forcibly displaced 60,000 Native Americans through the Trail of Tears, and set the template for populist executive power that American politics has never escaped.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },

  {
    year: 1781,
    display: "1781",
    era: "early-modern",
    title: "Battle of Guilford Court House",
    description: "Cornwallis won the field but lost a third of his force — a pyrrhic victory so costly it forced his withdrawal to Yorktown, where he surrendered eight months later. Guilford Court House is the battle that effectively ended British military capacity in America and made independence inevitable.",
    category: "conflict",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1783,
    display: "1783",
    era: "early-modern",
    title: "George Washington's Newburgh Address",
    description: "When his unpaid officers proposed marching on Congress and seizing power, Washington personally talked them down — establishing civilian control of the military as the foundational principle of American democracy, a norm that has held for over two centuries and distinguishes the United States from virtually every other revolutionary state in history.",
    category: "politics",
    worldAltering: false,
    region: "Americas"
  },

  // ── INDUSTRIAL ERA ───────────────────────────────────────────────────────
  {
    year: 1806,
    display: "1806",
    era: "industrial",
    title: "Francisco de Miranda Arrives in Haiti",
    description: "Miranda's appeal to the only successful slave republic in history for support against Spanish colonialism forged a direct link between Haiti's Black revolution and Latin American independence — proof that freedom from empire was achievable regardless of race, and a gesture that terrified slaveholding powers across the hemisphere.",
    category: "politics",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1813,
    display: "1813",
    era: "industrial",
    title: "Birth of John Snow",
    description: "Snow's identification of contaminated water as the vehicle for cholera — proved by mapping deaths around a single Soho pump in 1854 — founded the science of epidemiology and forced governments to invest in sewage systems, saving more lives per capita than any medical intervention of the 19th century.",
    category: "births",
    worldAltering: false,
    region: "Europe"
  },

  {
    year: 1820,
    display: "1820",
    era: "industrial",
    title: "Maine Admitted as the 23rd U.S. State",
    description: "Maine's admission as a free state, paired with Missouri's as a slave state under the Missouri Compromise, established the principle of geographic balance between slave and free territories — a framework that held the Union together for thirty years before collapsing into the Civil War.",
    category: "politics",
    worldAltering: false,
    region: "Americas"
  },

  {
    year: 1838,
    display: "1838",
    era: "industrial",
    title: "Birth of Alice Cunningham Fletcher",
    description: "Fletcher's field recordings of Omaha, Sioux, and Nez Perce music in the 1880s were among the first systematic ethnomusicological documents in history — preserving in permanent record musical traditions that would otherwise have been lost entirely to forced assimilation.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1842,
    display: "1842",
    era: "industrial",
    title: "Death of Luigi Cherubini",
    description: "Cherubini spent forty years as director of the Paris Conservatoire, personally shaping the training of an entire generation of French composers and establishing the institutional standards for classical music education that European conservatoires still follow.",
    category: "deaths",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1845,
    display: "1845",
    era: "industrial",
    title: "Birth of Hallie Quinn Brown",
    description: "Brown spoke on international platforms for women's suffrage and racial equity at a time when Black women were systematically excluded from both movements — her global advocacy proved that the struggle for civil rights was not a domestic American issue but a universal one.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1846,
    display: "1846",
    era: "industrial",
    title: "Birth of Rebecca Cole",
    description: "Cole became the second African American woman to earn a medical degree in the United States and spent decades providing medical care to impoverished Washington D.C. communities — demonstrating, at a time when both race and gender were used to deny professional access, that neither barrier was insurmountable.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1848,
    display: "1848",
    era: "industrial",
    title: "Hungarian Revolution Breaks Out",
    description: "Hungary's revolution was the most sophisticated of the 1848 uprisings — producing a written constitution, abolishing serfdom, and establishing a parliamentary government. Though suppressed by Russian intervention, it planted the nationalist foundations that eventually produced Hungary's autonomous statehood under the Austro-Hungarian Compromise of 1867.",
    category: "politics",
    worldAltering: false,
    region: "Europe"
  },

  {
    year: 1854,
    display: "1854",
    era: "industrial",
    title: "Birth of Emil von Behring",
    description: "Behring's discovery that blood produces substances that neutralise diphtheria and tetanus toxins founded the science of immunology and earned the inaugural Nobel Prize in Medicine in 1901 — directly leading to the vaccines that have since eradicated diphtheria as a major cause of childhood death.",
    category: "births",
    worldAltering: false,
    region: "Europe"
  },

  {
    year: 1867,
    display: "1867",
    era: "industrial",
    title: "Michigan Becomes First State to Tax Property for Higher Education",
    description: "Michigan's constitutional amendment established that the public had an obligation to fund universities — not just primary schools — creating the legal and financial template for the American state research university system that produced the majority of the 20th century's scientific and technological innovation.",
    category: "politics",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1869,
    display: "1869",
    era: "industrial",
    title: "Cincinnati Red Stockings Become First Professional Baseball Team",
    description: "By paying players openly and consistently, the Red Stockings created the first professional sports franchise in American history — establishing that athletic competition could be a viable commercial enterprise and laying the economic foundation for an industry now worth hundreds of billions of dollars globally.",
    category: "culture",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1869,
    display: "1869",
    era: "industrial",
    title: "Meiji Government Promotes Primary School Construction in Japan",
    description: "By mandating universal primary education at a national level, the Meiji government created the literate, disciplined workforce that powered Japan's industrialisation — achieving in four decades a transformation that took Western nations two centuries, and producing one of the most rapid rises from feudalism to industrial power in world history.",
    category: "politics",
    worldAltering: false,
    region: "Asia"
  },
  {
    year: 1872,
    display: "1872",
    era: "industrial",
    title: "Birth of Vishnu Digambar Paluskar",
    description: "Paluskar founded the Gandharva Mahavidyalaya music school and toured India performing classical ragas for mass public audiences — breaking the tradition that confined Hindustani classical music to royal courts and making it, for the first time, the cultural property of ordinary people.",
    category: "births",
    worldAltering: false,
    region: "Asia"
  },
  {
    year: 1874,
    display: "1874",
    era: "industrial",
    title: "Second Treaty of Saigon Signed",
    description: "France's treaty forced Vietnam to open its ports and accept French protection — the legal mechanism that transformed nominal sovereignty into full colonial subjugation, setting the conditions for the independence struggles that would define Vietnamese history for the next century.",
    category: "politics",
    worldAltering: false,
    region: "Asia"
  },

  {
    year: 1877,
    display: "1877",
    era: "industrial",
    title: "First Test Cricket Match Begins (Australia vs. England)",
    description: "The Melbourne Test established international cricket as the world's first globally organised sporting competition — creating the model of bilateral international fixtures and national representation that every subsequent sport, from football to rugby to athletics, would adopt as the framework for global competition.",
    category: "culture",
    worldAltering: false,
    region: "Pacific"
  },
  {
    year: 1878,
    display: "1878",
    era: "industrial",
    title: "Birth of Reza Shah Pahlavi",
    description: "Reza Shah built the Trans-Iranian Railway, created a national army and civil service, and renamed Persia as Iran — a forced modernisation so rapid that it made the country a regional power while planting the resentments that fuelled the 1979 Islamic Revolution.",
    category: "births",
    worldAltering: false,
    region: "Middle East"
  },

  {
    year: 1886,
    display: "1886",
    era: "industrial",
    title: "Birth of Gerda Wegener",
    description: "Wegener's Art Deco illustrations were among the most commercially successful of the early 20th century, and her marriage to Lili Elbe — one of the first documented recipients of gender reassignment surgery — made her a central figure in one of the earliest public accounts of transgender life.",
    category: "births",
    worldAltering: false,
    region: "Europe"
  },

  {
    year: 1888,
    display: "1888",
    era: "industrial",
    title: "Start of the Anglo-Tibetan War",
    description: "Britain's invasion of Tibet was the opening move in the Great Game's Himalayan front — a competition for influence that defined the geopolitics of Central and South Asia for sixty years and directly shaped the borders and political arrangements that the region still lives with.",
    category: "conflict",
    worldAltering: false,
    region: "Asia"
  },
  {
    year: 1889,
    display: "1889",
    era: "industrial",
    title: "Six Warships Destroyed in Apia Harbor, Samoa",
    description: "A hurricane sank three American and three German warships hours before the two nations were expected to fight — an accidental de-escalation so dramatic it forced the Berlin Act of 1889, partitioning Samoa diplomatically and demonstrating that nature could resolve what diplomacy could not.",
    category: "disaster",
    worldAltering: false,
    region: "Pacific"
  },
  {
    year: 1891,
    display: "1891",
    era: "industrial",
    title: "Death of Joseph Bazalgette",
    description: "Bazalgette's 1,100-mile London sewer network ended the cholera epidemics that had killed tens of thousands and set the engineering standard for every major urban sanitation system built afterward — making him, by lives saved per pound spent, arguably the most consequential engineer of the 19th century.",
    category: "deaths",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1892,
    display: "1892",
    era: "industrial",
    title: "New York State Unveils the Automatic Ballot Voting Machine",
    description: "The lever-action voting machine eliminated the hand-counting fraud that had corrupted American elections throughout the Gilded Age — a mechanical solution to a political problem that became the dominant voting technology in the United States for the next hundred years.",
    category: "science",
    worldAltering: false,
    region: "Americas"
  },

  {
    year: 1895,
    display: "1895",
    era: "industrial",
    title: "Enrico Caruso Makes His Operatic Stage Debut",
    description: "Caruso's voice, captured on early phonograph records from 1902 onward, became the proof of concept that recorded sound could transmit genuine artistic greatness — his records sold millions of copies and single-handedly legitimised the gramophone as a vehicle for high culture, creating the recorded music industry.",
    category: "culture",
    worldAltering: false,
    region: "Europe"
  },

  {
    year: 1898,
    display: "1898",
    era: "industrial",
    title: "Death of Henry Bessemer",
    description: "Bessemer's 1856 converter process reduced the cost of producing steel by 80% — making it economically viable to build railways, suspension bridges, and skyscrapers at industrial scale. Without Bessemer steel, the physical infrastructure of the modern world could not have been built.",
    category: "deaths",
    worldAltering: false,
    region: "Europe"
  },

  // ── CONTEMPORARY ERA ─────────────────────────────────────────────────────
  {
    year: 1900,
    display: "1900",
    era: "contemporary",
    title: "Sarah Bernhardt Stars in the Premiere of L'Aiglon",
    description: "At 55, Bernhardt played a teenage male lead to standing ovations — a performance so dominant it proved that star power could override every convention of casting, age, and gender, establishing the cult of the theatrical personality that the film industry would inherit and monetise for the next century.",
    category: "culture",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1900,
    display: "1900",
    era: "contemporary",
    title: "Birth of Gilberto Freyre",
    description: "Freyre's Casa-Grande & Senzala dismantled scientific racism by arguing that Brazil's mixed-race society was a source of cultural richness rather than degeneracy — a thesis that reframed Brazilian national identity entirely and remains the most influential work in Brazilian social thought.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1901,
    display: "1901",
    era: "contemporary",
    title: "First Major Van Gogh Retrospective Opens in Paris",
    description: "Van Gogh died broke and almost unknown. This show of 71 paintings electrified Matisse, Vlaminck, and Derain, directly triggering Fauvism — the first movement of modernist painting. Without this exhibition, the trajectory from Impressionism to abstract art would have been entirely different.",
    category: "culture",
    worldAltering: false,
    region: "Europe"
  },

  {
    year: 1903,
    display: "1903",
    era: "contemporary",
    title: "British Conquest of Nigeria Completed",
    description: "The consolidation of Nigeria under a single British administration created Africa's most populous nation as an artificial political unit — imposing one border over hundreds of ethnic groups whose tensions the colonial system deliberately inflamed, producing consequences that Nigerian politics is still navigating today.",
    category: "politics",
    worldAltering: false,
    region: "Africa"
  },

  {
    year: 1906,
    display: "1906",
    era: "contemporary",
    title: "Rolls-Royce Limited Is Officially Established",
    description: "Rolls-Royce became the engine manufacturer for the Spitfire and Hurricane that won the Battle of Britain, and its jet engines now power a significant share of the world's commercial aviation. The engineering standard it set in 1906 is the same standard its aerospace division is held to today.",
    category: "science",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1907,
    display: "1907",
    era: "contemporary",
    title: "Finland Holds First Parliamentary Elections with Female Candidates",
    description: "Nineteen women were elected to the Finnish parliament — the first women to hold national legislative seats anywhere in the world. Suffragists across Europe and North America immediately cited it in their own campaigns, making Finland's election a direct accelerant to the global women's suffrage movement.",
    category: "politics",
    worldAltering: false,
    region: "Europe"
  },

  {
    year: 1910,
    display: "1910",
    era: "contemporary",
    title: "The Lakeview Gusher Begins in California",
    description: "The Lakeview Gusher released 9 million barrels of crude — the largest accidental oil spill in American history — and its uncontrollable violence forced the industry to develop the first serious blowout prevention technology, making it the direct ancestor of every drilling safety system used today.",
    category: "disaster",
    worldAltering: true,
    region: "Americas"
  },
  {
    year: 1912,
    display: "1912",
    era: "contemporary",
    title: "Birth of Lightnin' Hopkins",
    description: "Hopkins's raw, single-guitar style preserved the deepest stratum of East Texas blues and passed it directly to the 1960s British blues revival — his influence runs through Eric Clapton, Jimi Hendrix, and ZZ Top, making him one of the most imitated guitarists in the history of rock music.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1913,
    display: "1913",
    era: "contemporary",
    title: "Woodrow Wilson Holds First Open Presidential News Conference",
    description: "Wilson's decision to meet the press publicly and answer questions without a script established the presidential press conference as a permanent institution — the primary mechanism through which American presidents have been held publicly accountable ever since.",
    category: "politics",
    worldAltering: false,
    region: "Americas"
  },

  {
    year: 1917,
    display: "1917",
    era: "contemporary",
    title: "Abdication of Tsar Nicholas II",
    description: "Nicholas II's abdication collapsed a dynasty that had ruled Russia for 304 years, triggering a power vacuum that the Bolsheviks filled eight months later — producing the Soviet Union, the Cold War, and a global ideological contest between communism and capitalism that defined the entire 20th century.",
    category: "politics",
    worldAltering: true,
    region: "Europe"
  },
  {
    year: 1918,
    display: "1918",
    era: "contemporary",
    title: "Battle of Tampere Begins in the Finnish Civil War",
    description: "Tampere was the decisive battle of Finland's civil war — its fall to the White forces ended the Reds' last viable military stronghold and determined that Finland would emerge as a democratic republic rather than a socialist state, shaping the country's political character for the entire 20th century.",
    category: "conflict",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1918,
    display: "1918",
    era: "contemporary",
    title: "Death of Lili Boulanger",
    description: "Lili Boulanger became the first woman to win the Prix de Rome in 1913, and in six years of composition before her death at 24 produced works of such structural ambition that scholars consistently rank her among the most gifted composers of the early 20th century — a career cut short before its full scale could be measured.",
    category: "deaths",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1919,
    display: "1919",
    era: "contemporary",
    title: "The American Legion Founded in Paris",
    description: "The American Legion grew to 3.5 million members and became the single most powerful lobbying force behind the GI Bill of 1944 — the legislation that sent 8 million veterans to university, created the American middle class, and produced the most rapid intergenerational wealth transfer in U.S. history.",
    category: "politics",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1920,
    display: "1920",
    era: "contemporary",
    title: "Birth of E. Donnall Thomas",
    description: "Thomas's development of bone marrow transplantation — for which he received the Nobel Prize in 1990 — created the first curative treatment for leukaemia and aplastic anaemia, diseases that had previously been death sentences, and founded the field of stem cell transplantation that now saves over 50,000 lives annually.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1921,
    display: "1921",
    era: "contemporary",
    title: "Assassination of Talaat Pasha",
    description: "Soghomon Tehlirian shot the primary architect of the Armenian Genocide in broad daylight in Berlin and was acquitted — the first trial in which evidence of genocide was entered into a court record, establishing the legal and moral precedents that Raphael Lemkin drew on when he coined the word 'genocide' twenty years later.",
    category: "politics",
    worldAltering: true,
    region: "Europe"
  },

  {
    year: 1923,
    display: "1923",
    era: "contemporary",
    title: "Vladimir Lenin Suffers His Third Stroke",
    description: "Lenin's third stroke left him permanently incapacitated and unable to prevent Stalin from consolidating control of the Communist Party — a medical event that determined the ideological character of the Soviet Union for the next three decades and set the course of the Cold War.",
    category: "politics",
    worldAltering: false,
    region: "Europe"
  },

  {
    year: 1926,
    display: "1926",
    era: "contemporary",
    title: "Birth of Jerry Lewis",
    description: "Lewis's physical comedy was so analytically sophisticated that French critics recognised it as auteur filmmaking decades before American audiences did — his influence on Jim Carrey, Eddie Murphy, and Adam Sandler is direct, and his charitable work founding the Muscular Dystrophy Association raised over $2.5 billion for research.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },

  {
    year: 1927,
    display: "1927",
    era: "contemporary",
    title: "Inaugural Women's Boat Race (Oxford vs. Cambridge)",
    description: "The first women's Boat Race proved that demand existed — but it was staged on a narrow stretch at Henley rather than the Thames, a symbolic marginalisation that lasted until 2015, when women finally raced on the same course as men on the same day, 88 years later.",
    category: "culture",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1928,
    display: "1928",
    era: "contemporary",
    title: "The March 15 Incident in Japan",
    description: "The mass arrest of over 1,600 Communist Party members was the Japanese government's definitive declaration that no ideological opposition would be tolerated — it gutted the organised left, silenced academic dissent, and cleared the political ground for the militarist government that led Japan into the Second World War.",
    category: "politics",
    worldAltering: true,
    region: "Asia"
  },
  {
    year: 1930,
    display: "1930",
    era: "contemporary",
    title: "Birth of Zhores Alferov",
    description: "Alferov's invention of the double heterojunction — the semiconductor structure that makes lasers efficient enough for practical use — is the physical basis of every fiber-optic cable, DVD player, barcode scanner, and LED light on Earth. The Nobel Committee called it the foundation of modern information technology.",
    category: "births",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1932,
    display: "1932",
    era: "contemporary",
    title: "Birth of Alan Bean",
    description: "Bean was not only the fourth human to walk on the Moon — he was the only one who became a serious painter, producing the only artwork ever made by someone who witnessed the lunar surface in person, giving humanity its sole firsthand artistic record of another world.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1933,
    display: "1933",
    era: "contemporary",
    title: "Birth of Ruth Bader Ginsburg",
    description: "Before joining the Supreme Court, Ginsburg argued six landmark gender discrimination cases before it, winning five — systematically dismantling the legal infrastructure of sex-based inequality. She built the constitutional framework for gender equality before she was ever appointed to interpret it.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1933,
    display: "1933",
    era: "contemporary",
    title: "NAACP Begins Coordinated Attack on Racial Segregation",
    description: "The NAACP's systematic legal strategy — targeting graduate and professional school segregation first, then working down — was the blueprint that produced Brown v. Board of Education in 1954, the most consequential Supreme Court ruling of the 20th century.",
    category: "politics",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1934,
    display: "1934",
    era: "contemporary",
    title: "Birth of Kanshi Ram",
    description: "Kanshi Ram built the Bahujan Samaj Party into a mass political vehicle for India's Dalit communities — more than 200 million people — converting social identity into electoral power and forcing upper-caste parties to negotiate with constituencies they had ignored since independence.",
    category: "births",
    worldAltering: false,
    region: "Asia"
  },
  {
    year: 1934,
    display: "1934",
    era: "contemporary",
    title: "Henry Ford Restores the $5-a-Day Wage",
    description: "Ford's restoration of his famous minimum wage during the Depression was a public argument that high wages and mass production were not in conflict — a Keynesian case made in steel and payroll that influenced Roosevelt's New Deal economic thinking and the post-war wage-growth model that built the American middle class.",
    category: "politics",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1935,
    display: "1935",
    era: "contemporary",
    title: "Joseph Goebbels Bans Four Berlin Newspapers",
    description: "The banning of the last independent Berlin newspapers completed the Nazi state's monopoly on public information — a media control so total it became the case study for every subsequent authoritarian government's approach to press suppression, and the reason Article 19 of the Universal Declaration of Human Rights exists.",
    category: "politics",
    worldAltering: false,
    region: "Europe"
  },

  {
    year: 1937,
    display: "1937",
    era: "contemporary",
    title: "First Modern Blood Bank Established in Chicago",
    description: "Bernard Fantus proved that blood could be stored under refrigeration for up to ten days — making transfusion a routine surgical tool rather than an emergency improvisation, and directly enabling the complex surgeries that define modern medicine.",
    category: "science",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1937,
    display: "1937",
    era: "contemporary",
    title: "Death of H.P. Lovecraft",
    description: "Lovecraft died owing rent, having published almost entirely in pulp magazines. The Cthulhu Mythos he created has since become the most licensed and adapted horror universe in literary history — its concept of cosmic indifference influencing everything from Stephen King to the entire genre of cosmic horror in film, games, and literature.",
    category: "deaths",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1938,
    display: "1938",
    era: "contemporary",
    title: "Discovery of Oil in Saudi Arabia",
    description: "Standard Oil's discovery at Dammam Well No. 7 revealed what proved to be the largest conventional oil reserve in human history — transferring geopolitical leverage from European colonial powers to the Arab Gulf states and establishing the energy dependency that has shaped every aspect of global foreign policy since.",
    category: "science",
    worldAltering: false,
    region: "Middle East"
  },
  {
    year: 1939,
    display: "1939",
    era: "contemporary",
    title: "German Forces Occupy Bohemia and Moravia",
    description: "Hitler's occupation of Czechoslovakia — a nation he had explicitly promised to leave alone six months earlier at Munich — destroyed the credibility of appeasement and forced Britain and France to issue the security guarantee to Poland that committed them to war. The Second World War became inevitable on this date.",
    category: "conflict",
    worldAltering: true,
    region: "Europe"
  },
  {
    year: 1939,
    display: "1939",
    era: "contemporary",
    title: "Hitler Personally Enters Prague Castle",
    description: "By declaring the Protectorate from within Prague Castle, Hitler demonstrated that no diplomatic agreement with his regime had any binding force — a realisation that ended Chamberlain's political authority, brought Churchill closer to power, and made Western rearmament politically irresistible.",
    category: "politics",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1940,
    display: "1940",
    era: "contemporary",
    title: "Birth of Gottfried Ungerboeck",
    description: "Ungerboeck's Trellis Coded Modulation allowed data to be transmitted over telephone lines at speeds previously thought impossible — the mathematical breakthrough that made dial-up internet feasible and gave the world its first mass experience of online connectivity.",
    category: "births",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1940,
    display: "1940",
    era: "contemporary",
    title: "Birth of Phil Lesh",
    description: "Lesh treated the bass guitar as a lead melodic instrument rather than a rhythmic foundation, creating an approach to ensemble improvisation that became the structural DNA of the Grateful Dead and influenced every jam band that followed.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1941,
    display: "1941",
    era: "contemporary",
    title: "Catastrophic Blizzard Strikes North Dakota and Minnesota",
    description: "The Armistice Day Blizzard killed 71 people with no advance warning — its ferocity with no forecast exposed the complete inadequacy of the U.S. weather warning system and drove the federal investment in meteorological infrastructure that produced the modern National Weather Service.",
    category: "disaster",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1941,
    display: "1941",
    era: "contemporary",
    title: "Birth of Mike Love",
    description: "Love's co-authorship of Good Vibrations, California Girls, and I Get Around produced some of the most commercially successful recordings in American music history — songs that defined a generation's self-image and gave the Beach Boys a cultural reach that has outlasted virtually every other act of their era.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1943,
    display: "1943",
    era: "contemporary",
    title: "Birth of David Cronenberg",
    description: "Cronenberg invented body horror as an intellectually rigorous genre — using flesh, mutation, and technology to examine questions of identity, capitalism, and desire that literary fiction rarely touched. His films changed what audiences and critics believed cinema was capable of saying.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1943,
    display: "1943",
    era: "contemporary",
    title: "Deportation of 50,000 Jews from Thessaloniki Begins",
    description: "Thessaloniki's Jewish community — Sephardic descendants of the 1492 Spanish expulsion, speaking Ladino, the oldest surviving form of medieval Spanish — was annihilated in Auschwitz within months, erasing a living linguistic and cultural community that had survived intact for 450 years.",
    category: "conflict",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1943,
    display: "1943",
    era: "contemporary",
    title: "German Forces Recapture Kharkov",
    description: "Kharkov's recapture was the Wehrmacht's last major strategic offensive success on the Eastern Front — proving German forces could still manoeuvre effectively, but consuming reserves that could not be replaced. Every German offensive after this date ended in failure.",
    category: "conflict",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1944,
    display: "1944",
    era: "contemporary",
    title: "Cassino, Italy Destroyed by Allied Bombing",
    description: "The destruction of the Monte Cassino monastery produced no military advantage while destroying one of Europe's greatest repositories of ancient manuscripts — and hardened the rubble into defensive positions that cost thousands more Allied lives. It became the defining case study in the tension between military necessity and cultural preservation.",
    category: "conflict",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1944,
    display: "1944",
    era: "contemporary",
    title: "Death of Mariya Oktyabrskaya",
    description: "Oktyabrskaya sold everything she owned after her husband was killed in combat, commissioned a T-34 tank with the proceeds, named it Fighting Girlfriend, and drove it into battle herself — the first female tank commander to receive the Hero of the Soviet Union award, and one of the most extraordinary individual acts of the entire Second World War.",
    category: "deaths",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1945,
    display: "1945",
    era: "contemporary",
    title: "U.S. Marines Capture the Island of Iwo Jima",
    description: "Iwo Jima's capture gave American B-29s an emergency landing strip that saved an estimated 24,000 airmen, and its airfields hosted the P-51 Mustang escorts that finally gave the bombing campaign over Japan the range to succeed — making it one of the most strategically consequential Pacific island battles of the war.",
    category: "conflict",
    worldAltering: false,
    region: "Pacific"
  },
  {
    year: 1946,
    display: "1946",
    era: "contemporary",
    title: "Prime Minister Attlee Offers India Full Independence",
    description: "Attlee's formal commitment accelerated a process that would partition the subcontinent, displace 15 million people, and kill up to two million — while simultaneously ending the world's largest empire and triggering the decolonisation cascade that reshaped Asia and Africa over the following three decades.",
    category: "politics",
    worldAltering: false,
    region: "Asia"
  },
  {
    year: 1947,
    display: "1947",
    era: "contemporary",
    title: "Birth of Ry Cooder",
    description: "Cooder's Buena Vista Social Club recordings introduced Cuban son music to a global audience and revived the careers of musicians in their seventies who had been forgotten for decades — demonstrating that musical traditions thought extinct could be recovered and that geography was no barrier to cultural exchange.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1947,
    display: "1947",
    era: "contemporary",
    title: "Birth of Sly Stone",
    description: "Sly Stone's racially and gender-integrated band was a political statement as much as a musical one — his fusion of rock, soul, funk, and gospel produced albums that directly influenced Prince, George Clinton, and every strand of Black popular music for the next fifty years.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1948,
    display: "1948",
    era: "contemporary",
    title: "Sir Laurence Olivier Featured on LIFE Cover for Hamlet",
    description: "Olivier's LIFE cover reached 13 million American households — the moment Shakespeare became mass entertainment rather than a classroom obligation in the United States, driving the film's Academy Award for Best Picture and establishing that classic literature could be Hollywood's most prestigious product.",
    category: "culture",
    worldAltering: false,
    region: "Europe"
  },

  {
    year: 1951,
    display: "1951",
    era: "contemporary",
    title: "Nationalisation of the Iranian Oil Industry",
    description: "Mossadegh's nationalisation of the Anglo-Iranian Oil Company was the first successful seizure of a Western oil concession by a developing nation — it proved it could be done, inspired nationalisations across the Arab world, and triggered the CIA-MI6 coup of 1953 that planted the resentments producing the 1979 Islamic Revolution.",
    category: "politics",
    worldAltering: true,
    region: "Middle East"
  },

  {
    year: 1952,
    display: "1952",
    era: "contemporary",
    title: "Record 24-Hour Rainfall Recorded on La Réunion Island",
    description: "La Réunion's 1,870mm in 24 hours remains the world record for single-day rainfall — a benchmark that has defined the outer limits of what atmospheric systems can produce and anchors every climate model's calculation of extreme precipitation events.",
    category: "disaster",
    worldAltering: true,
    region: "Africa"
  },
  {
    year: 1953,
    display: "1953",
    era: "contemporary",
    title: "Birth of Craig Reynolds",
    description: "Reynolds's Boids algorithm — which simulates flocking, schooling, and herding through three simple rules — became the standard tool for animating crowd and animal behaviour in film, producing the wildebeest stampede in The Lion King, and founding the field of artificial life simulation.",
    category: "births",
    worldAltering: false,
    region: "Americas"
  },

  {
    year: 1955,
    display: "1955",
    era: "contemporary",
    title: "U.S. Air Force Unveils Its First Self-Guided Missile",
    description: "The AIM-4 Falcon was the first air-to-air missile designed to track and intercept a target autonomously — the technological foundation of every precision-guided weapon system that followed, and the beginning of the shift from platform-based to munition-based air power doctrine.",
    category: "science",
    worldAltering: false,
    region: "Americas"
  },

  {
    year: 1956,
    display: "1956",
    era: "contemporary",
    title: "My Fair Lady Opens on Broadway",
    description: "My Fair Lady ran for 2,717 performances — then the longest run in Broadway history — and its original cast recording became the best-selling album in the world for the year of its release, demonstrating that the American musical had become the dominant global theatrical export of the post-war era.",
    category: "culture",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1959,
    display: "1959",
    era: "contemporary",
    title: "Birth of Ben Okri in Minna, Nigeria",
    description: "Okri's Booker Prize-winning The Famished Road introduced Yoruba spirit-world mythology to a global literary audience — establishing that African fiction could occupy the same canonical space as García Márquez or Faulkner, and opening the door for the generation of African writers who followed.",
    category: "births",
    worldAltering: false,
    region: "Africa"
  },

  {
    year: 1959,
    display: "1959",
    era: "contemporary",
    title: "Death of Lester Young",
    description: "Young invented the cool, horizontal tenor saxophone style that replaced Coleman Hawkins's approach as the dominant mode — his influence is so total that virtually every jazz saxophonist who came after him, from John Coltrane to Stan Getz, either built on his approach or explicitly reacted against it.",
    category: "deaths",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1960,
    display: "1960",
    era: "contemporary",
    title: "Key Largo Coral Reef Preserve Established",
    description: "The Key Largo Coral Reef Preserve was the first protected underwater area in the United States — establishing the legal principle that ecosystems below the waterline deserved federal protection, and creating the framework for every marine national park and marine protected area that followed.",
    category: "science",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1960,
    display: "1960",
    era: "contemporary",
    title: "Ten Nations Meet in Geneva to Discuss Disarmament",
    description: "The Geneva conference was the first multilateral forum in which both superpowers and non-aligned nations attempted to negotiate nuclear limits simultaneously — the institutional ancestor of every arms control treaty that followed, including SALT, START, and the Non-Proliferation Treaty.",
    category: "politics",
    worldAltering: false,
    region: "Europe"
  },

  {
    year: 1962,
    display: "1962",
    era: "contemporary",
    title: "Death of Arthur Compton",
    description: "Compton's 1923 discovery that X-ray photons transfer momentum to electrons provided definitive proof that light behaves as both wave and particle — resolving a fundamental debate in physics and making quantum mechanics an experimentally verified reality rather than a theoretical construct.",
    category: "deaths",
    worldAltering: false,
    region: "Americas"
  },

  {
    year: 1964,
    display: "1964",
    era: "contemporary",
    title: "Marriage of Richard Burton and Elizabeth Taylor",
    description: "The Burton-Taylor marriage was the first celebrity relationship to be covered as continuous global news — their affair had already generated more press coverage than any political event of 1962. They invented the template of celebrity coupledom that the entertainment media has monetised ever since.",
    category: "culture",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1965,
    display: "1965",
    era: "contemporary",
    title: "LBJ's 'We Shall Overcome' Speech to Congress",
    description: "By appropriating the civil rights movement's anthem before a joint session of Congress, Johnson placed the full weight of the federal government behind universal voting rights — the speech generated the momentum that passed the Voting Rights Act within five months, adding millions of Black voters to the rolls and permanently reshaping American electoral politics.",
    category: "politics",
    worldAltering: true,
    region: "Americas"
  },

  {
    year: 1967,
    display: "1967",
    era: "contemporary",
    title: "Birth of Naoko Takeuchi",
    description: "Takeuchi's Sailor Moon was the first manga series to centre an all-female superhero team — its global success proved girls were a commercially viable audience for action fiction, reshaping the market assumptions of the entire manga and anime industry and influencing the visual language of female-led genre fiction worldwide.",
    category: "births",
    worldAltering: false,
    region: "Asia"
  },
  {
    year: 1968,
    display: "1968",
    era: "contemporary",
    title: "U.S. Mint Halts the Purchase and Sale of Gold",
    description: "The suspension of gold transactions ended Bretton Woods' last functional mechanism — within three years Nixon formally closed the gold window entirely, completing the transition to fiat currency and giving governments the ability to expand money supply without physical constraint, with consequences for inflation and debt that the world is still navigating.",
    category: "politics",
    worldAltering: false,
    region: "Americas"
  },

  {
    year: 1970,
    display: "1970",
    era: "contemporary",
    title: "The Musical Purlie Opens on Broadway",
    description: "Purlie was one of the first Broadway musicals with an all-Black creative team to achieve commercial and critical success — its run proved that Black storytelling had a mass audience beyond the Chitlin' Circuit and helped open the door for the generation of Black theatre that followed.",
    category: "culture",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1971,
    display: "1971",
    era: "contemporary",
    title: "CBS Announces the Cancellation of The Ed Sullivan Show",
    description: "Sullivan's show had run for 23 years and introduced America to Elvis, the Beatles, and the Rolling Stones — its cancellation marked the decisive end of variety television as the central medium of American popular culture and the beginning of its fragmentation into genre-specific programming.",
    category: "culture",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1972,
    display: "1972",
    era: "contemporary",
    title: "Francis Ford Coppola's The Godfather Premieres",
    description: "The Godfather became the highest-grossing film in history at the time, won Best Picture, and permanently elevated American crime cinema from genre entertainment to literary prestige — it is the single film most credited with creating the conditions for New Hollywood and the era of the director-as-auteur.",
    category: "culture",
    worldAltering: false,
    region: "Americas"
  },

  {
    year: 1974,
    display: "1974",
    era: "contemporary",
    title: "UK's First Trans-Rights Conference Opens in Leeds",
    description: "The Leeds conference was the first organised gathering in British history to address transgender rights as a political rather than purely medical question — it produced the network of activists who lobbied for the Gender Recognition Act 2004, the first law in the world to allow legal gender change without surgery.",
    category: "politics",
    worldAltering: false,
    region: "Europe"
  },

  {
    year: 1975,
    display: "1975",
    era: "contemporary",
    title: "Death of Aristotle Onassis in Paris",
    description: "Onassis built the largest privately owned shipping fleet in the world from nothing, arriving in Argentina with $60. His business model of owning supertankers rather than the cargo they carried created the modern independent shipping industry and demonstrated that infrastructure ownership was where the real money in global commerce resided.",
    category: "deaths",
    worldAltering: false,
    region: "Europe"
  },

  {
    year: 1978,
    display: "1978",
    era: "contemporary",
    title: "Amoco Cadiz Oil Spill off the Coast of Brittany",
    description: "The Amoco Cadiz released 1.6 million barrels of crude — the largest oil tanker spill in history at the time — devastating 200 miles of French coastline and forcing the International Maritime Organization to create the first mandatory double-hull requirements for oil tankers, a safety standard that has prevented countless subsequent spills.",
    category: "disaster",
    worldAltering: false,
    region: "Europe"
  },

  {
    year: 1983,
    display: "1983",
    era: "contemporary",
    title: "Death of Author Rebecca West",
    description: "West's Black Lamb and Grey Falcon — a 1,200-page account of Yugoslavia written in 1941 — remains the definitive English-language analysis of Balkan history, and proved so prescient about the region's fault lines that it was widely reissued during the Yugoslav wars of the 1990s as a primary explanatory text.",
    category: "culture",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 1985,
    display: "1985",
    era: "contemporary",
    title: "Registration of the First Internet Domain: symbolics.com",
    description: "Symbolics.com was the first domain name registered under the new DNS system — the moment the internet acquired the address structure that makes it navigable. Every website, every email address, and every URL in existence descends from the naming architecture that this registration inaugurated.",
    category: "science",
    worldAltering: true,
    region: "Americas"
  },
  {
    year: 1985,
    display: "1985",
    era: "contemporary",
    title: "Brazil's Military Dictatorship Ends — Civilian Government Installed",
    description: "Brazil's peaceful transition was the largest democratic restoration in Latin American history — 130 million people returning to self-governance — and its success gave momentum to the democratic transitions in Argentina, Chile, and Paraguay that followed, effectively ending the era of military juntas in South America.",
    category: "politics",
    worldAltering: false,
    region: "Americas"
  },

  {
    year: 1990,
    display: "1990",
    era: "contemporary",
    title: "The Ford Explorer Introduced to the Public",
    description: "The Explorer's launch created the modern SUV market — within a decade it was the best-selling vehicle in the United States, permanently shifting American consumer preference away from sedans and toward the truck-based passenger vehicles that now dominate global automotive sales.",
    category: "science",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1990,
    display: "1990",
    era: "contemporary",
    title: "Iraqi Authorities Hang British Journalist Farzad Bazoft",
    description: "Bazoft's execution despite Thatcher's personal intervention demonstrated that Saddam Hussein had concluded he was beyond Western diplomatic pressure — a miscalculation that contributed directly to his decision to invade Kuwait four months later and launch the chain of events that produced the Gulf War.",
    category: "conflict",
    worldAltering: false,
    region: "Middle East"
  },
  {
    year: 1991,
    display: "1991",
    era: "contemporary",
    title: "Germany Regains Its Full Sovereignty",
    description: "The Two-Plus-Four Treaty's entry into force ended forty-six years of post-war occupation rights and restored Germany's full sovereignty — completing reunification and enabling Germany to pursue an independent foreign policy for the first time since 1945, fundamentally reshaping the balance of power within Europe.",
    category: "politics",
    worldAltering: true,
    region: "Europe"
  },

  {
    year: 1991,
    display: "1991",
    era: "contemporary",
    title: "Four LAPD Officers Charged in the Rodney King Beating",
    description: "The charges — and the acquittals that followed — produced the 1992 Los Angeles riots, the most destructive civil unrest in American urban history since the 1960s, permanently changing how police accountability was discussed in America and influencing every subsequent debate about law enforcement and race.",
    category: "politics",
    worldAltering: false,
    region: "Americas"
  },

  {
    year: 1998,
    display: "1998",
    era: "contemporary",
    title: "Death of Benjamin Spock",
    description: "Spock's Baby and Child Care sold 50 million copies in 39 languages — second only to the Bible in post-war American publishing — and its argument that children respond to love rather than discipline overturned a century of behaviourist child-rearing doctrine, reshaping the relationship between parents and children across the Western world.",
    category: "deaths",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 1998,
    display: "1998",
    era: "contemporary",
    title: "Death of Tim Maia",
    description: "Maia introduced American soul and funk to Brazil at a moment when both were being suppressed by the military dictatorship as culturally subversive — his defiance made him a counterculture icon whose influence on Brazilian popular music is so pervasive that virtually every major MPB artist of the last fifty years cites him as foundational.",
    category: "deaths",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 2003,
    display: "2003",
    era: "contemporary",
    title: "WHO Issues First-Ever Global Travel Alert for SARS",
    description: "The WHO's unprecedented global travel advisory proved that a respiratory virus could cross borders faster than any previous pathogen in recorded history — the lesson that epidemiologists spent seventeen years trying to prepare governments for, with mixed results when COVID-19 arrived in 2020.",
    category: "science",
    worldAltering: false,
    region: "Asia"
  },

  {
    year: 2011,
    display: "2011",
    era: "contemporary",
    title: "Beginning of the Syrian Revolution",
    description: "The protest in Deraa that triggered the Syrian Revolution produced the deadliest conflict of the 21st century — 500,000 dead, 13 million displaced, and a refugee crisis that destabilised European politics for a decade, accelerating the rise of nationalist parties and directly influencing the Brexit vote and the 2016 U.S. election.",
    category: "conflict",
    worldAltering: true,
    region: "Middle East"
  },
  {
    year: 2011,
    display: "2011",
    era: "contemporary",
    title: "Fukushima Daiichi Nuclear Disaster Intensifies",
    description: "Fukushima's triple meltdown caused Germany to permanently close all its nuclear plants, triggered a global moratorium on new reactor approvals, and forced the first honest public reckoning with the gap between nuclear power's theoretical safety and its real-world vulnerability to compounding failures — a debate that still shapes energy policy.",
    category: "disaster",
    worldAltering: true,
    region: "Asia"
  },
  {
    year: 2011,
    display: "2011",
    era: "contemporary",
    title: "Death of Nate Dogg",
    description: "Nate Dogg's melodic hooks on Regulate, The Next Episode, and Area Codes created the template for sung choruses in hip-hop — his synthesis of R&B melody with rap production was so influential that it became the default structure of mainstream hip-hop and can be heard in virtually every major hit of the streaming era.",
    category: "deaths",
    worldAltering: false,
    region: "Americas"
  },

  {
    year: 2014,
    display: "2014",
    era: "contemporary",
    title: "Crimea Holds a Referendum to Secede from Ukraine",
    description: "Russia's annexation of Crimea was the first forcible seizure of European territory since 1945 — it shattered the post-Cold War security architecture, ended the assumption that Helsinki Accords' borders were inviolable, and began the slow escalation that led to Russia's full-scale invasion of Ukraine in 2022.",
    category: "politics",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 2016,
    display: "2016",
    era: "contemporary",
    title: "AlphaGo Defeats Lee Sedol 4–1 — AI Watershed Moment",
    description: "Go was believed to be permanently beyond machine mastery because its 10¹⁷⁰ possible board positions require intuition, not calculation. AlphaGo's victory proved that deep reinforcement learning could develop genuine strategic intuition — the breakthrough that convinced every major technology company to treat AI as a transformative priority rather than a research curiosity.",
    category: "science",
    worldAltering: true,
    region: "Asia"
  },

  {
    year: 2019,
    display: "2019",
    era: "contemporary",
    title: "Christchurch Mosque Shootings in New Zealand",
    description: "The Christchurch attack was the first major act of terrorism livestreamed on Facebook, exposing the platforms' complete inability to prevent their infrastructure from being used for mass atrocity — New Zealand's response, banning military-style weapons within weeks and convening the Christchurch Call, set the international standard for government action on online extremism.",
    category: "conflict",
    worldAltering: true,
    region: "Pacific"
  },
  {
    year: 2019,
    display: "2019",
    era: "contemporary",
    title: "Global Climate Strike Involves 1.4 Million Students",
    description: "The school strikes coordinated across 125 countries were the largest youth-led political mobilisation in history — they forced climate onto the agenda of the 2019 UN General Assembly, pressured the EU to announce its Green Deal, and demonstrated that a generation unwilling to wait for electoral power had found another mechanism to exercise it.",
    category: "politics",
    worldAltering: true,
    region: "Global"
  },
  {
    year: 2019,
    display: "2019",
    era: "contemporary",
    title: "Beginning of the 2019–20 Hong Kong Protests",
    description: "The Hong Kong protests were the largest sustained demonstrations against Chinese authority since Tiananmen — they failed to preserve the one-country-two-systems framework but produced the National Security Law of 2020 and accelerated the complete absorption of Hong Kong into the mainland political system years ahead of schedule.",
    category: "politics",
    worldAltering: false,
    region: "Asia"
  },
  {
    year: 2020,
    display: "2020",
    era: "contemporary",
    title: "COVID-19 Mass Shutdowns Begin Across the United States",
    description: "The simultaneous closure of schools, workplaces, and public spaces was the largest coordinated disruption of daily life in U.S. history — it accelerated remote work by a decade, transferred trillions of dollars from physical to digital retail, and revealed with brutal clarity which workers were essential and which safety nets did not exist.",
    category: "disaster",
    worldAltering: true,
    region: "Americas"
  },
  {
    year: 2021,
    display: "2021",
    era: "contemporary",
    title: "Deb Haaland Sworn In as First Native American U.S. Cabinet Secretary",
    description: "Haaland's confirmation placed a member of the Laguna Pueblo tribe in charge of the department that historically administered Native American policy — including the boarding school system designed to destroy Indigenous culture. The symbolic weight of that inversion is without precedent in the 232-year history of the U.S. Cabinet.",
    category: "politics",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 2021,
    display: "2021",
    era: "contemporary",
    title: "Death of Yaphet Kotto",
    description: "Kotto's roles in Alien, Live and Let Die, and Homicide made him one of the first Black actors to anchor major Hollywood productions in roles defined entirely by competence and authority rather than race — a distinction that opened doors for the generation of Black leading men who followed.",
    category: "deaths",
    worldAltering: false,
    region: "Americas"
  },
  {
    year: 2022,
    display: "2022",
    era: "contemporary",
    title: "Russia Withdraws from the Council of Europe",
    description: "Russia's expulsion severed its obligation to the European Court of Human Rights — the body that had adjudicated over 3,000 cases against Russia. Its departure removed the last institutional mechanism through which Russian citizens could hold their government legally accountable to an international standard.",
    category: "politics",
    worldAltering: false,
    region: "Europe"
  },
  {
    year: 2022,
    display: "2022",
    era: "contemporary",
    title: "Sri Lankan Protests Begin Amid Economic Collapse",
    description: "Sri Lanka's collapse produced the first popular overthrow of a government in South Asian history driven primarily by economic rather than ethnic or political grievances — a precedent that several neighbouring states watched with alarm.",
    category: "politics",
    worldAltering: false,
    region: "Asia"
  },
  {
    year: 2025,
    display: "2025",
    era: "contemporary",
    title: "Record Tornado Outbreak in the Southern and Midwestern US",
    description: "The 118-tornado outbreak caused $11 billion in damage and was the most destructive single-day severe weather event in American history — its scale in mid-March, outside the traditional tornado season, confirmed that climate change is extending the geography and calendar of extreme weather beyond every historical baseline.",
    category: "disaster",
    worldAltering: true,
    region: "Americas"
  }
];

const ERAS = {
  all: { label: "All Eras", icon: "◈" },
  ancient: { label: "Ancient Era", icon: "⚔", years: "44 BC – 493 AD" },
  medieval: { label: "Medieval Era", icon: "⚜", years: "856 – 1493" },
  "early-modern": { label: "Early Modern Era", icon: "⛵", years: "1521 – 1794" },
  industrial: { label: "Industrial Era", icon: "⚙", years: "1802 – 1895" },
  contemporary: { label: "Contemporary Era", icon: "⚡", years: "1900 – 2025" }
};

const CATEGORIES = {
  all: "All Categories",
  politics: "Politics & Power",
  conflict: "War & Conflict",
  science: "Science & Technology",
  culture: "Arts & Culture",
  exploration: "Exploration",
  religion: "Religion",
  disaster: "Disasters",
  births: "Notable Births",
  deaths: "Notable Deaths"
};

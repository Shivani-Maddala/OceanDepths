const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const content = {
  marine: {
    title: "Marine Life",
    desc: `Marine life refers to the vast and diverse collection of organisms that inhabit the Earth’s oceans, seas, and coastal ecosystems. Covering more than seventy percent of the planet’s surface, the ocean is home to millions of species, many of which remain undiscovered. From microscopic plankton drifting near the surface to massive blue whales roaming the open seas, marine life forms one of the most complex and essential biological systems on Earth.

At the foundation of marine ecosystems are phytoplankton, tiny photosynthetic organisms that produce nearly half of the oxygen we breathe. These organisms form the base of marine food chains and play a crucial role in regulating Earth’s climate by absorbing carbon dioxide. Zooplankton, fish, and invertebrates rely on this system, supporting larger predators such as sharks, dolphins, and whales.

Marine environments are incredibly diverse, ranging from coral reefs and mangroves to open oceans and deep-sea trenches. Each ecosystem supports species uniquely adapted to its conditions. Oceans provide food, medicine, transportation, and livelihoods for billions of people worldwide.

However, marine life faces serious threats from climate change, pollution, overfishing, and habitat destruction. Protecting marine ecosystems is essential for maintaining biodiversity, climate balance, and the future of life on Earth.`
  },

  coral: {
    title: "Coral Reefs",
    desc: `Coral reefs are among the most complex and biologically diverse ecosystems on the planet, often referred to as the rainforests of the sea. Although they cover less than one percent of the ocean floor, coral reefs support nearly twenty-five percent of all marine species, making them critical to ocean health.

Reefs are built by tiny animals called coral polyps that form a symbiotic relationship with microscopic algae known as zooxanthellae. The algae produce energy through photosynthesis, while corals provide shelter and nutrients. This delicate balance allows reefs to grow into massive underwater structures over thousands of years.

Coral reefs protect coastlines by reducing wave energy and preventing erosion. They support fisheries, tourism, and coastal economies, providing food and employment for millions of people worldwide. Many reef organisms have also contributed to medical discoveries, including treatments for cancer and infectious diseases.

Despite their importance, coral reefs are extremely fragile. Rising sea temperatures cause coral bleaching, while pollution, destructive fishing practices, and ocean acidification weaken reef structures. Without urgent conservation efforts, many coral reefs may disappear within this century.`
  },

  deep: {
    title: "Deep Sea",
    desc: `The deep sea is the largest and least explored ecosystem on Earth, beginning at depths where sunlight no longer reaches. This vast region covers more than sixty percent of the planet’s surface, yet humans have explored only a tiny fraction of it.

Life in the deep sea exists under extreme conditions, including immense pressure, near-freezing temperatures, and complete darkness. Organisms here have evolved extraordinary adaptations such as bioluminescence, slow metabolisms, and enhanced sensory organs to survive in this environment.

Unlike surface ecosystems that rely on sunlight, deep-sea food chains depend on marine snow or chemosynthesis, where bacteria convert chemicals from hydrothermal vents into energy. These ecosystems operate independently of solar energy and challenge our understanding of how life can exist.

The deep sea plays a vital role in regulating Earth’s climate by storing carbon and heat for long periods. However, increasing interest in deep-sea mining threatens these fragile ecosystems. Protecting the deep sea is essential for maintaining ocean stability and global climate balance.`
  },

  conservation: {
    title: "Ocean Conservation",
    desc: `Ocean conservation focuses on protecting and restoring marine ecosystems to ensure the long-term health of the planet. Oceans regulate climate, support biodiversity, and sustain billions of people, yet they face increasing threats from human activity.

One of the greatest challenges is pollution, particularly plastic waste. Millions of tons of plastic enter the ocean every year, harming marine animals through ingestion and entanglement. Chemical runoff from agriculture and industry further damages marine habitats.

Overfishing disrupts food chains and reduces fish populations faster than they can recover. Climate change intensifies these problems by warming oceans, causing coral bleaching, rising sea levels, and ocean acidification.

Ocean conservation efforts include sustainable fishing practices, marine protected areas, reducing pollution, scientific research, and global cooperation. Protecting the oceans is essential for food security, climate stability, economic resilience, and the future of life on Earth.`
  }
};

document.getElementById("title").innerText = content[type].title;
document.getElementById("desc").innerText = content[type].desc;

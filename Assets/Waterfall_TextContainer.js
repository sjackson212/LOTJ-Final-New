private var dialogueDict : Object = {};
private var questArray : Array = [];
private var questHArray : Array = [];
private var quizDict : Object = {};
private var quizResponseDict : Object = {};

private var imgDict : Object = {};

private var journalDict : Object = {};

private var currentDialogue : int = 1;

public var fatherImg : Texture2D;

function Start () {
	//populate NPC dialogue dictionary
	
	journalDict[0] = ["After months of research, I believe I have finally figured out how to fix this mess. There are two problems. \n\nThe first is that we need new rules to govern out forest sustainably for the benefit of the community. Right now it's a free-for-all. Everyone is in a race to take what's left from the forest before it is all gone.  \n\nBut after reading widely in the published research, I have made an important discovery: the famous 'tragedy of the commons' is misleading.  According to that theory, property owned in common by large numbers of people is doomed to be overexploited.  But I have learned that many communities around the world have put in place rules to sustainably manage their resources. \n\nWe need new rules and we need them now.  But this leads to the second problem:  Dante and his thugs would do anything to prevent--"];
	journalDict[1] = ["Research Journal Entry January 17 \n\nWe're Contributing to a Global Extinction Crisis \n\nI have learned that the destruction taking place in our community is part of a much larger trend that has serious consequences for the health of our planet. The rate of species extinction is now more than 100 times higher than the rate prior to the appearance of humans. The most important cause of extinction is habitat destruction, such as the clearing of tropical forests for agriculture. \n\nThe tropics are home to two-thirds of the world’s species, most of which live in forests. Today only half of the original forest cover remains.", "Our forest is part of what scientists call the Mesoamerican hotspot. Biodiversity hotspots are species-rich areas facing imminent threats. These areas collectively contain 44% of the world’s plant species and 35% of all vertebrate species. At the current rate of habitat destruction, we will eventually lose about 40% of the species in hotspots throughout the tropics.",
						"My sources: \n\nStuart L. Pimm and Peter Raven (2000) Biodiversity - Extinction by Numbers, Nature 403 (6772): 843–45; Norman Myers et al. (2000) Biodiversity Hotspots for Conservation Priorities, Nature 403: 853–58; Rodolfo Dirzo and Peter H. Raven (2003) Global State of Biodiversity and Loss, Annual Review of Environment and Resources 28: 137–67."];
	journalDict[2] = ["Research Journal Entry February 9 \n\nThree-quarters of the world's forests are owned by governments. \n\nBut I have learned that almost a quarter of all forests in developing countries are 'common-property resources,' meaning they are owned in common by a community. \n\nMany people mistakenly believe that forests must be either managed by the government or sold to private landowners. This belief stems from Garrett Hardin’s “tragedy of the commons” argument. In a famous article published in 1968, Hardin claimed that when a resource is shared by many people, self-interest will lead to its overuse and eventual destruction. \n\nHardin was confusing common-property – in which a resource is jointly owned and managed – with open access, where it's every man for himself. Open access sounds an awful lot like our forest lately. I wonder what it takes to make common-property systems work?",
	 "My sources: \n\nGarrett Hardin (1968) The Tragedy of the Commons, Science 162:1243–48; S.V. Ciriacy-Wantrup and Richard C. Bishop (1975) 'Common Property' as a Concept in Natural Resources Policy, Natural Resources Journal 15: 713–27."];
	journalDict[3] = ["Research Journal Entry February 10 \n\nWhat makes for a successful common-property system? \n\nI have been reviewing the research literature, and I'm finding important insights that may help our community. To ensure sustainable management, a community must put in place rules to govern use of the forest. These include: \n\n• rules that decide who has access to the forest and when \n\n• regulations specifying how much can be harvested \n\n• procedures governing how rules are changed or modified.  \n\nWhat makes for a successful common-property system? I have been reviewing the research literature, and I'm finding important insights that may help our community.", "And here's a crucial finding: Those who are subject to the rules must have a hand in making them! This is the only way to ensure the legitimacy of the system.", 
	"My sources: \n\nElinor Ostrom et al. (1999) Revisiting the Commons: Local Lessons, Global Challenges. Science 284 (278): 278–82; Arun Agrawal, Local Institutions and the Governance of Forest Commons, in Paul F. Steinberg and Stacy D. Vandeveer (eds.), Comparative Environmental Politics: Theory, Practice, and Prospects, MIT Press, 2012."];
	journalDict[4] = ["Research Journal Entry March 5 \n\nA case study of community forest management in action \n\nThe research literature is filled with examples of communities that have sensible rules for governing local forests. One example is the community of Santa Catarina Ixtepeji, in the Mexican state of Oaxaca. Until 1980, the forests around this small community were under the control of a government-run timber operation.  \n\nIn the 1970s, community members demanded a greater role in forest management and eventually gained control. This occurred as part of a larger trend across Mexico favoring community forestry. The community of Ixtepeji operates a commercial timber mill that markets wood from its 15,000 hectares of production forests, which also produce profitable non-timber products such as white mushrooms and pine resin. Another 4,000 hectares are in restoration and conservation areas to protect biodiversity and water sources.",  
	"These activities are profitable! The money supports local services like roads and schools. The community has invested in equipment to sell more profitable processed wood products, while expanding into businesses like nature tourism and bottling local spring water.  \n\nTo ensure a balance between conservation and development, major decisions concerning the forest are made by the community's general assembly in consultation with national environmental officials. Any community member who breaks the rules faces fines or exclusion from community enterprises. Might we create something like this in our community?",
						"My sources: \n\nSalvador Anta Fonseca, Forest Management in the Community Enterprise of Santa Catarina Ixtepeji, Oaxaca, Mexico, Rights and Resources Group, Washington, DC, 2007; Camille Antinori and David Barton Bray (2005) Community Forest Enterprises as Entrepreneurial Firms: Economic and Institutional Perspectives from Mexico, World Development 33 (9): 1529–43."];
	journalDict[5] = ["Research Journal Entry March 30 \n\nCommunity forestry is growing in importance due to political decentralization \n\nDozens of countries are experimenting with 'decentralization,' giving local governments new powers to decide how natural resources are used. This is important because local governments are often in a better position to identify and meet the needs of local people. I recall reading in the news that lawmakers in our country are debating a proposal along these lines.  \n\nAccording to my research, decentralization has been successful in some places but has caused conflict elsewhere. An example can be found in Senegal, where the forestry code of 1998 supposedly gave local councils new powers to control commercial use of their forests. But the central government didn't want to give up control, and pressured the councils to meet unsustainable production quotas.", "This shows that we can never ignore the central government when thinking about local management of forests. National policy decisions have an enormous impact on local outcomes.",
	 "My sources: \n\nJesse C. Ribot, Arun Agrawal, and Anne M. Larson (2006) Recentralizing While Decentralizing: How National Governments World Development 34 (11): 1864–86."];
	journalDict[6] = ["Research Journal Entry April 14 \n\nWhat exactly is a 'local community' in the context of forest management? \n\nWhen designing rules for local management of forests, we must define what we mean by “local.” Is a man local according to his birthplace, where he lives now, his proximity to the forest boundary, or how much he relies on the forest? My research suggests that different definitions may be needed in different circumstances.  \n\nLocal communities are not homogenous. There is often considerable diversity in race, ethnicity, religion, and economic standing. Research shows that the poor often rely more on forest commons, and may have a special interest in sustaining the forest as a hedge against unemployment. Wealthier and more politically powerful community members may dominate the use of a common resource unless rules are put in place to ensure that everyone has access.", "That's certainly true of this community. Dante and his men have been intimidating local people and stealing their land. Lately it seems like someone has been following me. I may need to hide out for a couple of days in the cave I discovered at the top of the waterfall.",
						"My sources: \n\nAmy R. Poteete and Elinor Ostrom (2004) Heterogeneity, Group Size and Collective Action: The Role of Institutions in Forest Management, Development and Change 35(3): 435–61; Jean Marie Baland and Jean-Philippe Platteau (1999) The Ambiguous Impact of Inequality on Local Resource Management. World Development 27 (5): 773–88."];
	journalDict[7] = ["Research Journal Entry May 4 \n\nWomen's participation is essential in community forestry \n\nI have learned that rural women are among those most seriously affected by deforestation. Healthy forests are necessary for traditional women's activities such as the collection of fuel wood and medicinal plants. Without adequate cooking fuel, they are less likely to boil water used for cooking and cleaning, which can affect the health of entire communities.  \n\nCommunity forestry programs often discriminate against women despite evidence that women’s participation can increase their effectiveness. A case study in India shows that when forest access is limited to men, women must walk long distances to neighboring forests to gather fuel and fodder. Even in villages where women have the right to use the forest, they're often excluded from meetings where decisions are made about the rules governing forest use.",
						"Another study from India focused on traditional village-level women’s organizations called mahila mandals, which provide a space where women can express their views and contribute to forest policy discussions. Through these organizations, many women actively monitor, protect, and manage their local forests.",
						"My sources: \n\nBina Agarwal (1997) Environmental Action, Gender Equity, and Women's Participation, Development and Change 28 (1): 1–44; Bina Agarwal (2000) Conceptualising Environmental Collective Action: Why Gender Matters, Cambridge Journal of Economics 24: 283-310; Kristen Bingeman (2003) Women’s Participation in Forest Management Decisions. Himalayan Research Bulletin 21(2): 53–61."];
	journalDict[8] = ["Research Journal Entry June 3 \n\nValuing the forest \n\nA local community may have in place strong rulemaking processes, but none of this matters if they don't see the value of conservation. Some communities have a strong conservation ethic and take a long-term view. Others may be unaware of the long-term impacts of their actions or face strong financial pressures to convert forests to cropland and pasture.  \n\nFor example, in the community of Loma Alta in western Ecuador, most residents wish to clear the land and grow the profitable paja toquilla plant. They see little reason to restrict forest access or reduce short-term profits. In these settings, one promising approach is to put in place rules that allow communities to charge users (such as local water companies) for the environmental benefits provided by forested lands.", 
	"In Costa Rica, a national 'payment for ecosystem services' program pays an annual fee to farmers who plant or protect trees on their land. This popular program is funded by local water user fees, a national gasoline tax, and funds from international organizations with an interest in slowing global warming through terrestrial carbon storage.",
						"My sources: \n\nGibson, Clark C. and Becker, C. Dustin, A Lack of Institutional Demand: Why a Strong Local Community in Western Ecuador Fails to Protect its Forest, in People and Forests: Communities, Institutions, and Governance, edited by Clark C. Gibson, Margaret A. McKean, and Elinor Ostrom, MIT Press, Cambridge, 2000, pp. 135–61; Stefano Pagiola (2008) Payments for Environmental Services in Costa Rica, Ecological Economics 65 (4): 712–724."];
	
	Father = ["I knew you would come! Cough...Cough...I will be okay, don't worry about me. Thank you for cutting these ropes.","I was kidnapped by Dante and his thugs. He must have heard I was trying to stop him.","I have been researching ways to increase our community's control of the forest and to put in place sustainable harvesting rules.","I had hoped to rally the people for change, but Dante is a very powerful and cunning man.  The people live in fear of him.","He pays them to harvest logs illegally from the national forest.  If they protest their miserable working conditions, he does not hesitate to use violence.","His men ambushed me and have held me here, threatening to kill me if I continue talking with the farmers.","I can make it home; I will rest there.  You go talk to Mayor Garcia and the search party -- he will help us. There's a way out of this cave behind me."];
	
	dialogueDict["Father"] = Father;
	
	imgDict["Father"] = fatherImg;
	
	// sample quiz
	//quizDict["NPC1"] = ["Answer 1","Answer 2"];
	//quizResponseDict["NPC1"] = ["Correct!", "Wrong!"];
	
	//populate Quest text array
	questHArray.push("Find your mother");
	questArray.push("Your mother is waiting for you in the village. Seek her out.");
	questHArray.push("Find the biologist");
	questArray.push("Your mother suggested that you find the biologist to help figure out what happened to your father and why the forest is being destroyed. He is somewhere in this area.");
	questHArray.push("Find your father in the forest");
	questArray.push("The biologist feels that ignorance and greed are driving the destruction of the forest, but you suspect it's more complex than that. You grew up here and you know that these are good people. Find your father to learn more. There are five farmers in the forest who may be able to help you find him.");
	questHArray.push("Return to the village");
	questArray.push("Your father has been kidnapped. Go tell the villagers what has happened.");
	questHArray.push("Go to the waterfall");
	questArray.push("The search party suggested that you might find clues about what happened to your dad. If you see more pages from his research journal, read them carefully.");
	questHArray.push("Find your father");
	questArray.push("The search party mentioned that there are caves around here. Maybe your father is hidden there!");
	questHArray.push("Return to the village");
	questArray.push("Leave the cave and let the search party know that you found your father.");
}

function Update () {
	
}

function NextDialogue () {

}
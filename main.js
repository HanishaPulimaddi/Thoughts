/* ==========================================================================
   Essays: add a new object here and a card and its article page render
   automatically. date is ISO (YYYY-MM-DD); it's shown as "11 September 2026".
   body is HTML paragraphs; image (4:3), note and refs are optional.
   ========================================================================== */

const essays = [
  {
    title: "The Money I Never Learned About, Chapter 1",
    category: "Money",
    date: "2026-09-19",
    excerpt: "In the earlier days, way before the concept of money was established, we had a barter system. It was built on one basic rule: you give something, and you get something in return. When someone works a job, they earn money. But the real question is, how do they grow that money?",
    slug: "the-money-i-never-learned-about-chapter-1",
    image: "Images/money-chapter-1.png",
    note: "Understanding money can be challenging, and this is a challenge I have taken up this week. I was randomly scrolling through my Commonwealth Bank app and came across a word, \"ETF,\" that I did not recognise. The itch to understand the meaning behind it is what drove me to write this article. If you are someone who has just begun to earn and is looking to understand how money works and how to invest, this article is for you.",
    body: `
      <p>In the earlier days, way before the concept of money was established, we had a barter system. It was built on one basic rule: you give something, and you get something in return. In many ways, that simple exchange sits at the foundation of how the modern world's financial system currently works.</p>
      <p>When someone works a job, they earn money. They spend some of it and save some for the future. But the real question is, how do they grow that money? They invest.</p>
      <p>Saving is the practice of setting aside money for future use. Depending on where you keep it, you may also earn some interest. Investing is the practice of putting your money into assets with the expectation of generating returns. Here, returns are not guaranteed, and the value of your investment can rise or fall. We invest because we want our money to have the potential to grow over time.</p>
      <p>So, if you want to invest, where do you start? You start by understanding what happens to money over time. Say you have a $200 note. You keep that note with you for years. While the note stays the same, the value of it changes. Inflation is a general and ongoing rise in the prices of goods and services across an economy over time. As prices increase, the same amount of money buys you less. That means its purchasing power has decreased. Simply keeping money unchanged doesn't necessarily mean its value is being preserved. So, we invest to give our money the potential to grow faster than inflation over time.</p>
      <p>When you invest, you naturally expect a return. Returns can be looked at in two ways: nominal return and real return. A nominal return is a return on your investment without considering inflation. A real return is a return after considering inflation. For example, you invest $100 with a 10% return per year. At the end of the year, you get $110. This is your nominal return of 10%. If inflation during that year was 4%, your real return would be approximately 5.8% after accounting for inflation. In other words, your money grew from $100 to $110, but its purchasing power grew by only about 5.8%. An interesting thing about returns is that they can themselves start generating returns. In this same example, if you continue to invest, in the first year you get $110. In the second year, you earn 10% on the increased amount of $110, giving you $121. In the third year, you earn 10% on $121, bringing your total to $133.10. This is the basic idea of compound growth; your returns begin generating returns of their own.</p>
      <p>So, in simple terms, I save money, but inflation reduces its purchasing power. So, I invest my money somewhere that can generate a return, and those returns can compound over time.</p>
      <p>That brings us to the next important question: where and how do I invest?</p>
      <p>Investments can be made in different types of assets. An asset is broadly something that has economic value and can potentially provide future benefits, such as cash, shares, bonds, property and funds. A security is a tradable financial asset that represents some form of financial value or claim. A market is an ecosystem where financial assets are bought and sold. An exchange is an organised system that facilitates the buying and selling of securities.</p>
      <p>Different countries have different exchange systems, such as the ASX (Australian Securities Exchange), the NYSE and Nasdaq in the US, and the NSE (National Stock Exchange of India) and BSE (BSE Ltd., formerly Bombay Stock Exchange) in India. A primary market is where newly issued securities are sold, while a secondary market is where existing securities are traded between investors.</p>
      <p>If you want to invest in a company, you need to buy its shares. Shares are small units of ownership in a company. Companies issue shares, and investors buy them. Companies can offer shares to the public in the form of an IPO (Initial Public Offering).</p>
      <p>If you don't want to invest in just one company and want to pool your money into a basket of investments across multiple companies, you can invest in funds. Suppose you and four other people each want to invest in a mutual fund. If each person contributes $1,000, all five of you pool your money, giving the fund a total of $5,000. The fund creates 500 units, each worth $10, so each person receives 100 units for their $1,000 investment. The fund then invests the pooled money in a collection of assets. If the value of those investments increases by 10%, the fund becomes worth $5,500, making each unit worth $11. Your 100 units would now be worth $1,100, giving you a $100 return.</p>
      <p>There are different ways you can invest in or withdraw from a mutual fund. SIPs (Systematic Investment Plans) are a method of investing where a fixed amount is invested at regular intervals. For example, you can invest $500 every month into a fund, allowing your investment to gradually grow as you continue contributing and the fund generates returns.</p>
      <p>SWPs (Systematic Withdrawal Plans) are a strategy that lets you withdraw a fixed amount from a mutual fund at regular intervals. For example, if you have $50,000 invested in a mutual fund, you can withdraw $500 every month while keeping the remaining amount invested, allowing the remaining investment to potentially continue growing.</p>
      <p>A lump sum is a single bulk investment. For example, you can invest $10,000 into a fund at once, allowing the entire amount to remain invested and potentially grow with the fund's returns.</p>
      <p>But what if I want the diversification of a fund with the flexibility of buying and selling it like a share? Enter the ETFs.</p>
      <p>Exchange Traded Funds are funds traded on an exchange. They pool investors' money and provide exposure to many investments through a single trade. The main difference is that you can buy or sell an ETF when the market is open, while mutual fund orders are generally processed at the fund's applicable price once per dealing period.</p>
      <p>Yes, investments can generate returns, but they also come with risks. These risks can take different forms: markets can fall, a company or industry can struggle, interest rates can change, and currency exchange rates can move against you. Another factor we need to consider is fees. Funds, brokers and investment platforms may charge different types of fees, such as brokerage fees, management fees, platform fees and currency conversion fees. This means the return you calculate on your investment may not be the same as the amount you actually keep. And then there are taxes, money that may need to be paid to the government on certain investment income or gains.</p>
      <p>If you did not understand any of the things in this article, just understand these three key things. When you want to buy company shares, you use a broker or investment platform to place an order. The market connects you with someone selling those shares. If the share price goes up or the company pays you a portion of its profits, you can earn a return. If you want to invest in more than just one company, you put your money into a mutual fund along with other investors. The fund manager uses this pooled money to invest in different assets across different industries. If those investments grow, your investment can grow too. You buy an ETF through a broker or platform. The ETF invests in many different assets, so your money is spread across them. If those assets increase in value, your ETF can also increase in value.</p>
      <p>Can I start investing with this information? Yes, you can. The best way to learn about investing is by investing. But before you put your money in, take the time to research the investment, understand the risks, study its past performance and understand what you are actually investing in. Don't invest simply because something is popular or because someone else is doing it.</p>
      <p>All these thoughts lead me to more interesting questions like: Where do stock markets and trading come into play? How do I decide where to put my money? Should I monitor the markets, and how frequently? And what about cryptocurrency? Some of these questions can wait for now, but I know I'll be coming back to them. Somehow, a random word I didn't recognise on my banking app led me much further than I expected. I started because I wanted to understand one unfamiliar word: What is an ETF?, and I am ending it with an even longer list of things I want to understand. I don't have answers to these questions yet. There is still a lot more for me to understand. So, I guess this is only Chapter 1.</p>
    `,
  },
  {
    title: "The Tiny Object Holding Up the Modern World",
    category: "Technology",
    date: "2026-09-11",
    excerpt: "For those of us who studied physics in high school, we might be familiar with the words conductors and insulators. But what are semiconductors? And why is this small piece of technology at the centre of almost every activity in our day-to-day lives?",
    slug: "the-tiny-object-holding-up-the-modern-world",
    image: "Images/tiny-object.png",
    note: "A lens into semiconductors and the geopolitics around them. This is not an academic article filled with professional jargon. This is merely an article that reflects my understanding of a globally important issue. Give it a read if this isn't an area you are familiar with.",
    body: `
      <p>For those of us who studied physics in high school, we might be familiar with the words conductors and insulators. In simple words, conductors are materials through which electricity moves easily, while insulators are materials through which electricity does not move easily. But what are semiconductors? And why is this small piece of technology at the centre of almost every activity in our day-to-day lives? And, perhaps more importantly, why are governments willing to spend billions trying to manufacture them?</p>
      <p>Semiconductors are materials that allow some electricity to pass through them, which can be manipulated to different conditions allowing them to create electrical switches. These switches form transistors, which can be combined to perform logical operations through logic gates. Logic gates form circuits, and these circuits make up processors and circuits that power smartphones, laptops, cars, medical equipment and countless other devices.</p>
      <p>So how are these semiconductors placed in our devices? When transistors are arranged in precise patterns they form circuits, commonly known as chips. These chips are built on extremely pure, thin layers of silicon called wafers. Microchips are built by creating complex patterns and layers on this wafer. How are these patterns mapped onto the silicon wafer? Through photolithography, a process where light carrying a pattern is projected through a mask and optical system onto a photosensitive wafer. So essentially, chip manufacturing is like repeatedly printing precise patterns, layer after layer, until a structure capable of performing complex tasks is created.</p>
      <p>But, how do humans physically manufacture billions of these chips?</p>
      <p>The manufacturing process of a chip is not a simple, independent process. Companies design chips, companies develop the software used to design them, companies manufacture specialised equipment, companies fabricate the chips, and other companies package and test them before they eventually become part of a product.</p>
      <p>Fabless companies, such as NVIDIA, Advanced Micro Devices (AMD), Qualcomm and Apple, are companies that design chips not manufacture them. Then we have foundries, companies that actually manufacture chips designed by other companies. TSMC (Taiwan Semiconductor Manufacturing Company) is the world's leading pure-play foundry, while Samsung also operates a major foundry business. Then we have Advanced Semiconductor Materials Lithography (ASML), a company that makes the machines for lithography. ASML is particularly important because its extreme ultraviolet (EUV) lithography technology is unique to the company and is used in the production of the most advanced chips.</p>
      <p>So, to simplify the big cycle: a company such as NVIDIA designs a chip, companies such as ASML provide some of the equipment needed to manufacture it, and a foundry such as TSMC manufactures the chip. This means that developing a modern semiconductor is not a one-company system. It is a global system built on dependencies.</p>
      <p>Silicon is the primary material used for most semiconductor chips. Alternative materials such as gallium and germanium enable specialised applications, but the vast majority of modern integrated circuits are still built on silicon. Silicon itself is not particularly scarce, it makes up more than 25% of Earth's crust and China is the largest producer of silicon metal. The United States has important high-purity quartz resources, which are used in making the equipment/materials needed to produce semiconductor grade silicon.</p>
      <p>All this to say that semiconductors are important, which means companies care about them. And these systems are designed with dependencies which means control over critical stages of development creates an influence over who dominates the system.</p>
      <p>The geopolitical importance of semiconductors was significantly highlighted during the pandemic when trade routes were compromised and nations experienced shortage of them across industries. Different parts of the semiconductor chain are geographically concentrated. Taiwan's TSMC, the power position in this play, manufactures many of the world's most advanced logic chips and has moved into 2nm mass production. Right now, Taiwan is considered to be the dominant because 90% of leading-edge logic chips are produced there. The US has the world's most influential fabless chip designers, NVIDIA, producing chip designs for GPUs and AI accelerators. Its system accelerates AI Data Centers however, it is heavily dependent on Taiwan's manufacturing company. Netherlands has ASML which is the largest semiconductor lithography equipment manufacturer. Its position is highly exposed to geopolitics and export controls because governments regulate where its advanced equipment can be sold. South Korea positions itself as another strong player in this industry with Samsung operating across memory, foundry and system semiconductors. It forms a direct competition to TSMC. The US also includes Intel and other applied material companies who are designing chips and are trying to become a major external manufacturer. Interestingly, due to the US-China conflict, the US restricted access to manufacturing material to China. China is now investing in SMIC (Semiconductor Manufacturing International Corporation) for creating domestic production and manufacturing of semiconductors.</p>
      <p>So what does this mean for the future?</p>
      <p>I think the future of semiconductors is going to be less about who can make the most chips and more about who can reduce their dependence on everyone else. Countries are already investing heavily in domestic manufacturing, critical minerals, research and technology. I think we will see countries trying to become less dependent on others by building their own strengths and working more closely with trusted countries. The competition will be about AI, energy, minerals, equipment, skilled people and the infrastructure. And that makes the semiconductor industry a fascinating example of how technology, business and geopolitics are becoming increasingly difficult to separate.</p>
    `,
    refs: [
      "ASML. (n.d.). How microchips are made. https://www.asml.com/en/en/technology/all-about-microchips/how-microchips-are-made",
      "ASML. (n.d.). Lithography principles. https://www.asml.com/en/technology/lithography-principles",
      "ASML. (2022). Busting ASML myths. https://www.asml.com/en/en/news/stories/2022/busting-asml-myths",
      "Organisation for Economic Co-operation and Development. (2025a). Mapping the semiconductor value chain: Working towards identifying dependencies and vulnerabilities. OECD Publishing. https://doi.org/10.1787/4154cdbf-en",
      "Organisation for Economic Co-operation and Development. (2025b). The chip landscape: Geographical distribution of wafer fabrication capacity. OECD Publishing. https://doi.org/10.1787/02dbd028-en",
      "U.S. Bureau of Industry and Security. (2024). Commerce strengthens export controls to restrict China's capability to produce advanced semiconductors for military applications. U.S. Department of Commerce. https://www.bis.gov/press-release/commerce-strengthens-export-controls-restrict-chinas-capability-produce-advanced-semiconductors-military",
      "U.S. Geological Survey. (n.d.). Silicon statistics and information. U.S. Department of the Interior. https://www.usgs.gov/centers/national-minerals-information-center/silicon-statistics-and-information",
    ],
  },
  {
    title: "Engineering Begins Before the First Line of Code",
    category: "Building",
    date: "2026-01-09",
    excerpt: "Most people imagine the role of a software engineer as simply coding a solution to a problem. But in reality, coding is just a fraction of what we do. Six months ago, a question kept resurfacing in my mind: \"If AI is getting better at writing code, what becomes the engineer's real responsibility?\"",
    slug: "engineering-begins-before-the-first-line-of-code",
    image: "Images/engineering.png",
    body: `
      <p>Most people imagine the role of a software engineer as simply coding a solution to a problem. But in reality, coding is just a fraction of what we do. Six months ago, a question kept resurfacing in my mind: "If AI is getting better at writing code, what becomes the engineer's real responsibility?"</p>
      <p>Artificial intelligence, more specifically generative and agentic AI, has rapidly transformed the software industry. Tools such as Claude, GPT, and Cursor have become part of developers' daily workflows. (DeBellis et al., 2025) AI has evolved at a remarkable pace, from the deep learning breakthrough of AlexNet in 2012 (Krizhevsky et al., 2012) to today's multimodal, agentic systems. The scale and speed of this progress are difficult to fully grasp, especially for students who are still building their technical foundations. Like many others, I questioned whether the role I saw myself pursuing would continue to exist. If AI could increasingly handle implementation, then where would software engineers continue to create value?</p>
      <p>The answer became clearer during Arrayah, a startup accelerator program for bullish builders. My co-founder and I entered with what we believed was a strong idea: an automated compliance solution for architects. Initially, we believed the challenge was extracting compliance rules from lengthy, unstructured planning documents. However, after speaking with architects, we realised that extracting the rules was only one part of the problem. The real challenge was helping architects interpret those rules, identify opportunities and permissible design variations within them, and use that understanding to create smarter design plans. Those conversations challenged our assumptions and reshaped our understanding of the problem, ultimately changing the direction of our product. Rather than asking, "How do we build this?" we found ourselves repeatedly asking, "Have we correctly understood the problem we're trying to solve and how do we best solve it?" It's the difference between treating a symptom and diagnosing the disease. One provides temporary relief, the other solves the underlying problem. That shift fundamentally changed how I viewed software engineering.</p>
      <p>Software engineering isn't just about writing code. It's about understanding problems well enough to know what should be built, why it should be built, and whether the solution actually creates value. This philosophy isn't unique to my experience. Amazon's Working Backwards approach begins by defining the customer problem and desired outcome before implementation. (Bryar &amp; Carr, 2021) The principle is simple: don't start building until you understand what your customers actually need. Similarly, Agile Scrum encourages teams to build incrementally, gather feedback, and continuously refine their solutions. It recognises that understanding evolves, and therefore software must evolve with it. (Schwaber &amp; Sutherland, 2020)</p>
      <p>This made me realise something that AI has unintentionally highlighted. For years, many people, including myself, associated software engineering primarily with writing code. Today, AI is becoming increasingly capable of generating that code. But AI cannot determine whether we have correctly understood the problem. It cannot independently uncover user needs, challenge assumptions, balance technical and business trade-offs, or decide whether a solution creates genuine value. Those responsibilities still belong to engineers.</p>
      <p>Rather than changing software engineering, AI is exposing what software engineering has always been. Coding has never been the end goal; it has always been the tool. The real value of a software engineer lies in asking better questions, understanding users, exercising sound judgement, and making decisions that technology alone cannot. AI will continue to make implementation faster, but I believe engineering judgement, the ability to determine what should be built, why it matters, and how it creates value, will continue to distinguish exceptional software engineers in the years ahead.</p>
    `,
    refs: [
      "Bryar, C., &amp; Carr, B. (2021). Working Backwards: Insights, Stories, and Secrets from Inside Amazon. St. Martin's Press.",
      "DeBellis, D., Storer, K., Harvey, N., et al. (2025). DORA 2025 State of AI-assisted Software Development Report. Google Cloud DORA.",
      "Krizhevsky, A., Sutskever, I., &amp; Hinton, G. E. (2012). ImageNet Classification with Deep Convolutional Neural Networks. Advances in Neural Information Processing Systems, 25, 1097-1105.",
      "Schwaber, K., &amp; Sutherland, J. (2020). The Scrum Guide.",
    ],
  },
  {
    title: "The Stories of the Mountain",
    category: "Places",
    date: "2025-11-18",
    excerpt: "\"I can't do this anymore!\" I stopped. I sat down on the side of the mountain and gave up. I've always loved walking through nature. There's something calming about towering trees, mountains disappearing into the clouds, and standing in freezing streams under a sky full of stars.",
    slug: "the-stories-of-the-mountain",
    image: "Images/mountain.png",
    body: `
      <p>"I can't do this anymore!" I stopped. I sat down on the side of the mountain and gave up.</p>
      <p>I've always loved walking through nature. There's something calming about towering trees, mountains disappearing into the clouds, and standing in freezing streams under a sky full of stars. So, when the UTS Hiking Club announced an overnight hike to Acacia Flat in the Blue Mountains, my friend and I didn't think twice.</p>
      <p>As we began the trail, everyone was laughing, singing, and making up songs to remember the weekend. The hike leader smiled and joked, "I like how optimistic you all are. I hope you stay the same by the time this hike is over." The hike hadn't even officially begun when the group decided to make things "a little more interesting." Instead of heading straight towards the campground, we took a detour around the Grand Canyon Track, a casual three-hour addition.</p>
      <p>Three hours later, after climbing over rocks, stepping through puddles, squeezing between bushes, the official trail was only just beginning. As the group started to descend into the valley, so did my will to live. The first few hours felt manageable. We laughed, took photos, and convinced ourselves we were making great progress. By the fifth hour, we had taken countless breaks, emptied more water bottles than I could count, and the campground was still nowhere in sight.</p>
      <p>Someone called out from behind us. "Girls, your pace is slow. At this rate, we'll take another hour." I was petrified. I picked up my pace. Looking back, I don't think they were discouraging us, they were simply stating facts. But my mind had to make up its own story. The sun began to set and we hiked in the dark. Armed with a phone flashlight instead of a headlamp, shoes whose soles had long given up, and a wooden stick proudly pretending to be a hiking pole. The boys kept encouraging us. "Just twenty more minutes." After hearing it for hours, those words stopped sounding like encouragement and started sounding like false hope.</p>
      <p>Nine hours after we had started, we finally reached the campground. That relief lasted less than a minute. There was no network and the last message I had sent my mum read, "I'll message you when I reach the campground." I was worried that I have stressed my family. This deeply made me realise the things I have taken for granted and what I still have to be grateful for.</p>
      <p>The next morning, we woke up with a little more hope than energy. This time, the goal wasn't just to finish the hike. We wanted to reach somewhere with a network and let our families know we were okay. For a while, that was enough to keep us moving. The painkillers I had taken the night before slowly wore off and I was in pain. Somewhere between trying to catch my breath and convincing myself to keep walking, our group split into two. My friend ended up in the group ahead. I stayed behind. "Did we lose the track?" "What if she isn't okay?" "What if we don't end up back together?" By the time we reunited, I didn't even say anything. I just hugged her.</p>
      <p>Strange, how I had always believed resilience meant doing hard things on your own. Somewhere on that mountain, I realised that resilience is allowing others to carry part of your weight until you remember how to carry yourself again.</p>
      <p>Five hours into the hike, somewhere in the middle of the mountains with barely enough space for one person to stand, I stopped. I sat down. I looked at the group and quietly said, "You guys go ahead. I'm done." For the first time in my life, I genuinely believed I had reached my limit. I looked up at the clouds and whispered the only thing I could think of. "Please... just let this end. I can't do this anymore." My friends stayed with me without saying much, just being there in silence. In that moment I realised it wasn't my body that had given up, but my mind that had convinced me I couldn't go on.</p>
      <p>Moments later I got up. Eventually, we reached Victoria Falls. My friend grabbed my hand and together we yelled, "Carpe Diem!" For the first time that weekend, I wasn't thinking about how much further we had to go. I was simply grateful to have made it that far.</p>
      <p>The hike leader smiled and pointed towards the final stretch. "Just another 600 metres." After everything we had already climbed, six hundred metres somehow sounded both comforting and terrifying. The final climb was nothing but an endless staircase. My body still hurts. My legs were still screaming at me to stop. The mountain hadn't suddenly become easier. But something else had changed.</p>
      <p>The stories in my head had. Instead of asking, "Can I make it?" I found myself asking, "What's the next step?" Somewhere between those two questions, everything changed. The long hike ended and we finally reached. Our reward, a dreamy view of the milky way. It was divine.</p>
      <p>Ironically, nothing about me had changed physically. I wasn't fitter. I wasn't stronger. Yet somehow, I walked away feeling different. Looking back, I don't think the biggest lesson from that hike was resilience. It was learning that giving up isn't always the end of the story. We spend so much of our lives believing the stories our minds create. "I'm not enough, I'm slowing everyone down, I can't do this." Sometimes those stories prepare us, but sometimes they're simply wrong. The mountain never told me to stop; my mind did. I gave up. I sat down, convinced I had nothing left to give. Yet, because of the kindness of those who stayed beside me and the quiet decision to take one more step, I stood up again. For that, I'll always be grateful. That hike reminded me that strength isn't about never reaching your breaking point. It's about finding the courage to get back up, even when you've already convinced yourself you can't.</p>
    `,
  },
  {
    title: "The Black Box",
    category: "Reflections",
    date: "2022-10-07",
    excerpt: "A withering 8-inch black shoebox sits on the bottommost shelf of a white cupboard in a purple-walled room. Its lid screams \"DO NOT TOUCH\" and \"BELONGS TO HANISHA\" in a shaky red sparkle ink. Inside its weary cardboard skin rests my childhood memories.",
    slug: "the-black-box",
    image: "Images/black-box.png",
    note: "This piece was written during my final years of high school. I've chosen to preserve it as it was originally written because it reflects the person I was at that stage of my life and the experiences that shaped me.",
    body: `
      <p>A withering 8-inch black shoebox sits on the bottommost shelf of a white cupboard in a purple-walled room. Its lid screams "DO NOT TOUCH" and "BELONGS TO HANISHA" in a shaky red sparkle ink. Inside its weary cardboard skin rests my childhood memories. Since it is impossible to show a video recording of every second of my life, relive my defining moments through the items in this box.</p>
      <p>Cross-legged, I sit on the floor with the box in my lap. As I reach my hands inside the box, the first thing I grab is a pink teacup, part of a complete kitchen set for kids. It takes me back to when I was five and was obsessed with make-believe cooking with my sisters. That was the first time I worked in a team. One sister would mix the mud with water, and the other would hunt the garden for flowers to decorate the chocolate cake while I shaped the cake with the muddy slurry. Together we would make the perfect dish, a taste of success!</p>
      <p>Next, I pull out a yellow badge with a silver border and a roaring lion in the center with the word "Captain." It was shinier when it sat on the left side of my school shirt for three years—marking me out from the crowd as a student council member. The lengthy brainstorming sessions to choose songs or costumes for the music and dance competition, the late-night track editing, and the numerous discussions I had with management to get my team more rehearsal time were all factors that contributed to winning the competitions. In victory and loss, my team and I stood together.</p>
      <p>The delegate handbook of SMISMUN, my school's Model United Nations, barely fits in the box. I worked in the secretariat for two years as Head of the Organizing Committee and Event Coordinator. I endured sleepless nights and meal-less days to expand my school's network by working with food trucks and DJs, organizing social nights, and opening and closing ceremonies. My communication skills developed in requesting over 500 delegates to participate in our MUN. I helped make content for our MUN's Instagram page. The number of delegate handbooks packed was countless, but staying back in school to complete these tasks with my peers and seniors made it all pass in a breeze.</p>
      <p>The box then pushes out the polaroid of Right To A Good Bite's (RTAGB) first club meeting on 21st May 2020, bringing happy tears to my eyes. I started RTAGB at school to raise awareness about the relation of food and diet to mental and physical health. Over time, with increasing passionate club members, it became a safe space for conversations in school. Our internal discussions led to researched seminars, invited talks by health professionals, and creative plays on the issues for the entire school to attend. On our Instagram page, we posted parodies, posts, and reels on our monthly topics, such as eating disorders, organic farming, food adulteration, and "Covid: Food Myth-Busting."</p>
      <p>The last item is a black journal with the faded minions' stickers. I opened the page containing a bucket list I made when I was eight. Amongst them, the already checked boxes read: getting a phone, a picnic at a waterpark, becoming a student council member, helping the community, and more. The remaining unchecked box read: being the first person in my family to study abroad, becoming a successful entrepreneur, developing innovative products, buying a house, and many other dreams which I am working to accomplish in my life. As I closed my eyes, I recalled my achievements and the hurdles I crossed to procure them. I became an improved person at every stage, making meaningful contributions to the team. Sometimes my leadership brought us closer to victory; other times, my backhanded support in the group made me appreciate the value of teamwork.</p>
    `,
  },
];

const PLACEHOLDER_ICON = `
  <svg class="ph__icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false">
    <rect x="4" y="7" width="32" height="26" rx="5" />
    <path d="M4 28l9-9 7 7 5-5 11 11" />
    <circle cx="27" cy="15" r="3" />
  </svg>`;

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

function formatDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return dateFormat.format(new Date(y, m - 1, d));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[c]);
}

// Point the featured "Read the latest essay" button at the newest essay by date.
function linkLatest() {
  const link = document.getElementById("latest-link");
  if (!link || !essays.length) return;
  const latest = essays.reduce((a, b) => (b.date > a.date ? b : a));
  link.href = `#${encodeURIComponent(latest.slug)}`;
  link.setAttribute("aria-label", `Read the latest essay: ${latest.title}`);
}

// Point each About-section topic at the newest essay in that category.
function linkTopics() {
  document.querySelectorAll("[data-topic]").forEach((link) => {
    const matches = essays.filter((essay) => essay.category === link.dataset.topic);
    if (!matches.length) return;
    const newest = matches.reduce((a, b) => (b.date > a.date ? b : a));
    link.href = `#${encodeURIComponent(newest.slug)}`;
  });
}

function renderEssays() {
  const grid = document.getElementById("essay-grid");
  if (!grid) return;

  grid.innerHTML = essays.map((essay) => `
    <article class="card">
      <a class="card__link" href="#${encodeURIComponent(essay.slug)}">
        ${essay.image
          ? `<img class="photo card__media" src="${escapeHtml(essay.image)}" width="1600" height="1200" alt="" loading="lazy" />`
          : `<div class="ph card__media" aria-hidden="true">
          ${PLACEHOLDER_ICON}
          <span class="ph__label">Image placeholder</span>
        </div>`}
        <span class="card__category">${escapeHtml(essay.category)}</span>
        <h3 class="card__title">${escapeHtml(essay.title)}</h3>
        <time class="card__date" datetime="${escapeHtml(essay.date)}">${formatDate(essay.date)}</time>
        <p class="card__excerpt">${escapeHtml(essay.excerpt)}</p>
      </a>
    </article>`).join("");
}

/* ==========================================================================
   Essay routing: "#<slug>" shows that essay, any other hash shows the
   landing page, so each essay is a shareable, back-button-friendly link.
   ========================================================================== */

function readMinutes(html) {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function initRouter() {
  const home = document.getElementById("home-view");
  const view = document.getElementById("essay-view");
  if (!home || !view) return;

  const title = document.getElementById("essay-title");
  const category = document.getElementById("essay-category");
  const date = document.getElementById("essay-date");
  const read = document.getElementById("essay-read");
  const body = document.getElementById("essay-body");
  const bySlug = new Map(essays.map((essay) => [essay.slug, essay]));
  const baseTitle = document.title;

  title.tabIndex = -1;

  function showEssay(essay) {
    category.textContent = essay.category;
    title.textContent = essay.title;
    date.dateTime = essay.date;
    date.textContent = formatDate(essay.date);
    read.textContent = `${readMinutes(essay.body)} min read`;

    const note = essay.note
      ? `<aside class="essay__note" aria-label="Author's note"><span class="essay__note-label">Author's note</span><p>${escapeHtml(essay.note)}</p></aside>`
      : "";
    const refs = essay.refs && essay.refs.length
      ? `<section class="essay__refs"><h2>References</h2><ul>${essay.refs.map((ref) => `<li>${escapeHtml(ref)}</li>`).join("")}</ul></section>`
      : "";
    body.innerHTML = note + essay.body.trim() + refs;

    home.hidden = true;
    view.hidden = false;
    document.title = `${essay.title} · Hanisha Pulimaddi`;
    window.scrollTo({ top: 0, behavior: "instant" });
    title.focus({ preventScroll: true });
  }

  function showHome(anchor) {
    const wasEssay = !view.hidden;
    view.hidden = true;
    home.hidden = false;
    document.title = baseTitle;

    // The browser tried to scroll to the anchor while it was hidden, so
    // scroll again now that the landing page is visible.
    if (wasEssay) {
      const target = anchor && document.getElementById(anchor);
      if (target) target.scrollIntoView({ behavior: "instant" });
      else window.scrollTo({ top: 0, behavior: "instant" });
    }
  }

  function route() {
    const hash = decodeURIComponent(location.hash.slice(1));
    const essay = bySlug.get(hash);
    if (essay) showEssay(essay);
    else showHome(hash);
  }

  window.addEventListener("hashchange", route);
  route();
}

/* ==========================================================================
   Theme toggle
   ========================================================================== */

function initThemeToggle() {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  if (!toggle) return;

  const currentTheme = () => root.getAttribute("data-theme") || (systemDark.matches ? "dark" : "light");

  const sync = () => {
    const isDark = currentTheme() === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  };

  toggle.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable */ }
    sync();
  });

  // Until the visitor picks a theme, keep following the system setting.
  systemDark.addEventListener("change", () => {
    if (!root.hasAttribute("data-theme")) sync();
  });

  sync();
}

/* ==========================================================================
   Contact form (no backend: hands off to the visitor's mail app)
   ========================================================================== */

function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim() || `Hello from ${name}`;
    const message = String(data.get("message") || "").trim();

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const href = `mailto:hani.pulimaddi@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    status.textContent = "Your email app should open with the message ready to send.";
  });
}

renderEssays();
linkLatest();
linkTopics();
initRouter();
initThemeToggle();
initContactForm();

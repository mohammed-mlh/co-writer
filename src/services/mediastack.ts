const countries = [
  "us",
  "gb",
  "ca",
  "au",
  "nz",
];
const countriesText = countries.join(",");

// Define the type for the article object returned by the API
interface MediaStackArticle {
  title: string;
  description: string;
  url: string;
  published_at: string;
}

export const getNews = async () => {
  const response = await fetch(
    `https://api.mediastack.com/v1/news?access_key=${process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY}&countries=${countriesText}&languages=en&sort=published_desc&limit=25&categories=business,technology,science,health,entertainment,general,-politics,-sports`
  );
  const data = await response.json();
  const articles = (data.data as MediaStackArticle[]).map((article) => ({
    title: article.title,
    description: article.description,
    url: article.url,
    publishedAt: article.published_at,
  }));
  return articles;
};

export const testNewsContent = `anada's Diallo picks up another win on grass as Wimbledon draws near
Predators drive rapid changes in guppy reproduction and body shape
Microsoft unveils new Mu language model aimed at running on PCs
Downtown shooting is another in a string of troubling violent crimes
Michael Jordan's Fan Favorite Air Jordan 8 'Aqua' Is Returning for the First Time in a Decade
Coursera Is Passing With Flying Colors
New genes, old job: Recently evolved genes play key role in cell division, study finds
Live Oak hosts sports camps during the summer
Meteorite-common amino acid induces formation of nanocavities in clay mineral, hinting at life's origins
SCAP: Unlocking Value In The Small-Cap Income Opportunity
President Trump Announces Attack On Iran
The concerning math behind aging-in-place
The Wolf Watch: South County native finishes second in run for top NHL rookie
Kolhapuri Rocks Prada Show
¡Qué calor! Te traemos algunas recomendaciones para enfrentar este fenómeno
Planet Fitness: Cementing Its Chops As A Growth Stock (Upgrade)
Payment Giants Slide on Stablecoin Buzz—Is Now the Time to Buy?
Scorched: DC opens cooling centers as heat wave bakes region
US Shale Producers Unlikely to Heed Trump's Call to Drill as Rally Fades
Alligator nearly chomped off kayaker's arm — before nearby hero poked it in the eyes
Iran says missile barrage on Qatar was same number as bombs used by US on nuclear sites, signaling desire to de-escalate
iPhone 17 Colors: Is Purple the New Color for the Base Model? We're Tracking the Rumors
Iran launches missile attacks on US bases in Qatar, Iraq
Iran launches missile attacks on US bases in Qatar, Iraq
Iran launches missile attacks on US bases in Qatar, Iraq
[`;
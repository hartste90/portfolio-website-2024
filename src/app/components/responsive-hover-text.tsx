
export function responsiveHoverText(text: string)
{
  let heroMainTextArray: JSX.Element[] = [];
  text.split(" ").map((word) => {
    heroMainTextArray.push(<a key={word} className='lift-on-hover inline-block text-3xl sm:text-6xl'>{word}</a>);      
    heroMainTextArray.push(<span key={word+"space"} className='lift-on-hover inline-block text text-3xl sm:text-6xl'>&nbsp;</span>);
  });
  return heroMainTextArray;
}
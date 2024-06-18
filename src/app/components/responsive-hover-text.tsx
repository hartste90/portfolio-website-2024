
export function responsiveHoverText(text: string)
{
  let heroMainTextArray: JSX.Element[] = [];
  text.split(" ").map((word) => {
    heroMainTextArray.push(<a className='lift-on-hover inline-block text-3xl sm:text-6xl'>{word}</a>);      
    heroMainTextArray.push(<span className='lift-on-hover inline-block text text-3xl sm:text-6xl'>&nbsp;</span>)
  });
  return heroMainTextArray;
}
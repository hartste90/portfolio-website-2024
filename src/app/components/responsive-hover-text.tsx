
export function responsiveHoverText(text: string)
{
  let heroMainTextArray: JSX.Element[] = [];
  text.split(" ").map((word) => {
    if(word === 'delight')
    {
      heroMainTextArray.push(<a className='lift-on-hover'>{word}</a>);
    }
    else{
      heroMainTextArray.push(<a className='lift-on-hover'>{word}</a>);      
    }
    heroMainTextArray.push(<span>&nbsp;</span>)
  });
  return heroMainTextArray;
}
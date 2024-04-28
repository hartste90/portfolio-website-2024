import {useEffect, useRef} from 'react';

const Writepad = (props:any) => {

    // Application variables
    var position = {x: 0, y: window.innerHeight/2};
    var counter = 0;
    var minFontSize = 10;
    var angleDistortion = 0;
    var letters = "My name is Steve.  I use code to create moments of delight and impact for users.  Check out some of my projects. With a rich tapestry of 15 years in software development, I've mastered the art of weaving together frontend and backend technologies to craft immersive experiences that captivate users. As a Full Stack Developer, I'm not just coding; I'm orchestrating digital symphonies that resonate with elegance and efficiency. My journey is defined by a relentless pursuit of innovation, infusing every line of code with creativity and ingenuity. Whether I'm sculpting sleek interfaces or architecting robust backend systems, my passion for creating user-centric experiences shines through. In an ever-evolving technological landscape, I thrive on the thrill of exploration, embracing new tools and methodologies to push the boundaries of what's possible. With a blend of technical prowess and a flair for the imaginative, I'm poised to enchant users and elevate projects to new heights of excellence.";


    const ref = useRef();
    console.log("Ref: " + ref);
    var canvas: any;
    var ctx: CanvasRenderingContext2D | null | undefined;
    var mouse = {x: 0, y: 0, down: false}

    useEffect(() => {
        console.log("Using effect");
        canvas = ref.current;
        ctx = canvas?.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        

        function mouseMove ( event:any ){
            mouse.x = event.pageX;
            mouse.y = event.pageY;
            draw(event);
        }
          
        function draw(event:any) {
            if ( mouse.down ) {
                var d = distance( position, mouse );
                var fontSize = minFontSize + d/2;
                var letter = letters[counter];
                var stepSize = textWidth( letter, fontSize );
                

                if (stepSize !== undefined && d > stepSize) {
                var angle = Math.atan2(mouse.y-position.y, mouse.x-position.x);
                

                if(ctx !== null && ctx !== undefined)
                {
                    ctx.font = fontSize + "px Georgia";
                    ctx.save();
                    ctx.translate( position.x, position.y);
                    ctx.rotate( angle );
                    ctx.fillStyle = `rgb(79 70 229)`;
                    ctx.fillText(letter,0,0);
                    ctx.restore();
                }
            
                counter++;
                if (counter > letters.length-1) {
                    counter = 0;
                }
                
                //console.log (position.x + Math.cos( angle ) * stepSize)
                position.x = position.x + Math.cos(angle) * stepSize;
                position.y = position.y + Math.sin(angle) * stepSize;

                // if(ctx !== null && ctx !== undefined)
                // {
                //     ctx.clearRect( 0, 0, 300, 100);
                //     ctx.font = "20px Georgia";
                //     ctx.fillStyle = "black";
                //     // ctx.fillText("MouseX: " + Math.round(position.x), 10, 50);
                //     // ctx.fillText("MouseY: " + Math.round(position.y), 10, 70);
                // }
            
                }
            }     
        }
        
        function distance( pt:any, pt2:any ){
            var xs = 0;
            var ys = 0;
            
            xs = pt2.x - pt.x;
            xs = xs * xs;
            
            ys = pt2.y - pt.y;
            ys = ys * ys;
            
            return Math.sqrt( xs + ys );
        }
        
        function mouseDown( event:any ){
        mouse.down = true;
        position.x = event.pageX;
        position.y = event.pageY;
        
        // document.getElementById('info').style.display = 'none';
        }
        
        function mouseUp( event:any ){
            mouse.down = false;
        }
        
        function doubleClick( event:any ) {
        canvas.width = canvas.width; 
        }
          
          function textWidth( string:any, size:any ) {
            if(ctx !== null && ctx !== undefined)
        {
            ctx.font = size + "px Georgia";
            return ctx.measureText( string ).width;
        }
            
    };

        canvas.addEventListener('mousemove', mouseMove, false);
        console.log("added event listener");
        canvas.addEventListener('mousedown', mouseDown, false);
        canvas.addEventListener('mouseup',   mouseUp,   false);
        canvas.addEventListener('mouseout',  mouseUp,  false);  
        canvas.addEventListener('dblclick',  doubleClick, false);
    
        window.onresize = function(event) {
            console.log("resizing window: "+ window.innerWidth + ", " + window.innerHeight);
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          }

        if(ctx !== null && ctx !== undefined)
        {
            
        }
        else{
            console.log("context is bad");
        }

    },[]);


    return (
        <>
        <canvas ref={ref} className='absolute z-10' {...props}/>
        </>
    )
}

export default Writepad
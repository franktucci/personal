import {useRef, useEffect, useState} from 'react';

export default function Canvas(props) {
  const attributes = props.attributes;
  const colors = props.colors;
  const lineartNames = ["line", "horn", "signature"];

  const [rendered, setRendered] = useState(false);
  const [bufferArr, setBufferArr] = useState([]);
  const [imgArr, setImgArr] = useState([]);

  const canvasRef = useRef();

  async function draw(buffer, bufferCtx, i, mainCtx) {
    await new Promise(r => imgArr[i].onload=r, imgArr[i].src="./derg/" + Object.keys(attributes)[i] + ".png");

    bufferCtx.globalCompositeOperation = "destination-over";
    bufferCtx.fillStyle = props.colors[i];
    bufferCtx.fillRect(0, 0, 300, 300);

    bufferCtx.globalCompositeOperation = "destination-in";
    bufferCtx.drawImage(imgArr[i], 0, 0, 300, 300);

    mainCtx.drawImage(buffer, 0, 0);
  }

  async function drawLineart(buffer, bufferCtx, i, mainCtx) {
    await new Promise(r => imgArr[i].onload=r, imgArr[i].src="./derg/" + lineartNames[i - colors.length] + ".png");

    bufferCtx.globalCompositeOperation = "destination-over";
    bufferCtx.drawImage(imgArr[i], 0, 0, 300, 300);
    
    mainCtx.drawImage(buffer, 0, 0);
  }
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    for(let i = 0; i < colors.length + lineartNames.length; i++) {
      imgArr.push(new Image());
    }   

    for(let i = 0; i < colors.length + lineartNames.length; i++) {
      const buffer = document.createElement("canvas");
      const bufferCtx = buffer.getContext("2d");
      buffer.width = 300;
      buffer.height = 300;
      bufferCtx.mozImageSmoothingEnabled = false;
      bufferCtx.webkitImageSmoothingEnabled = false;
      bufferCtx.msImageSmoothingEnabled = false;
      bufferCtx.imageSmoothingEnabled = false;
      bufferArr.push(buffer);

      if(i < colors.length) {
        draw(buffer, bufferCtx, i, ctx);
      }
      else {
        drawLineart(buffer, bufferCtx, i, ctx);
      }
    }

    ctx.canvas.width = 300;
    ctx.canvas.height = 300;
    setRendered(true);
  }, []);

  useEffect(() => {
    if(!rendered) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const bufferCtx = bufferArr[attributes[props.attributeSelection]].getContext('2d');

    bufferCtx.globalCompositeOperation = "source-over";
    bufferCtx.fillStyle = props.colors[attributes[props.attributeSelection]];
    bufferCtx.fillRect(0, 0, 300, 300);

    bufferCtx.globalCompositeOperation = "destination-in";
    bufferCtx.drawImage(imgArr[attributes[props.attributeSelection]], 0, 0, 300, 300);

    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(bufferArr[attributes[props.attributeSelection]], 0, 0);

    const LineartBufferStartIdx = colors.length;
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(bufferArr[LineartBufferStartIdx], 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(bufferArr[LineartBufferStartIdx + 1], 0, 0);
  }, [props.counter]);

  return (
    <canvas id="canvas" ref={canvasRef}/>
  );
}

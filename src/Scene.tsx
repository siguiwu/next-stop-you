import {PhotoScene} from './PhotoScene';
import {LibraryScene} from './LibraryScene';
import {useEffect,useRef,useState} from 'react';
import {Application,Graphics,Container,Text,Assets,Sprite} from 'pixi.js';
import type {SceneKind} from './story';
type Props={chapterId?:string;onPhotoOpen?:(id:string)=>void;kind:SceneKind;beat:number;active:boolean;reduced:boolean;sound?:boolean;onInteract:()=>void};
function PaintedScene({kind,beat,active,reduced,onInteract}:Props){const ref=useRef<HTMLDivElement>(null);const [failed,setFailed]=useState(false);const cb=useRef(onInteract);cb.current=onInteract;
useEffect(()=>{let disposed=false;let app:Application|undefined;const mount=ref.current!;
(async()=>{const a=new Application();app=a;await a.init({width:800,height:650,background:0xe9e3d1,antialias:true,resolution:Math.min(devicePixelRatio,2),autoDensity:true,preference:'webgl'});if(disposed){a.destroy(true);return;}mount.appendChild(a.canvas);a.canvas.setAttribute('aria-hidden','true');const scene=new Container();a.stage.addChild(scene);
const rect=(x:number,y:number,w:number,h:number,c:number,r=0)=>{const g=new Graphics();r?g.roundRect(x,y,w,h,r):g.rect(x,y,w,h);g.fill(c);scene.addChild(g);return g};
const poly=(pts:number[],c:number,alpha=1)=>{const g=new Graphics().poly(pts).fill({color:c,alpha});scene.addChild(g);return g};
const circle=(x:number,y:number,r:number,c:number,alpha=1)=>{const g=new Graphics().circle(x,y,r).fill({color:c,alpha});scene.addChild(g);return g};
const line=(pts:number[],c:number,w=2,alpha=1)=>{const g=new Graphics();g.moveTo(pts[0],pts[1]);for(let i=2;i<pts.length;i+=2)g.lineTo(pts[i],pts[i+1]);g.stroke({color:c,width:w,alpha});scene.addChild(g);return g};
const label=(s:string,x:number,y:number,size=18,c=0x315347)=>{const t=new Text({text:s,style:{fontFamily:'Georgia, serif',fontSize:size,fill:c,letterSpacing:3}});t.position.set(x,y);scene.addChild(t);return t};
const tree=(x:number,y:number,s=1)=>{rect(x-4*s,y,8*s,100*s,0x6b7159);for(let k=0;k<7;k++)circle(x+Math.sin(k*2)*38*s,y+Math.cos(k*3)*28*s,43*s,k%2?0x76866b:0x526e58)};
const book=(x:number,y:number,s=1)=>{poly([x,y,x+65*s,y-8*s,x+65*s,y+39*s,x,y+49*s],0xf8f1da);poly([x+65*s,y-8*s,x+124*s,y,x+124*s,y+49*s,x+65*s,y+39*s],0xe5d6b4);line([x+65*s,y-8*s,x+65*s,y+39*s],0xa99976,2);for(let i=1;i<5;i++){line([x+8*s,y+i*8*s,x+54*s,y-6*s+i*8*s],0xc2b695,1);line([x+75*s,y-5*s+i*8*s,x+115*s,y+2*s+i*8*s],0xc2b695,1)}};
let animated:Graphics[]=[];let floatLayer=new Container();a.stage.addChild(floatLayer);
if(['library','empty','meeting'].includes(kind)){
try{const texture=await Assets.load('media/library.webp');if(disposed)return;const backdrop=new Sprite(texture);backdrop.width=800;backdrop.height=650;scene.addChild(backdrop);}catch{rect(0,0,800,650,0xd4d3b8);}// Two neighbouring four-seat tables, foreground is the narrator's table.
for(const x of [90,440]){rect(x+18,337,18,157,0x69573e);rect(x+250,337,18,157,0x69573e);poly([x,300,x+240,300,x+300,380,x-35,380],0xb78d57);rect(x-35,380,335,13,0x83663f);book(x+120,317,.48);for(const dx of [15,185]){rect(x+dx,265,48,50,0x54715e,9);rect(x+dx,399,48,50,0x54715e,9);}}
if(!(kind==='empty'||(kind==='library'&&beat>=3))){const girl=new Container();const hair=new Graphics().ellipse(0,0,28,43).fill(0x272c27);const body=new Graphics().roundRect(-36,15,72,71,18).fill(0xf2e9d8);const face=new Graphics().ellipse(0,-1,18,24).fill(0xe6b997);girl.addChild(body,hair,face);girl.addChild(new Graphics().ellipse(-17,0,10,34).fill(0x272c27));girl.position.set(200,260);scene.addChild(girl);{circle(193,257,1.8,0x463a32);circle(205,257,1.8,0x463a32);line([196,268,202,268],0x955e4e,1);}}
poly([0,542,550,502,800,650,0,650],0x987547);book(190,558,1.5);rect(50,575,95,20,0x315a4c,3);rect(54,566,95,12,0xc4b480,2);label('大同大学 · 2023',535,600,15,0xf7edd2);
if(kind==='library'&&beat===0){rect(0,0,800,650,0x213d34).alpha=.25;label('书页之间，故事还没有开始。',180,450,23,0xfff2d1);}
}else if(kind==='chat'){
rect(0,0,800,650,0x244c42);for(let i=0;i<6;i++){const g=rect(i%2?290:120,100+i*65,350,43,i%2?0xd5dfc4:0xf0e6ce,16);g.alpha=beat?1:.45;}label('2024 / 05 / 12',220,45,28,0xf2dfac);label('终于，加上了你。',230,548,25,0xf1e7cf);
}else if(kind==='date'){
rect(0,0,800,650,0x224b40);circle(400,300,215,0xc7a96a,.12);rect(220,100,360,410,0xf6eedc,12);rect(220,100,360,75,0xa96851,12);label('JUNE · 2024',278,125,27,0xfff3db);label('12',292,202,150,0x305248);label('从今天，成为我们',268,417,23);for(let i=0;i<12;i++){circle(95+i*57,565+Math.sin(i)*20,3,0xe2c58e,.7);}
}else if(kind==='train'){
rect(0,0,800,650,0xc0cdb5);circle(630,130,52,0xf1d294);for(let i=0;i<4;i++)poly([i*250-150,420,i*250+80,130+i*32,i*250+360,420],i%2?0x7d9983:0x9fb19a);rect(0,420,800,140,0x6d896f);for(let x=0;x<850;x+=95)tree(x,350,.5);rect(0,550,800,100,0x254c42);rect(0,0,800,47,0x24483e);rect(0,0,55,650,0x24483e);rect(745,0,55,650,0x24483e);rect(390,0,16,565,0x24483e);rect(33,545,735,25,0xc3ab78);label('兰州  ↔  古交',280,599,24,0xf2dfb3);
}else if(kind==='rain'||kind==='zoo'){
rect(0,0,800,650,kind==='rain'?0xa8b6a7:0xd1ddbd);circle(615,115,60,0xefdcab,kind==='rain'?.2:.8);poly([320,320,480,320,720,650,40,650],0xc8bca0);for(let i=0;i<8;i++)tree((i<4?1:6)*100+(i%4)*25,210+(i%4)*60,.8+(i%4)*.1);label(kind==='rain'?'那个下雨的日子':'太原动物园 · 夏日',270,565,23,0x264d42);
if(kind==='rain')for(let i=0;i<70;i++){const g=line([Math.random()*800,Math.random()*650,0,0],0xe9ede4,1,.4);g.clear();g.moveTo(0,0).lineTo(-9,23).stroke({color:0xe6efe8,width:1,alpha:.5});g.position.set(Math.random()*800,Math.random()*650);animated.push(g);}
}else{
rect(0,0,800,650,0x3f5e50);rect(60,40,680,320,0x67816b,120);circle(400,130,75,0xe8ce99,.35);poly([50,390,650,360,850,650,-90,650],0xb89462);for(const x of [195,570]){circle(x,455,67,0xe9dfc4);circle(x,455,48,0xc4ab76);rect(x+80,414,6,100,0x483d2e);rect(x+92,414,6,100,0x483d2e);}circle(395,435,88,0x31493b);circle(395,435,72,0xa97a4a);for(let i=0;i<12;i++)circle(395+Math.sin(i*2)*43,435+Math.cos(i*3)*42,13,i%2?0xc89960:0x718453);label('一起吃饭的普通日子',245,90,28,0xf5e8c6);}
const glow=circle(400,310,65,0xf7dfac,.1);glow.visible=active;
if(!reduced)a.ticker.add(()=>{const t=performance.now()/1000;glow.alpha=.07+Math.sin(t*2)*.04;for(const g of animated){g.y+=5;if(g.y>660){g.y=-25;g.x=Math.random()*800;}}scene.y=Math.sin(t*.5)*1.4;});
})().catch(()=>{if(!disposed)setFailed(true)});return()=>{disposed=true;if(app?.renderer)app.destroy(true,{children:true});};},[kind,beat,active,reduced]);
return <div className="scene-wrap" onPointerDown={e=>{(e.currentTarget as HTMLElement).dataset.x=String(e.clientX)}} onPointerUp={e=>{if(kind==='train'&&Math.abs(e.clientX-Number(e.currentTarget.dataset.x))>45)cb.current()}}><div className="pixi-scene" ref={ref}/>{failed&&<div className="scene-fallback"><span>✦</span><p>回忆仍在这里</p><small>当前设备无法显示场景动画，可使用下方按钮继续故事。</small></div>}<div className="scene-vignette"/><span className="scene-caption">{['library','meeting'].includes(kind)?'校园回忆 · 示意插画':kind==='rain'?'大同 · 雨天回忆':'属于我们的旅程'}</span></div>
}



export function Scene(props:Props){return props.kind==='library'?<LibraryScene {...props}/>:props.chapterId?<PhotoScene {...props}/>:<PaintedScene {...props}/>}



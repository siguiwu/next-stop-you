export const adjacent=(a:number,b:number)=>Math.abs(Math.floor(a/3)-Math.floor(b/3))+Math.abs(a%3-b%3)===1;
export function shuffle(steps=6):number[]{const a=[0,1,2,3,4,5,6,7,8];let previous=-1;for(let i=0;i<steps;i++){const blank=a.indexOf(8),options=a.map((_,j)=>j).filter(j=>adjacent(j,blank)&&j!==previous);const p=options[Math.floor(Math.random()*options.length)];[a[p],a[blank]]=[a[blank],a[p]];previous=blank}return a.every((v,i)=>v===i)?shuffle(steps):a}
export const calculateScore=(moves:number,cost:number)=>Math.max(10,100-Math.max(0,moves-24)*2-cost);
export function readPuzzle(id:string){try{const value=JSON.parse(localStorage.getItem('puzzle:'+id)||'null');const board=Array.isArray(value)?value:value?.board;if(Array.isArray(board)&&board.length===9&&new Set(board).size===9&&board.every(n=>Number.isInteger(n)&&n>=0&&n<9))return {board,moves:Math.max(0,Number(value.moves)||0),cost:Math.max(0,Number(value.cost)||0)}}catch{}return {board:shuffle(),moves:0,cost:0}}

const solutionNext=new Map<string,number>([['012345678',-1]]);const searchQueue=['012345678'];let searchHead=0;
export function nextHint(board:number[]):number{const target=board.join('');while(!solutionNext.has(target)&&searchHead<searchQueue.length){const key=searchQueue[searchHead++],blank=key.indexOf('8');for(let j=0;j<9;j++){if(!adjacent(blank,j))continue;const chars=key.split('');[chars[j],chars[blank]]=[chars[blank],chars[j]];const next=chars.join('');if(!solutionNext.has(next)){solutionNext.set(next,blank);searchQueue.push(next)}}}return solutionNext.get(target)??-1}


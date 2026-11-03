import media from './media.json';
// Photos are rewards from the supplied albums, not claims of photographs taken at unrecorded events.
export const CHAPTER_PHOTOS:Record<string,string>={library:'wuyue-1',meeting:'wuyue-10',wuyue:'wuyue-3',rain:'wuyue-19',together:'wuyue-21',xingmao:'xingmao-9',zoo:'zoo-10',train:'xingmao-18'};
export function getChapterPhoto(id:string){const photo=media.find(m=>m.id===CHAPTER_PHOTOS[id]&&m.type==='image');if(!photo)throw new Error('Missing configured chapter photo: '+id);return photo}

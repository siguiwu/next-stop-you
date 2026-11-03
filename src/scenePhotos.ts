import media from './media.json';
export const SCENE_PHOTOS:Record<string,{ids:string[];background:string;note:string}>={
meeting:{ids:['wuyue-2','wuyue-10','wuyue-23'],background:'media/library.webp',note:'校园场景为插画，照片是后来留下的回忆'},
wuyue:{ids:['wuyue-3','wuyue-9','wuyue-20'],background:'media/wuyue-9.webp',note:'来自你整理的吾悦广场相册'},
rain:{ids:['wuyue-11','wuyue-12','wuyue-19'],background:'media/rain-scene.webp',note:'雨天为回忆示意插画，照片为后来的合照'},
together:{ids:['wuyue-1','wuyue-21','wuyue-13'],background:'media/cover.webp',note:'纪念日配以你们后来留下的照片'},
xingmao:{ids:['xingmao-5','xingmao-9','xingmao-18','xingmao-1'],background:'media/xingmao-9.webp',note:'来自你整理的星茂汇相册 · 包含真实视频'},
zoo:{ids:['zoo-1','zoo-9','zoo-17'],background:'media/zoo-8.webp',note:'来自你整理的太原动物园相册'},
train:{ids:['xingmao-12','wuyue-26','xingmao-20'],background:'media/journey-scene.webp',note:'旅途插画与后来的合照，等待你的火车照片补充'}
};
export function sceneMedia(id:string){const config=SCENE_PHOTOS[id];if(!config)throw Error('Missing scene '+id);return {config,items:config.ids.map(id=>{const item=media.find(m=>m.id===id);if(!item)throw Error('Missing scene photo '+id);return item})}}

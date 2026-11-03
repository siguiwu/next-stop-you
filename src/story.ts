export type SceneKind='library'|'empty'|'meeting'|'chat'|'dinner'|'rain'|'date'|'zoo'|'train';
export type Beat={text:string;action:string;detail:string;kind?:SceneKind};
export type Chapter={id:string;title:string;subtitle:string;date:string;kind:SceneKind;group?:string;beats:Beat[]};
export const chapters:Chapter[]=[
{id:'library',title:'抬头的时候',subtitle:'还没认识你，就已经在期待你',date:'2023 · 大同大学',kind:'library',beats:[
{text:'那年，我们都在为考研努力。四个人一张的书桌，装着各自的未来。那时候，我还不认识你。',action:'翻开书页',detail:'书页翻过，日子也一页页向前。'},
{text:'我坐在左后方，你坐在另一张桌子的左前方。桌子离得很近，抬起头，就能望向你。',action:'抬头看看',detail:'在人群里，我开始留意一个特别的人。'},
{text:'学习累了，我会偷偷看你。有时，你也恰好抬起头，我们的视线就这样碰在一起。',action:'寻找那道视线',detail:'还没有一句对白，却多了一点期待。'},
{text:'后来，暑假结束，你换了学习的位置。我不知道你去了哪里，只能继续准备考试。',action:'再看一眼座位',detail:'同一个方向，暂时没有了你的身影。'}]},
{id:'meeting',title:'终于，走向你',subtitle:'从一个名字，到有话想对你说',date:'考研成绩公布后',kind:'meeting',beats:[
{text:'成绩出来后，我们又在图书馆相遇。这一次，我主动和你说了话。',action:'向前一步',detail:'那一步，终于把两条平行的日常连在一起。'},
{text:'我曾看见你笔记本上的姓名，却不知道你在哪个班。后来，我们通过学校的企业微信聊了起来。',action:'打开新的联系',detail:'从知道你的名字，变成想知道你今天过得怎样。'},
{text:'你没能考上太原理工，不想调剂，开始准备考编。我则忙着准备调剂面试。临近毕业，我们各自面对人生的新路。',action:'翻到下一页',detail:'未来还不确定，但我们已经开始分享彼此的日常。'}]},
{id:'wechat',title:'消息，都是你',subtitle:'想说的话，忽然变得很多',date:'2024.05.12',kind:'chat',beats:[
{text:'5月12日，我们终于加上了微信。之前还有点不好意思的两个人，开始了热烈又频繁的聊天。',action:'点亮聊天窗口',detail:'不是复刻的聊天记录，而是关于那段日子的回忆。'},
{text:'从学习和未来，聊到生活里的细枝末节。你开始出现在我越来越多的时间里。',action:'收藏这个日子',detail:'2024年5月12日，终于加上了你。'}]},
{id:'wuyue',title:'第一次，一起出去',subtitle:'把屏幕里的陪伴，带到现实里',date:'吾悦广场 · 王婆大虾',kind:'dinner',group:'wuyue',beats:[
{text:'第一次一起出去，我们去了吾悦广场，在王婆大虾吃饭。那些平常的地点，从此有了属于我们的意义。',action:'走到餐桌旁',detail:'真正的细节，都留在我们的照片里。'},
{text:'后来再想起这一天，记住的除了地点，还有终于坐在彼此身边的我们。',action:'打开那天的相册',detail:'这组照片，成为旅程里第一份可以收藏的回忆。'}]},
{id:'rain',title:'那场雨，和那一步',subtitle:'谢谢你，让我敢向你靠近',date:'大同 · 植物园 / 日期待补',kind:'rain',beats:[
{text:'还有一次，我们去了大同的植物园，后来下起大雨。那天聊了很多，也一起吃了东北铁锅炖。',action:'听见雨落下',detail:'这是大同的雨天，与8月19日的太原动物园是两次出行。'},
{text:'那时的我有些自卑，害怕辜负你。是你让我鼓起勇气，勇敢迈出那一步。',action:'让心事慢慢说完',detail:'具体对白没有留下，就让这份心意好好留在这里。'},
{text:'这场雨发生的准确日期，还等我们一起回想。它不是6月12日，却同样值得被记住。',action:'收好这段回忆',detail:'有些日期暂时模糊，有些感觉却一直清楚。'}]},
{id:'together',title:'从今天，成为我们',subtitle:'一个值得反复记住的日期',date:'2024.06.12',kind:'date',beats:[
{text:'2024年6月12日，我们确定了关系。故事从很早就开始，这一天，我们终于成为了恋人。',action:'按住这份心意',detail:'六月十二日，写进属于我们的日历。'},
{text:'我们像两个懵懂的小孩子，在爱情的道路上慢慢摸索。以后许多陌生的事情，可以一起学。',action:'留下这一天',detail:'2024.06.12 · 我们在一起了'}]},
{id:'xingmao',title:'和你，再去吃顿饭',subtitle:'普通的一天，也想好好收藏',date:'2024.07.07 · 星茂汇',kind:'dinner',group:'xingmao',beats:[
{text:'7月7日，已经在一起的我们去了学校附近的商场，后来到星茂汇吃拌饭。',action:'赴一场小约会',detail:'这是确定关系之后的约会。'},
{text:'日子里有很多值得记住的事。一顿饭、一次出门，还有镜头里的你，都可以是一份回忆。',action:'翻开照片与片段',detail:'照片保留真实的我们，视频点击后才会播放。'}]},
{id:'zoo',title:'一起，去看世界',subtitle:'夏日里，多一点并肩的时间',date:'2024.08.19 · 太原动物园',kind:'zoo',group:'zoo',beats:[
{text:'8月19日，我们去了太原动物园。这个夏天，有了属于我们的又一次出行。',action:'沿着小路走走',detail:'太原动物园，和大同植物园的雨天分开收藏。'},
{text:'这一天看见了什么、笑成什么样，照片比旁白记得更具体。慢慢看，慢慢想起来。',action:'收藏这一天',detail:'这里放着那天真实留下的照片。'}]},
{id:'train',title:'下一站，还是你',subtitle:'把想念，变成一次次出发',date:'开学之后 · 异地生活',kind:'train',beats:[
{text:'你为准备考试提前回了家，我们开始异地。我陪你去古交面试，那是确定关系后第一次一起出来。',action:'翻看这一程',detail:'面试的准确日期还未记录，这里作为回忆插页呈现。'},
{text:'后来，我来到兰州交通大学，你去了古交的事业单位。你常说，是我带给了你好运。',action:'望向远方',detail:'我想说：是我们命中注定，互相成就。'},
{text:'毕业时，甚至没来得及拍一张合照，我们就开启了异地。开学后，基本每个月见一次面。',action:'拖动车窗，向你出发',detail:'这一段旅途，还等待我们的车票、照片和更多故事。'},
{text:'从图书馆的一次对视，到每一趟奔向你的列车。日子还在继续，下一页，也想和你一起写。',action:'抵达我们的下一页',detail:'抬头，下一站是你。'}]}
];
const messages=chapters.splice(2,1)[0];
chapters[1].beats.push(...messages.beats.map(b=>({...b,kind:'chat' as const})));
export const TOTAL_BEATS=chapters.reduce((n,c)=>n+c.beats.length,0);


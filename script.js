// 模拟数据
const destinations = [
    {
        id: 1,
        name: '巴厘岛',
        country: '印度尼西亚',
        image: 'images/bali.jpg',
        description: '巴厘岛是印度尼西亚最著名的旅游胜地，以其美丽的海滩、壮观的火山和丰富的文化遗产而闻名。',
        rating: 4.8,
        reviews: 2345,
        price: 5999,
        category: 'beach',
        tags: ['海滩', '浪漫', '度假'],
        lat: -8.3405,
        lng: 115.0920,
        visitors: 120000,
        bestTime: '4月-10月',
        duration: '5-7天',
        adventure: {
            images: ['images/bali-adventure1.jpg', 'images/bali-adventure2.jpg', 'images/bali-adventure3.jpg', 'images/bali-adventure4.jpg'],
            highlights: ['乌布皇宫', '圣泉寺', '努沙杜瓦海滩', '巴杜尔火山'],
            detailedInfo: '巴厘岛不仅有美丽的海滩，更是文化与自然的完美结合。乌布皇宫是巴厘岛王室的居所，展现了传统建筑艺术的精髓。圣泉寺是巴厘岛最著名的寺庙之一，泉水被认为具有神圣的力量。努沙杜瓦海滩以其清澈的海水和细腻的白沙著称，是度假休闲的理想之地。巴杜尔火山则是勇敢者的挑战，可以徒步登上火山口，俯瞰壮丽的火山湖美景。'
        }
    },
    {
        id: 2,
        name: '东京',
        country: '日本',
        image: 'images/tokyo.jpg',
        description: '东京是日本的首都，融合了传统与现代，拥有世界一流的美食、购物和文化体验。',
        rating: 4.9,
        reviews: 3567,
        price: 6999,
        category: 'city',
        tags: ['都市', '美食', '文化'],
        lat: 35.6762,
        lng: 139.6503,
        visitors: 250000,
        bestTime: '3月-5月, 10月-11月',
        duration: '4-6天',
        adventure: {
            images: ['images/tokyo-adventure1.jpg', 'images/tokyo-adventure2.jpg', 'images/tokyo-adventure3.jpg', 'images/tokyo-adventure4.jpg'],
            highlights: ['东京塔', '浅草寺', '涩谷十字路口', '筑地市场'],
            detailedInfo: '东京是一座充满活力的国际大都市，既有现代的繁华，又不失传统的韵味。东京塔是城市的标志性建筑，登上塔顶可以俯瞰整个东京的壮丽景色。浅草寺是东京最古老的寺庙，保留着浓厚的江户时代风情。涩谷十字路口是世界上最繁忙的十字路口之一，在这里可以感受到东京的快节奏生活。筑地市场则是美食爱好者的天堂，新鲜的海鲜和各种特色小吃让人目不暇接。'
        }
    },
    {
        id: 3,
        name: '瑞士阿尔卑斯',
        country: '瑞士',
        image: 'images/swiss.jpg',
        description: '瑞士阿尔卑斯山脉是世界著名的滑雪胜地，夏季则是徒步和登山的天堂。',
        rating: 4.7,
        reviews: 1890,
        price: 8999,
        category: 'nature',
        tags: ['雪山', '滑雪', '徒步'],
        lat: 46.8182,
        lng: 8.2275,
        visitors: 80000,
        bestTime: '12月-3月(滑雪), 6月-9月(徒步)',
        duration: '7-10天',
        adventure: {
            images: ['images/swiss-adventure1.jpg', 'images/swiss-adventure2.jpg', 'images/swiss-adventure3.jpg', 'images/swiss-adventure4.jpg'],
            highlights: ['马特洪峰', '少女峰', '采尔马特', '因特拉肯'],
            detailedInfo: '瑞士阿尔卑斯山脉是大自然赐予人类的壮丽礼物。马特洪峰以其独特的金字塔形状闻名于世，是登山爱好者的梦想挑战。少女峰是瑞士最著名的山峰之一，乘坐登山火车可以到达海拔3454米的观景台，欣赏令人窒息的雪山美景。采尔马特是著名的滑雪胜地，拥有超过300公里的雪道。因特拉肯则坐落在两湖之间，是徒步和滑翔伞的理想起点。'
        }
    },
    {
        id: 4,
        name: '马尔代夫',
        country: '马尔代夫',
        image: 'images/maldives.jpg',
        description: '马尔代夫由1200多个珊瑚岛组成，拥有世界上最美丽的海滩和水上别墅。',
        rating: 4.9,
        reviews: 4123,
        price: 12999,
        category: 'beach',
        tags: ['海岛', '蜜月', '潜水'],
        lat: 3.2028,
        lng: 73.2207,
        visitors: 60000,
        bestTime: '11月-4月',
        duration: '5-7天',
        adventure: {
            images: ['images/maldives-adventure1.jpg', 'images/maldives-adventure2.jpg', 'images/maldives-adventure3.jpg', 'images/maldives-adventure4.jpg'],
            highlights: ['水上别墅', '珊瑚礁潜水', '马尔代夫首都马累', '日落巡航'],
            detailedInfo: '马尔代夫是印度洋上的一颗明珠，由1200多个珊瑚岛组成。水上别墅是马尔代夫的标志性住宿，从房间直接可以跳入清澈的海水中。珊瑚礁潜水是必体验的活动，五彩斑斓的热带鱼和壮观的珊瑚礁让人仿佛置身于海底世界。马累是世界上最小的首都之一，充满了浓郁的当地文化风情。日落巡航则是浪漫之旅的完美收尾，在金色的夕阳中享受宁静与美好。'
        }
    },
    {
        id: 5,
        name: '巴黎',
        country: '法国',
        image: 'images/paris.jpg',
        description: '巴黎是浪漫之都，拥有埃菲尔铁塔、卢浮宫等世界著名景点，是艺术和时尚的中心。',
        rating: 4.8,
        reviews: 5678,
        price: 9999,
        category: 'city',
        tags: ['浪漫', '艺术', '美食'],
        lat: 48.8566,
        lng: 2.3522,
        visitors: 300000,
        bestTime: '4月-6月, 9月-11月',
        duration: '5-7天',
        adventure: {
            images: ['images/paris-adventure1.jpg', 'images/paris-adventure2.jpg', 'images/paris-adventure3.jpg', 'images/paris-adventure4.jpg'],
            highlights: ['埃菲尔铁塔', '卢浮宫', '凡尔赛宫', '塞纳河'],
            detailedInfo: '巴黎是世界上最浪漫的城市之一，每一个角落都散发着艺术的气息。埃菲尔铁塔是巴黎的象征，登上塔顶可以俯瞰整个城市的美景。卢浮宫是世界上最大的艺术博物馆，收藏了无数珍贵的艺术品，包括蒙娜丽莎和维纳斯雕像。凡尔赛宫是法国国王的宫殿，华丽的建筑和精美的花园令人叹为观止。塞纳河则贯穿整个巴黎，乘坐游船可以欣赏到两岸的标志性建筑。'
        }
    },
    {
        id: 6,
        name: '张家界',
        country: '中国',
        image: 'images/zhangjiajie.jpg',
        description: '张家界以其独特的石英砂岩峰林地貌而闻名，是电影《阿凡达》的取景地。',
        rating: 4.7,
        reviews: 2890,
        price: 2999,
        category: 'nature',
        tags: ['山水', '徒步', '摄影'],
        lat: 29.1128,
        lng: 110.4716,
        visitors: 180000,
        bestTime: '4月-6月, 9月-11月',
        duration: '3-5天',
        adventure: {
            images: ['images/zhangjiajie-adventure1.jpg', 'images/zhangjiajie-adventure2.jpg', 'images/zhangjiajie-adventure3.jpg', 'images/zhangjiajie-adventure4.jpg'],
            highlights: ['天门山', '袁家界', '金鞭溪', '玻璃栈道'],
            detailedInfo: '张家界是中国第一个国家森林公园，以其独特的石英砂岩峰林地貌闻名于世，也是电影《阿凡达》中悬浮山的灵感来源。天门山以其壮观的天门洞而闻名，乘坐世界最长的高山客运索道可以直达山顶。袁家界是张家界的核心景区，拥有天下第一桥等著名景点。金鞭溪是一条美丽的溪流，沿途可以欣赏到奇峰怪石和茂密的森林。玻璃栈道则是勇敢者的挑战，在透明的玻璃上行走，脚下是万丈深渊。'
        }
    },
    {
        id: 7,
        name: '普吉岛',
        country: '泰国',
        image: 'images/phuket.jpg',
        description: '普吉岛是泰国最大的岛屿，拥有美丽的海滩、清澈的海水和丰富的夜生活。',
        rating: 4.6,
        reviews: 3456,
        price: 4999,
        category: 'beach',
        tags: ['海滩', '美食', '潜水'],
        lat: 7.8731,
        lng: 98.3923,
        visitors: 150000,
        bestTime: '11月-4月',
        duration: '5-7天',
        adventure: {
            images: ['images/phuket-adventure1.jpg', 'images/phuket-adventure2.jpg', 'images/phuket-adventure3.jpg', 'images/phuket-adventure4.jpg'],
            highlights: ['芭东海滩', '皮皮岛', '攀牙湾', '普吉老镇'],
            detailedInfo: '普吉岛是泰国最大的岛屿，也是东南亚最受欢迎的旅游目的地之一。芭东海滩是普吉岛最热闹的海滩，拥有丰富的夜生活和各种水上活动。皮皮岛是电影《海滩》的取景地，拥有梦幻般的海滩和清澈的海水。攀牙湾以其独特的喀斯特地貌闻名，乘坐长尾船游览可以欣赏到壮观的海景。普吉老镇则保留着浓厚的殖民时期建筑风格，是品尝当地美食和购物的好地方。'
        }
    },
    {
        id: 8,
        name: '罗马',
        country: '意大利',
        image: 'images/rome.jpg',
        description: '罗马是古罗马文明的发源地，拥有斗兽场、梵蒂冈等世界文化遗产。',
        rating: 4.8,
        reviews: 4567,
        price: 8999,
        category: 'city',
        tags: ['历史', '艺术', '美食'],
        lat: 41.9028,
        lng: 12.4964,
        visitors: 280000,
        bestTime: '4月-6月, 9月-11月',
        duration: '5-7天',
        adventure: {
            images: ['images/rome-adventure1.jpg', 'images/rome-adventure2.jpg', 'images/rome-adventure3.jpg', 'images/rome-adventure4.jpg'],
            highlights: ['罗马斗兽场', '梵蒂冈', '西班牙广场', '特莱维喷泉'],
            detailedInfo: '罗马是古罗马文明的发源地，每一步都是历史的足迹。罗马斗兽场是古罗马时期最大的圆形角斗场，是古罗马文明的象征。梵蒂冈是世界上最小的国家，拥有圣彼得大教堂和西斯廷教堂等著名景点。西班牙广场因电影《罗马假日》而闻名，是游客必打卡的地点。特莱维喷泉是罗马最美丽的喷泉，据说背对喷泉许愿，愿望就会实现。'
        }
    },
    {
        id: 9,
        name: '九寨沟',
        country: '中国',
        image: 'images/jiuzhaigou.jpg',
        description: '九寨沟以其多彩的湖泊和瀑布而闻名，是中国最美丽的自然保护区之一。',
        rating: 4.8,
        reviews: 2134,
        price: 3999,
        category: 'nature',
        tags: ['山水', '湖泊', '摄影'],
        lat: 33.1425,
        lng: 103.9653,
        visitors: 120000,
        bestTime: '9月-10月',
        duration: '3-4天',
        adventure: {
            images: ['images/jiuzhaigou-adventure1.jpg', 'images/jiuzhaigou-adventure2.jpg', 'images/jiuzhaigou-adventure3.jpg', 'images/jiuzhaigou-adventure4.jpg'],
            highlights: ['五彩池', '长海', '诺日朗瀑布', '树正群海'],
            detailedInfo: '九寨沟是中国第一个以保护自然风景为主要目的的自然保护区，以其多彩的湖泊和壮观的瀑布而闻名于世。五彩池是九寨沟最小但最美丽的海子，池水五彩斑斓，如同宝石一般。长海是九寨沟最大的湖泊，湖水湛蓝，周围雪山环绕。诺日朗瀑布是中国最宽的瀑布，水势汹涌，声震山谷。树正群海由19个大小不同的海子组成，形成了一幅美丽的画卷。'
        }
    },
    {
        id: 10,
        name: '悉尼',
        country: '澳大利亚',
        image: 'images/sydney.jpg',
        description: '悉尼是澳大利亚最大的城市，拥有悉尼歌剧院、邦迪海滩等著名景点。',
        rating: 4.7,
        reviews: 3789,
        price: 11999,
        category: 'city',
        tags: ['都市', '海滩', '自然'],
        lat: -33.8688,
        lng: 151.2093,
        visitors: 200000,
        bestTime: '9月-11月, 3月-5月',
        duration: '6-8天',
        adventure: {
            images: ['images/sydney-adventure1.jpg', 'images/sydney-adventure2.jpg', 'images/sydney-adventure3.jpg', 'images/sydney-adventure4.jpg'],
            highlights: ['悉尼歌剧院', '悉尼海港大桥', '邦迪海滩', '蓝山国家公园'],
            detailedInfo: '悉尼是澳大利亚最大的城市，也是南半球最繁华的都市之一。悉尼歌剧院是世界著名的建筑，以其独特的帆船造型闻名于世，是澳大利亚的象征。悉尼海港大桥是世界上最大的钢铁拱桥，可以攀登到桥顶欣赏壮观的海港景色。邦迪海滩是澳大利亚最著名的海滩，是冲浪爱好者的天堂。蓝山国家公园以其独特的蓝色雾气和壮观的峡谷景观而闻名，是悉尼周边最受欢迎的自然景点。'
        }
    },
    {
        id: 11,
        name: '三亚',
        country: '中国',
        image: 'images/sanya.jpg',
        description: '三亚是中国最南端的热带海滨城市，拥有美丽的海滩和温暖的气候。',
        rating: 4.5,
        reviews: 4234,
        price: 3599,
        category: 'beach',
        tags: ['海滩', '度假', '亲子'],
        lat: 18.2208,
        lng: 109.5089,
        visitors: 350000,
        bestTime: '10月-3月',
        duration: '4-6天',
        adventure: {
            images: ['images/sanya-adventure1.jpg', 'images/sanya-adventure2.jpg', 'images/sanya-adventure3.jpg', 'images/sanya-adventure4.jpg'],
            highlights: ['亚龙湾', '天涯海角', '蜈支洲岛', '热带雨林'],
            detailedInfo: '三亚是中国最南端的热带海滨城市，拥有温暖的气候和美丽的海滩。亚龙湾被誉为"天下第一湾"，拥有细腻的白沙和清澈的海水。天涯海角是三亚最著名的景点，象征着爱情的永恒。蜈支洲岛是一个美丽的热带岛屿，拥有丰富的水上活动和美丽的海滩。热带雨林则是探索自然的好去处，可以欣赏到各种珍稀植物和野生动物。'
        }
    },
    {
        id: 12,
        name: '挪威峡湾',
        country: '挪威',
        image: 'images/norway.jpg',
        description: '挪威峡湾以其壮观的自然景观而闻名，是世界自然遗产。',
        rating: 4.9,
        reviews: 1234,
        price: 13999,
        category: 'nature',
        tags: ['自然', '峡湾', '摄影'],
        lat: 60.4720,
        lng: 5.4022,
        visitors: 50000,
        bestTime: '5月-9月',
        duration: '7-10天',
        adventure: {
            images: ['images/norway-adventure1.jpg', 'images/norway-adventure2.jpg', 'images/norway-adventure3.jpg', 'images/norway-adventure4.jpg'],
            highlights: ['松恩峡湾', '盖朗厄尔峡湾', '卑尔根', '北极光'],
            detailedInfo: '挪威峡湾是世界上最壮观的自然景观之一，被联合国教科文组织列为世界自然遗产。松恩峡湾是挪威最长、最深的峡湾，两岸是陡峭的悬崖和壮观的瀑布。盖朗厄尔峡湾以其壮丽的景色和著名的"七姐妹"瀑布而闻名。卑尔根是挪威第二大城市，是探索峡湾的理想起点。在冬季，挪威北部还可以欣赏到壮观的北极光，这是大自然最神奇的表演。'
        }
    }
];

const categories = [
    { id: 'all', name: '全部', icon: 'fas fa-globe' },
    { id: 'beach', name: '海滩', icon: 'fas fa-umbrella-beach' },
    { id: 'city', name: '都市', icon: 'fas fa-building' },
    { id: 'nature', name: '自然', icon: 'fas fa-mountain' }
];

const hotDestinations = [
    {
        id: 9,
        name: '九寨沟',
        subtitle: '绚丽',
        tag: '九寨沟风景区',
        image: 'images/jiuzhaigou.jpg',
        description: '以彩池、瀑布、雪山、森林而闻名，每个季节都有独特的魅力，是大自然的调色板。',
        price: 3999
    },
    {
        id: 4,
        name: '马尔代夫',
        subtitle: '梦幻',
        tag: '海岛度假天堂',
        image: 'images/hot-maldives.jpg',
        description: '由1200多个珊瑚岛组成，拥有世界上最美丽的海滩和水上别墅。',
        price: 12999
    },
    {
        id: 3,
        name: '瑞士',
        subtitle: '纯净',
        tag: '阿尔卑斯雪山',
        image: 'images/hot-swiss.jpg',
        description: '世界著名的滑雪胜地，夏季则是徒步和登山的天堂，风景如画。',
        price: 8999
    },
    {
        id: 2,
        name: '东京',
        subtitle: '繁华',
        tag: '国际大都市',
        image: 'images/hot-tokyo.jpg',
        description: '融合传统与现代，拥有世界一流的美食、购物和文化体验。',
        price: 6999
    },
    {
        id: 1,
        name: '巴厘岛',
        subtitle: '浪漫',
        tag: '蜜月首选',
        image: 'images/hot-bali.jpg',
        description: '印度尼西亚最著名的旅游胜地，以美丽的海滩和丰富的文化遗产闻名。',
        price: 5999
    }
];

// 生成随机日期
function randomDate(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

// 用户名模板
const userNames = ['旅行者小王', '旅游达人', '摄影爱好者', '家庭出游', '背包客小李', '美食探险家', '风景摄影师', '旅行作家', '户外爱好者', '文化探索者', '自驾游玩家', '亲子游专家', '蜜月旅行者', '商务出差族', '周末短途游', '深度游爱好者', '自由行达人', '跟团游体验者', '海岛控', '雪山迷'];

// 评价内容模板
const reviewContents = [
    '非常棒的旅行体验！风景如画，服务周到，下次还会再来。',
    '整体不错，就是旺季人有点多，建议错峰出行。',
    '拍照圣地！每个角度都是大片，强烈推荐给喜欢摄影的朋友。',
    '适合带孩子来，有很多亲子活动，孩子玩得很开心。',
    '住宿条件很好，交通便利，周边美食很多。',
    '导游很专业，讲解详细，行程安排合理。',
    '超出预期！值得一去的好地方，推荐给大家。',
    '性价比很高，花小钱办大事，玩得很开心。',
    '自然风光很美，空气清新，放松身心的好地方。',
    '人文历史丰富，学到了很多知识，收获满满。',
    '美食太多了，每顿都吃得很满足，减肥计划又失败了。',
    '购物体验很好，买了很多当地特产，价格实惠。',
    '天气很好，拍照效果绝佳，发朋友圈获赞无数。',
    '和家人一起出游，留下了美好的回忆，期待下次再来。',
    '行程安排紧凑但不累，每个景点都很精彩。',
    '酒店位置很好，出门就是景点，非常方便。',
    '服务态度很好，有问必答，解决问题很及时。',
    '风景太美了，简直像画一样，舍不得离开。',
    '当地人民很热情，感受到了浓浓的人情味。',
    '交通很方便，公共交通发达，自由行毫无压力。'
];

// 用户系统
let currentUser = null;
let users = []; // 用户数据库

// 收藏列表（未登录时使用）
let favorites = [];

// DOM元素
const navLinks = document.getElementById('navLinks');
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchClose = document.getElementById('searchClose');
const searchResults = document.getElementById('searchResults');
const userBtn = document.getElementById('userBtn');
const loginOverlay = document.getElementById('loginOverlay');
const loginClose = document.getElementById('loginClose');
const loginForm = document.getElementById('loginForm');
const registerBtn = document.getElementById('registerBtn');
const registerOverlay = document.getElementById('registerOverlay');
const registerClose = document.getElementById('registerClose');
const registerForm = document.getElementById('registerForm');
const backToLogin = document.getElementById('backToLogin');
const profileOverlay = document.getElementById('profileOverlay');
const profileClose = document.getElementById('profileClose');
const profileContent = document.getElementById('profileContent');
const menuToggle = document.getElementById('menuToggle');
const categoryGrid = document.getElementById('categoryGrid');
const carouselTrack = document.getElementById('carouselTrack');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const carouselIndicators = document.getElementById('carouselIndicators');
const destinationsGrid = document.getElementById('destinationsGrid');
const gridView = document.getElementById('gridView');
const listView = document.getElementById('listView');
const pagination = document.getElementById('pagination');
const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');
const paginationInfo = document.getElementById('paginationInfo');
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

// 地图相关DOM元素
const mapOverlay = document.getElementById('mapOverlay');
const mapClose = document.getElementById('mapClose');
const mapContainer = document.getElementById('mapContainer');
const mapTitle = document.getElementById('mapTitle');

// 当前状态
let currentCategory = 'all';
let currentPage = 1;
const itemsPerPage = 8;
let totalPages = 1;
let currentCarouselIndex = 0;
let currentView = 'grid';

// 防抖函数
function debounce(func, delay = 300) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderCarousel();
    renderDestinations();
    initSearch();
});

// 初始化搜索功能
function initSearch() {
    // 打开搜索覆盖层
    searchBtn.addEventListener('click', () => {
        searchOverlay.style.display = 'block';
        searchInput.focus();
    });

    // 关闭搜索覆盖层
    searchClose.addEventListener('click', () => {
        searchOverlay.style.display = 'none';
        searchInput.value = '';
        searchResults.innerHTML = '';
    });

    // 点击搜索覆盖层外部关闭
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.style.display = 'none';
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });

    // 搜索输入事件（防抖）
    searchInput.addEventListener('input', debounce((e) => {
        const keyword = e.target.value.trim();
        if (keyword.length > 0) {
            performSearch(keyword);
        } else {
            searchResults.innerHTML = '';
        }
    }, 200));

    // ESC键关闭搜索
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.style.display === 'block') {
            searchOverlay.style.display = 'none';
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });
}

// 执行搜索
function performSearch(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    
    // 搜索目的地
    const results = destinations.filter(dest => 
        dest.name.toLowerCase().includes(lowerKeyword) ||
        dest.country.toLowerCase().includes(lowerKeyword) ||
        dest.description.toLowerCase().includes(lowerKeyword) ||
        dest.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
    );

    if (results.length > 0) {
        renderSearchResults(results);
    } else {
        searchResults.innerHTML = `
            <div class="search-no-results">
                <i class="fas fa-search"></i>
                <p>未找到包含 "${keyword}" 的目的地</p>
            </div>
        `;
    }
}

// 渲染搜索结果
function renderSearchResults(results) {
    searchResults.innerHTML = results.map(dest => `
        <div class="search-result-item" data-id="${dest.id}">
            <img src="${dest.image}" alt="${dest.name}">
            <div class="search-result-info">
                <h4>${dest.name}</h4>
                <p>${dest.country} - ¥${dest.price}/人起</p>
                <div class="search-tags">
                    ${dest.tags.slice(0, 3).map(tag => `<span class="search-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// 搜索结果点击事件（事件委托）
searchResults.addEventListener('click', (e) => {
    const item = e.target.closest('.search-result-item');
    if (item) {
        const id = parseInt(item.dataset.id);
        searchOverlay.style.display = 'none';
        searchInput.value = '';
        searchResults.innerHTML = '';
        
        // 跳转到目的地区域
        document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
        
        // 延迟后高亮显示对应的卡片
        setTimeout(() => {
            highlightDestinationCard(id);
        }, 500);
    }
});

// 高亮显示目的地卡片（支持分页跳转）
function highlightDestinationCard(id) {
    // 计算目标卡片所在的页码
    let filteredDestinations = destinations;
    if (currentCategory !== 'all') {
        filteredDestinations = destinations.filter(d => d.category === currentCategory);
    }
    
    const targetIndex = filteredDestinations.findIndex(d => d.id === id);
    
    if (targetIndex === -1) {
        // 目标不在当前分类中，检查其他分类
        const allIndex = destinations.findIndex(d => d.id === id);
        if (allIndex === -1) {
            // 找不到目标，直接打开详情
            openDestinationDetail(id);
            return;
        }
        // 切换到全部分类
        currentCategory = 'all';
        document.querySelectorAll('.category-item').forEach(el => el.classList.remove('active'));
        document.querySelector(`.category-item[data-category="all"]`).classList.add('active');
        filteredDestinations = destinations;
        targetIndex = allIndex;
    }
    
    // 计算目标页码
    const targetPage = Math.floor(targetIndex / itemsPerPage) + 1;
    
    if (targetPage !== currentPage) {
        // 需要跳转到目标页
        currentPage = targetPage;
        renderDestinations();
        
        // 等待页面渲染后高亮
        setTimeout(() => {
            highlightCard(id);
        }, 300);
    } else {
        // 目标页就是当前页
        highlightCard(id);
    }
}

// 高亮并滚动到指定卡片
function highlightCard(id) {
    const card = document.querySelector(`.destination-card[data-id="${id}"]`);
    
    if (card) {
        // 移除之前可能存在的高亮
        document.querySelectorAll('.destination-card').forEach(c => {
            c.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            c.style.transform = '';
        });
        
        // 添加高亮动画
        card.style.boxShadow = '0 0 0 3px #3498db, 0 15px 40px rgba(52, 152, 219, 0.4)';
        card.style.transform = 'translateY(-10px)';
        
        // 滚动到卡片位置
        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
        
        // 3秒后移除高亮
        setTimeout(() => {
            card.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            card.style.transform = '';
        }, 3000);
    }
}

// 渲染分类
function renderCategories() {
    categoryGrid.innerHTML = categories.map(cat => `
        <div class="category-item ${currentCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
            <i class="${cat.icon}"></i>
            <span>${cat.name}</span>
        </div>
    `).join('');
}

// 分类点击事件（使用事件委托，避免重复绑定）
categoryGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.category-item');
    if (item) {
        currentCategory = item.dataset.category;
        currentPage = 1;
        document.querySelectorAll('.category-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        renderDestinations();
        // 跳转到目的地区域
        document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
    }
});

// DOM元素 - 新增轮播相关
const carouselCards = document.getElementById('carouselCards');
const heroBgImage = document.getElementById('heroBgImage');
const regionTag = document.getElementById('regionTag');
const heroTitle = document.getElementById('heroTitle');
const heroDesc = document.getElementById('heroDesc');
const exploreBtn = document.querySelector('.explore-btn');

// 渲染轮播图
function renderCarousel() {
    // 渲染右侧漂浮卡片
    carouselCards.innerHTML = hotDestinations.map((item, index) => `
        <div class="carousel-card ${index === currentCarouselIndex ? 'active' : ''}" data-index="${index}">
            <img src="${item.image}" alt="${item.name}">
            <div class="carousel-card-overlay">
                <div class="carousel-card-title">${item.name}</div>
                <div class="carousel-card-subtitle">${item.subtitle}</div>
            </div>
            ${index === currentCarouselIndex ? `<div class="carousel-card-badge">推荐</div>` : ''}
        </div>
    `).join('');

    // 渲染指示器
    carouselIndicators.innerHTML = hotDestinations.map((_, index) => `
        <button class="carousel-indicator ${index === currentCarouselIndex ? 'active' : ''}" data-index="${index}"></button>
    `).join('');

    // 更新背景图和文字
    updateCarouselContent();
}

// 轮播图指示器点击事件（事件委托）
carouselIndicators.addEventListener('click', (e) => {
    const indicator = e.target.closest('.carousel-indicator');
    if (indicator) {
        currentCarouselIndex = parseInt(indicator.dataset.index);
        updateCarousel();
    }
});

// 更新轮播图内容
function updateCarouselContent() {
    const currentDest = hotDestinations[currentCarouselIndex];
    
    // 更新背景图
    heroBgImage.style.backgroundImage = `url(${currentDest.image})`;
    
    // 更新文字信息
    regionTag.textContent = currentDest.tag;
    heroTitle.textContent = `${currentDest.subtitle}${currentDest.name}`;
    heroDesc.textContent = currentDest.description;
    
    // 更新卡片状态
    document.querySelectorAll('.carousel-card').forEach((card, index) => {
        card.classList.toggle('active', index === currentCarouselIndex);
        // 更新推荐徽章
        const badge = card.querySelector('.carousel-card-badge');
        if (index === currentCarouselIndex && !badge) {
            const newBadge = document.createElement('div');
            newBadge.className = 'carousel-card-badge';
            newBadge.textContent = '推荐';
            card.appendChild(newBadge);
        } else if (index !== currentCarouselIndex && badge) {
            badge.remove();
        }
    });
    
    // 更新指示器
    document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentCarouselIndex);
    });
}

// 轮播图导航 - 移除旧的导航按钮事件
// 使用卡片点击代替

// 卡片点击事件（事件委托）
carouselCards.addEventListener('click', (e) => {
    const card = e.target.closest('.carousel-card');
    if (card) {
        currentCarouselIndex = parseInt(card.dataset.index);
        updateCarouselContent();
    }
});

// 自动轮播 - 大幅加快切换速度
setInterval(() => {
    currentCarouselIndex = currentCarouselIndex === hotDestinations.length - 1 ? 0 : currentCarouselIndex + 1;
    updateCarouselContent();
}, 2500);

// 探索景点按钮点击事件
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        const currentDest = hotDestinations[currentCarouselIndex];
        if (currentDest && currentDest.id) {
            // 关闭任何打开的弹窗
            mapOverlay.classList.remove('active');
            modalOverlay.classList.remove('active');
            profileOverlay.classList.remove('active');
            
            // 跳转到目的地区域
            document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
            
            // 延迟后高亮显示对应的卡片
            setTimeout(() => {
                highlightDestinationCard(currentDest.id);
            }, 600);
        }
    });
}

// 获取当前收藏列表
function getCurrentFavorites() {
    return currentUser ? currentUser.favorites : favorites;
}

// 渲染目的地卡片
function renderDestinations() {
    let filteredDestinations = destinations;
    
    if (currentCategory !== 'all') {
        filteredDestinations = destinations.filter(d => d.category === currentCategory);
    }
    
    // 计算总页数
    totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayDestinations = filteredDestinations.slice(startIndex, endIndex);
    
    // 获取当前用户的收藏列表
    const currentFavorites = getCurrentFavorites();
    
    destinationsGrid.innerHTML = displayDestinations.map(dest => `
        <div class="destination-card" data-id="${dest.id}" style="position: relative;">
            <img src="${dest.image}" alt="${dest.name}">
            <button class="favorite-btn ${currentFavorites.includes(dest.id) ? 'favorited' : ''}" 
                    onclick="toggleFavorite(event, ${dest.id})">
                <i class="fas fa-heart"></i>
            </button>
            <button class="map-btn" onclick="openMapModal(${dest.id}, event)">
                <i class="fas fa-map"></i>
            </button>
            <div class="destination-info">
                <h3>${dest.name}</h3>
                <p>${dest.description}</p>
                <div class="destination-meta">
                    <span class="location"><i class="fas fa-map-marker-alt"></i>${dest.country}</span>
                    <span class="rating"><i class="fas fa-star"></i>${dest.rating}</span>
                </div>
                <div class="destination-meta">
                    <span class="price">¥${dest.price}/人起</span>
                    <span class="review-count" style="color: #999; font-size: 0.85rem; cursor: pointer; text-decoration: underline;" onclick="openDestinationDetailWithReview(${dest.id}, event)">${dest.reviews}条评价</span>
                </div>
            </div>
        </div>
    `).join('');

    // 更新分页控件状态
    updatePagination();
}

// 更新分页控件
function updatePagination() {
    // 更新页码信息
    paginationInfo.textContent = `第 ${currentPage} 页 / 共 ${totalPages} 页`;
    
    // 更新按钮状态
    prevPage.disabled = currentPage <= 1;
    nextPage.disabled = currentPage >= totalPages;
    
    // 显示/隐藏分页控件
    pagination.style.display = totalPages <= 1 ? 'none' : 'flex';
}

// 上一页
prevPage.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderDestinations();
        // 滚动到目的地区域顶部
        document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
    }
});

// 下一页
nextPage.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderDestinations();
        // 滚动到目的地区域顶部
        document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
    }
});

// 目的地卡片点击事件（事件委托）
destinationsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.destination-card');
    if (card && !e.target.closest('.favorite-btn')) {
        const id = parseInt(card.dataset.id);
        openDestinationDetail(id);
    }
});



// 视图切换
gridView.addEventListener('click', () => {
    currentView = 'grid';
    gridView.classList.add('active');
    listView.classList.remove('active');
    destinationsGrid.classList.remove('list-view');
});

listView.addEventListener('click', () => {
    currentView = 'list';
    listView.classList.add('active');
    gridView.classList.remove('active');
    destinationsGrid.classList.add('list-view');
});

// 生成评价内容
function generateReviews(destinationId) {
    const adjectives = ['美丽', '壮观', '迷人', '令人难忘', '精彩', '舒适', '愉快', '完美', '惊喜', '惊艳'];
    const nouns = ['风景', '体验', '服务', '美食', '住宿', '景点', '行程', '导游', '天气', '环境'];
    const users = ['旅行者', '游客', '背包客', '摄影师', '美食家', '家庭出游', '情侣', '独自旅行'];
    const reviews = [];
    
    for (let i = 1; i <= 20; i++) {
        const userName = users[Math.floor(Math.random() * users.length)] + Math.floor(Math.random() * 1000);
        const rating = Math.floor(Math.random() * 2) + 4; // 4 or 5 stars
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        const content = `${adj}的${noun}，非常推荐！${rating === 5 ? '绝对值得再来一次！' : '整体体验不错，有些小细节可以改进。'}`;
        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 30));
        
        reviews.push({
            id: i,
            userName: userName,
            rating: rating,
            content: content,
            date: date.toISOString().split('T')[0]
        });
    }
    
    return reviews;
}

// 打开详情弹窗
function openDestinationDetail(id, scrollToReviews = false) {
    const destination = destinations.find(d => d.id === id);
    if (!destination) return;

    // 为该目的地生成20条评价
    const destinationReviews = generateReviews(id);

    // 获取当前用户的收藏状态
    const currentFavorites = getCurrentFavorites();
    const isFavorited = currentFavorites.includes(id);

    modalContent.innerHTML = `
        <div class="modal-header">
            <img src="${destination.image}" alt="${destination.name}">
            <div class="modal-header-overlay">
                <h2>${destination.name}</h2>
                <div class="location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${destination.country}</span>
                </div>
                <div class="tags">
                    ${destination.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
        <div class="modal-body">
            <div class="modal-stats">
                <div class="stat-item">
                    <div class="stat-value">${destination.rating}</div>
                    <div class="stat-label">评分</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${destinationReviews.length}</div>
                    <div class="stat-label">评价数</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${(destination.visitors / 1000).toFixed(0)}K</div>
                    <div class="stat-label">游客数</div>
                </div>
            </div>
            <div class="modal-section">
                <h3><i class="fas fa-info-circle"></i>目的地介绍</h3>
                <p>${destination.description}</p>
            </div>
            <div class="modal-section">
                <h3><i class="fas fa-calendar"></i>最佳旅行时间</h3>
                <p>${destination.bestTime}</p>
            </div>
            <div class="modal-section">
                <h3><i class="fas fa-clock"></i>建议游玩时长</h3>
                <p>${destination.duration}</p>
            </div>
            <div class="modal-section" id="reviewsSection">
                <h3><i class="fas fa-comments"></i>用户评价 (${destinationReviews.length})</h3>
                <div class="reviews-container">
                    ${destinationReviews.map(review => `
                        <div class="review-item">
                            <div class="review-header">
                                <div class="review-avatar">${review.userName.charAt(0)}</div>
                                <div class="review-info">
                                    <h4>${review.userName}</h4>
                                    <div class="review-rating">
                                        ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                                    </div>
                                </div>
                            </div>
                            <div class="review-content">${review.content}</div>
                            <div class="review-date">${review.date}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="modal-actions">
                <button class="btn-secondary" onclick="toggleFavoriteFromModal(${destination.id})">
                    <i class="fas fa-heart"></i>
                    ${isFavorited ? '已收藏' : '收藏'}
                </button>
                <button class="btn-primary" onclick="bookDestinationFromModal(${destination.id})">立即预订</button>
                <button class="btn-adventure" onclick="openAdventureModal(${destination.id})">
                    <i class="fas fa-compass"></i>
                    冒险
                </button>
            </div>
        </div>
    `;

    modalOverlay.classList.add('active');

    // 如果需要滚动到评论区域
    if (scrollToReviews) {
        setTimeout(() => {
            const reviewsSection = document.getElementById('reviewsSection');
            if (reviewsSection) {
                reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    }
}

// 打开详情弹窗并跳转到评论区域
function openDestinationDetailWithReview(id, e) {
    e.stopPropagation();
    openDestinationDetail(id, true);
}

// 关闭弹窗
modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// 收藏功能
function toggleFavorite(e, id) {
    e.stopPropagation();
    
    // 如果未登录，提示登录
    if (!currentUser) {
        loginOverlay.style.display = 'flex';
        return;
    }
    
    const userFavorites = currentUser.favorites;
    const index = userFavorites.indexOf(id);
    if (index === -1) {
        userFavorites.push(id);
        alert('已添加到收藏');
    } else {
        userFavorites.splice(index, 1);
        alert('已从收藏移除');
    }
    e.target.closest('.favorite-btn').classList.toggle('favorited');
    
    // 如果个人中心已打开，更新收藏列表
    if (profileOverlay.classList.contains('active')) {
        renderProfile();
    }
}

function toggleFavoriteFromModal(id) {
    // 如果未登录，提示登录
    if (!currentUser) {
        loginOverlay.style.display = 'flex';
        return;
    }
    
    const userFavorites = currentUser.favorites;
    const index = userFavorites.indexOf(id);
    if (index === -1) {
        userFavorites.push(id);
        alert('已添加到收藏');
    } else {
        userFavorites.splice(index, 1);
        alert('已从收藏移除');
    }
    // 重新渲染目的地列表以更新收藏状态
    renderDestinations();
    // 如果个人中心已打开，更新收藏列表
    if (profileOverlay.classList.contains('active')) {
        renderProfile();
    }
}

// 从详情弹窗预订
function bookDestinationFromModal(id) {
    bookDestination(id);
}

// 预订功能
function bookDestination(id) {
    // 如果未登录，提示登录
    if (!currentUser) {
        loginOverlay.style.display = 'flex';
        return;
    }
    
    const destination = destinations.find(d => d.id === id);
    if (!destination) return;
    
    const bookingId = 'BK' + String(Date.now()).slice(-5);
    const booking = {
        id: bookingId,
        destinationId: destination.id,
        destinationName: destination.name,
        destinationImage: destination.image,
        destinationCountry: destination.country,
        price: destination.price,
        date: getNextMonthDate(),
        status: 'pending',
        guests: 2
    };
    
    currentUser.bookings.push(booking);
    alert('预订成功！您的订单号是：' + bookingId);
    modalOverlay.classList.remove('active');
    
    // 如果个人中心已打开，更新预订列表
    if (profileOverlay.classList.contains('active')) {
        renderProfile();
    }
}

// 获取下个月的日期
function getNextMonthDate() {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date.toISOString().split('T')[0];
}

// 验证手机号
function validatePhone(phone) {
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(phone);
}

// 用户按钮点击事件
userBtn.addEventListener('click', () => {
    if (currentUser) {
        // 已登录，打开个人中心
        renderProfile();
        profileOverlay.classList.add('active');
    } else {
        // 未登录，打开登录弹窗
        loginOverlay.style.display = 'flex';
    }
});

// 登录弹窗关闭
loginClose.addEventListener('click', () => {
    loginOverlay.style.display = 'none';
});

loginOverlay.addEventListener('click', (e) => {
    if (e.target === loginOverlay) {
        loginOverlay.style.display = 'none';
    }
});

// 注册弹窗关闭
registerClose.addEventListener('click', () => {
    registerOverlay.style.display = 'none';
});

registerOverlay.addEventListener('click', (e) => {
    if (e.target === registerOverlay) {
        registerOverlay.style.display = 'none';
    }
});

// 个人中心弹窗关闭
profileClose.addEventListener('click', () => {
    profileOverlay.classList.remove('active');
});

profileOverlay.addEventListener('click', (e) => {
    if (e.target === profileOverlay) {
        profileOverlay.classList.remove('active');
    }
});

// 切换到注册
registerBtn.addEventListener('click', () => {
    loginOverlay.style.display = 'none';
    registerOverlay.style.display = 'flex';
});

// 返回登录
backToLogin.addEventListener('click', () => {
    registerOverlay.style.display = 'none';
    loginOverlay.style.display = 'flex';
});

// 登录表单提交
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const phone = document.getElementById('loginPhone').value;
    const password = document.getElementById('loginPassword').value;
    
    // 验证手机号
    if (!validatePhone(phone)) {
        document.getElementById('loginPhoneError').textContent = '请输入有效的11位手机号';
        return;
    }
    document.getElementById('loginPhoneError').textContent = '';
    
    const user = users.find(u => u.phone === phone && u.password === password);
    
    if (user) {
        currentUser = user;
        loginOverlay.style.display = 'none';
        loginForm.reset();
        alert('登录成功！');
        // 更新目的地卡片的收藏状态
        renderDestinations();
    } else {
        document.getElementById('loginPasswordError').textContent = '手机号或密码错误';
    }
});

// 注册表单提交
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nickname = document.getElementById('registerNickname').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    // 验证昵称
    if (!nickname || nickname.length < 2) {
        document.getElementById('registerNicknameError').textContent = '昵称至少需要2个字符';
        return;
    }
    document.getElementById('registerNicknameError').textContent = '';
    
    // 验证手机号
    if (!validatePhone(phone)) {
        document.getElementById('registerPhoneError').textContent = '请输入有效的11位手机号';
        return;
    }
    document.getElementById('registerPhoneError').textContent = '';
    
    // 验证密码
    if (!password || password.length < 6) {
        document.getElementById('registerPasswordError').textContent = '密码至少需要6个字符';
        return;
    }
    document.getElementById('registerPasswordError').textContent = '';
    
    // 验证确认密码
    if (password !== confirmPassword) {
        document.getElementById('registerConfirmPasswordError').textContent = '两次输入的密码不一致';
        return;
    }
    document.getElementById('registerConfirmPasswordError').textContent = '';
    
    // 验证手机号是否已注册
    const existingUser = users.find(u => u.phone === phone);
    if (existingUser) {
        document.getElementById('registerPhoneError').textContent = '该手机号已被注册';
        return;
    }
    
    // 创建新用户
    const newUser = {
        id: users.length + 1,
        nickname: nickname,
        phone: phone,
        password: password,
        favorites: [],
        bookings: []
    };
    
    users.push(newUser);
    currentUser = newUser;
    registerOverlay.style.display = 'none';
    registerForm.reset();
    alert('注册成功！');
});

// 渲染个人中心
function renderProfile() {
    if (!currentUser) return;
    
    const userFavorites = currentUser.favorites;
    const userBookings = currentUser.bookings;
    
    const favoriteDestinations = destinations.filter(d => userFavorites.includes(d.id));
    
    profileContent.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">${currentUser.nickname.charAt(0)}</div>
            <div class="profile-info">
                <h2 id="profileNickname">${currentUser.nickname} <button class="edit-nickname-btn" onclick="editNickname()"><i class="fas fa-edit"></i> 编辑</button></h2>
                <p><i class="fas fa-phone"></i> ${currentUser.phone}</p>
            </div>
        </div>
        
        <div class="profile-tabs">
            <button class="profile-tab active" data-tab="favorites">
                <i class="fas fa-heart"></i> 收藏 (${favoriteDestinations.length})
            </button>
            <button class="profile-tab" data-tab="bookings">
                <i class="fas fa-calendar"></i> 预订 (${userBookings.length})
            </button>
        </div>
        
        <!-- 收藏列表 -->
        <div class="profile-section active" id="favoritesSection">
            ${favoriteDestinations.length > 0 ? `
                <div class="favorites-list">
                    ${favoriteDestinations.map(dest => `
                        <div class="favorite-item">
                            <img src="${dest.image}" alt="${dest.name}">
                            <div class="favorite-info">
                                <div>
                                    <h3>${dest.name}</h3>
                                    <p>${dest.country} - ¥${dest.price}/人起</p>
                                </div>
                                <div class="favorite-actions">
                                    <button class="btn-remove" onclick="removeFavorite(${dest.id})">取消收藏</button>
                                    <button class="btn-view" onclick="viewDestinationFromProfile(${dest.id})">查看详情</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : `
                <div class="profile-empty">
                    <i class="fas fa-heart"></i>
                    <p>暂无收藏的目的地</p>
                    <p style="font-size: 0.9rem;">去发现您心仪的目的地吧！</p>
                </div>
            `}
        </div>
        
        <!-- 预订列表 -->
        <div class="profile-section" id="bookingsSection">
            ${userBookings.length > 0 ? `
                <div class="bookings-list">
                    ${userBookings.map(booking => `
                        <div class="booking-item">
                            <img src="${booking.destinationImage}" alt="${booking.destinationName}">
                            <div class="booking-info">
                                <div>
                                    <h3>${booking.destinationName}</h3>
                                    <p>${booking.destinationCountry}</p>
                                    <span class="booking-status status-${booking.status}">${getStatusText(booking.status)}</span>
                                </div>
                                <div>
                                    <p>订单号：${booking.id}</p>
                                    <p>出行日期：${booking.date}</p>
                                    <p>价格：¥${booking.price} x ${booking.guests}人</p>
                                    <div class="booking-actions">
                                        <button class="btn-view" onclick="viewDestinationFromProfile(${booking.destinationId})">查看目的地</button>
                                        ${booking.status === 'pending' ? `
                                            <button class="btn-cancel" onclick="cancelBooking('${booking.id}')">取消预订</button>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : `
                <div class="profile-empty">
                    <i class="fas fa-calendar"></i>
                    <p>暂无预订记录</p>
                    <p style="font-size: 0.9rem;">去预订您的下一次旅行吧！</p>
                </div>
            `}
        </div>
        
        <button class="logout-btn" onclick="logout()">退出登录</button>
    `;
    
    // 添加标签切换事件
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.profile-section').forEach(s => s.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tabId + 'Section').classList.add('active');
        });
    });
}

// 获取状态文本
function getStatusText(status) {
    const statusMap = {
        'pending': '待确认',
        'confirmed': '已确认',
        'completed': '已完成',
        'canceled': '已取消'
    };
    return statusMap[status] || status;
}

// 取消收藏
function removeFavorite(id) {
    const index = currentUser.favorites.indexOf(id);
    if (index !== -1) {
        currentUser.favorites.splice(index, 1);
        renderProfile();
        renderDestinations();
        alert('已取消收藏');
    }
}

// 从个人中心查看目的地
function viewDestinationFromProfile(id) {
    profileOverlay.classList.remove('active');
    openDestinationDetail(id);
}

// 取消预订
function cancelBooking(bookingId) {
    const booking = currentUser.bookings.find(b => b.id === bookingId);
    if (booking && booking.status === 'pending') {
        booking.status = 'canceled';
        renderProfile();
        alert('预订已取消');
    }
}

// 编辑昵称
function editNickname() {
    const nicknameElement = document.getElementById('profileNickname');
    const currentNickname = currentUser.nickname;
    
    nicknameElement.innerHTML = `
        <div class="nickname-edit">
            <input type="text" id="editNicknameInput" value="${currentNickname}" maxlength="20">
            <button class="save-btn" onclick="saveNickname()">保存</button>
            <button class="cancel-btn" onclick="cancelEditNickname()">取消</button>
        </div>
    `;
}

// 保存昵称
function saveNickname() {
    const newNickname = document.getElementById('editNicknameInput').value;
    
    if (!newNickname || newNickname.length < 2) {
        alert('昵称至少需要2个字符');
        return;
    }
    
    currentUser.nickname = newNickname;
    renderProfile();
    alert('昵称修改成功！');
}

// 取消编辑昵称
function cancelEditNickname() {
    renderProfile();
}

// 退出登录
function logout() {
    currentUser = null;
    profileOverlay.classList.remove('active');
    renderDestinations();
    alert('已退出登录');
}

// 导航菜单切换
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 滚动到目的地区域
function scrollToDestinations() {
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
}

// 冒险页面功能

// 获取冒险弹窗DOM元素
const adventureOverlay = document.getElementById('adventureOverlay');
const adventureClose = document.getElementById('adventureClose');
const adventureContent = document.getElementById('adventureContent');

// 冒险轮播相关变量
let adventureCarouselInterval = null;
let currentAdventureIndex = 0;

// 打开冒险页面弹窗
function openAdventureModal(id) {
    const destination = destinations.find(d => d.id === id);
    if (!destination || !destination.adventure) return;

    const adventure = destination.adventure;
    currentAdventureIndex = 0;

    adventureContent.innerHTML = `
        <div class="adventure-carousel-container">
            <div class="adventure-carousel-bg" id="adventureCarouselBg"></div>
            
            <!-- 漂浮透明文字 -->
            <div class="adventure-floating-text">
                <h2><i class="fas fa-compass"></i>${destination.name}冒险之旅</h2>
                <div class="location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${destination.country}</span>
                </div>
            </div>
            
            <!-- 右下角小方块缩略图 -->
            <div class="adventure-thumbnails" id="adventureThumbnails">
                ${adventure.images.map((img, index) => `
                    <div class="adventure-thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                        <img src="${img}" alt="${destination.name} - ${index + 1}">
                    </div>
                `).join('')}
            </div>
            
            <!-- 信息面板 -->
            <div class="adventure-info-panel">
                <h3><i class="fas fa-star"></i>深度探索</h3>
                <p>${adventure.detailedInfo.slice(0, 150)}...</p>
                <div class="adventure-highlight-tags">
                    ${adventure.highlights.slice(0, 3).map(highlight => `
                        <span class="adventure-highlight-tag"><i class="fas fa-map-pin"></i>${highlight}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    // 设置初始背景图
    updateAdventureCarousel(adventure.images, 0);

    // 关闭之前的弹窗
    modalOverlay.classList.remove('active');
    
    // 打开冒险弹窗
    adventureOverlay.classList.add('active');
    
    // 启动轮播（2秒间隔）
    startAdventureCarousel(adventure.images);
    
    // 添加缩略图点击事件
    document.getElementById('adventureThumbnails').addEventListener('click', (e) => {
        const thumbnail = e.target.closest('.adventure-thumbnail');
        if (thumbnail) {
            const index = parseInt(thumbnail.dataset.index);
            currentAdventureIndex = index;
            updateAdventureCarousel(adventure.images, index);
        }
    });
}

// 更新冒险轮播
function updateAdventureCarousel(images, index) {
    const carouselBg = document.getElementById('adventureCarouselBg');
    if (carouselBg) {
        carouselBg.style.backgroundImage = `url(${images[index]})`;
    }
    
    // 更新缩略图状态
    document.querySelectorAll('.adventure-thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// 启动冒险轮播
function startAdventureCarousel(images) {
    // 清除之前的定时器
    if (adventureCarouselInterval) {
        clearInterval(adventureCarouselInterval);
    }
    
    // 设置2秒轮播
    adventureCarouselInterval = setInterval(() => {
        currentAdventureIndex = (currentAdventureIndex + 1) % images.length;
        updateAdventureCarousel(images, currentAdventureIndex);
    }, 2000);
}

// 停止冒险轮播
function stopAdventureCarousel() {
    if (adventureCarouselInterval) {
        clearInterval(adventureCarouselInterval);
        adventureCarouselInterval = null;
    }
}

// 关闭冒险弹窗
adventureClose.addEventListener('click', () => {
    stopAdventureCarousel();
    adventureOverlay.classList.remove('active');
});

adventureOverlay.addEventListener('click', (e) => {
    if (e.target === adventureOverlay) {
        stopAdventureCarousel();
        adventureOverlay.classList.remove('active');
    }
});

// 图片预览相关变量
let currentPreviewIndex = 0;
let currentPreviewImages = [];

// 打开图片预览
function openImagePreview(images, index) {
    currentPreviewImages = images;
    currentPreviewIndex = index;
    
    // 创建图片预览弹窗
    let previewOverlay = document.getElementById('imagePreviewOverlay');
    if (!previewOverlay) {
        previewOverlay = document.createElement('div');
        previewOverlay.id = 'imagePreviewOverlay';
        previewOverlay.className = 'image-preview-overlay';
        previewOverlay.innerHTML = `
            <div class="image-preview-content">
                <button class="image-preview-close" onclick="closeImagePreview()"><i class="fas fa-times"></i></button>
                <button class="image-preview-nav prev" onclick="prevImage()"><i class="fas fa-chevron-left"></i></button>
                <img id="previewImage" src="" alt="">
                <button class="image-preview-nav next" onclick="nextImage()"><i class="fas fa-chevron-right"></i></button>
            </div>
        `;
        document.body.appendChild(previewOverlay);
    }
    
    document.getElementById('previewImage').src = images[index];
    previewOverlay.classList.add('active');
}

// 关闭图片预览
function closeImagePreview() {
    const previewOverlay = document.getElementById('imagePreviewOverlay');
    if (previewOverlay) {
        previewOverlay.classList.remove('active');
    }
}

// 上一张图片
function prevImage() {
    if (currentPreviewIndex > 0) {
        currentPreviewIndex--;
        document.getElementById('previewImage').src = currentPreviewImages[currentPreviewIndex];
    }
}

// 下一张图片
function nextImage() {
    if (currentPreviewIndex < currentPreviewImages.length - 1) {
        currentPreviewIndex++;
        document.getElementById('previewImage').src = currentPreviewImages[currentPreviewIndex];
    }
}

// 地图相关功能
let map = null;
let markers = [];

// 打开地图弹窗
function openMapModal(destinationId, e) {
    e.stopPropagation();
    
    const destination = destinations.find(d => d.id === destinationId);
    if (!destination) return;
    
    mapTitle.textContent = `${destination.name} - 周边景点`;
    mapOverlay.classList.add('active');
    
    // 延迟初始化地图，确保弹窗已显示
    setTimeout(() => {
        initMap(destinationId);
    }, 100);
}

// 初始化百度地图
function initMap(selectedId) {
    // 清除之前的地图实例
    if (map) {
        map = null;
    }
    
    // 清空标记数组
    markers = [];
    
    // 创建地图实例
    map = new BMap.Map('mapContainer');
    
    // 获取选中的目的地
    const selectedDest = destinations.find(d => d.id === selectedId);
    
    if (selectedDest) {
        // 设置地图中心点为选中的目的地
        const centerPoint = new BMap.Point(selectedDest.lng, selectedDest.lat);
        map.centerAndZoom(centerPoint, 4);
        
        // 添加缩放控件
        map.addControl(new BMap.NavigationControl());
        
        // 添加比例尺控件
        map.addControl(new BMap.ScaleControl());
        
        // 为所有目的地添加标记
        destinations.forEach(dest => {
            const point = new BMap.Point(dest.lng, dest.lat);
            const isSelected = dest.id === selectedId;
            
            // 创建不同颜色的标记
            const marker = new BMap.Marker(point, {
                icon: createMarkerIcon(isSelected)
            });
            
            // 添加标记到地图
            map.addOverlay(marker);
            markers.push(marker);
            
            // 创建信息窗口
            const infoWindow = new BMap.InfoWindow(`
                <div style="padding: 15px; min-width: 200px;">
                    <h4 style="margin-bottom: 10px; color: #2c3e50;">${dest.name}</h4>
                    <p style="color: #666; font-size: 0.9rem; margin-bottom: 5px;">${dest.country}</p>
                    <p style="color: #e74c3c; font-weight: 600;">¥${dest.price}/人起</p>
                    <p style="color: #3498db; margin-top: 10px;">评分: ${dest.rating}分</p>
                </div>
            `);
            
            // 点击标记显示信息窗口
            marker.addEventListener('click', () => {
                map.openInfoWindow(infoWindow, point);
            });
            
            // 如果是选中的目的地，自动打开信息窗口
            if (isSelected) {
                setTimeout(() => {
                    map.openInfoWindow(infoWindow, point);
                }, 500);
            }
        });
        
        // 调整视野范围，显示所有标记
        const view = map.getViewport(markers.map(m => m.getPosition()));
        const mapZoom = view.zoom - 1;
        const centerPointNew = view.center;
        map.centerAndZoom(centerPointNew, mapZoom);
    }
}

// 创建自定义标记图标
function createMarkerIcon(isSelected) {
    // 创建不同颜色的标记
    const color = isSelected ? '#e74c3c' : '#3498db';
    const size = isSelected ? new BMap.Size(40, 50) : new BMap.Size(32, 42);
    
    // 使用canvas生成自定义图标
    const canvas = document.createElement('canvas');
    canvas.width = size.width;
    canvas.height = size.height;
    const ctx = canvas.getContext('2d');
    
    // 如果是选中的目的地，绘制目标样式（靶心效果）
    if (isSelected) {
        // 绘制外圈圆环（红色）
        ctx.beginPath();
        ctx.arc(size.width / 2, size.height / 2 - 10, size.width / 2 - 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(231, 76, 60, 0.2)';
        ctx.fill();
        ctx.strokeStyle = '#e74c3c';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 绘制中圈圆环
        ctx.beginPath();
        ctx.arc(size.width / 2, size.height / 2 - 10, size.width / 2 - 10, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(231, 76, 60, 0.3)';
        ctx.fill();
        ctx.strokeStyle = '#e74c3c';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 绘制内圈实心圆
        ctx.beginPath();
        ctx.arc(size.width / 2, size.height / 2 - 10, size.width / 2 - 16, 0, Math.PI * 2);
        ctx.fillStyle = '#e74c3c';
        ctx.fill();
        
        // 绘制白色十字准星
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        
        // 水平线
        ctx.beginPath();
        ctx.moveTo(size.width / 2 - 12, size.height / 2 - 10);
        ctx.lineTo(size.width / 2 + 12, size.height / 2 - 10);
        ctx.stroke();
        
        // 垂直线
        ctx.beginPath();
        ctx.moveTo(size.width / 2, size.height / 2 - 22);
        ctx.lineTo(size.width / 2, size.height / 2 + 2);
        ctx.stroke();
        
        // 绘制底部三角形
        ctx.beginPath();
        ctx.moveTo(size.width / 2 - 8, size.height - 8);
        ctx.lineTo(size.width / 2 + 8, size.height - 8);
        ctx.lineTo(size.width / 2, size.height);
        ctx.closePath();
        ctx.fillStyle = '#e74c3c';
        ctx.fill();
    } else {
        // 普通目的地标记（蓝色）
        // 绘制圆形背景
        ctx.beginPath();
        ctx.arc(size.width / 2, size.height / 2 - 6, size.width / 2 - 4, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // 绘制内部白色圆形
        ctx.beginPath();
        ctx.arc(size.width / 2, size.height / 2 - 6, size.width / 2 - 10, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
        
        // 绘制中心点
        ctx.beginPath();
        ctx.arc(size.width / 2, size.height / 2 - 6, 5, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        
        // 绘制底部三角形
        ctx.beginPath();
        ctx.moveTo(size.width / 2 - 8, size.height - 8);
        ctx.lineTo(size.width / 2 + 8, size.height - 8);
        ctx.lineTo(size.width / 2, size.height);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }
    
    // 创建图标（使用BMap版本，与地图实例一致）
    const icon = new BMap.Icon(canvas.toDataURL(), size);
    icon.setImageSize(size);
    
    return icon;
}

// 关闭地图弹窗
mapClose.addEventListener('click', () => {
    mapOverlay.classList.remove('active');
});

mapOverlay.addEventListener('click', (e) => {
    if (e.target === mapOverlay) {
        mapOverlay.classList.remove('active');
    }
});
const views = [...document.querySelectorAll('[data-view]')];
const pageCount = document.querySelector('.page-count');
const detailMount = document.querySelector('#detail-mount');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const topbar = document.querySelector('.topbar');
const topBack = document.querySelector('.top-back');
const viewNumbers = {cover: '01 / 06', profile: '02 / 06', contents: '03 / 06', detail: '04 / 06', end: '06 / 06'};
const backMap = {profile: 'cover', contents: 'profile', detail: 'contents', end: 'contents'};
const projectOrder = ['xhs', 'visual', 'aigc', 'food', 'hollow', 'mortise', 'water'];

const detailData = {
  xhs: {
    kicker: 'CONTENT OPERATION · SOCIAL MEDIA',
    title: '24k纯猪猪侠',
    intro: '把个人兴趣变成持续更新的内容资产，独立完成选题、素材组织、封面与标题设计、发布和评论互动，逐步形成稳定的内容风格与账号识别度。',
    visual: '<img src="assets/operations/xhs/xhs-account-metrics.svg" alt="小红书账号阶段性运营数据">',
    results: [['1000+', '粉丝'], ['6.3万+', '获赞与收藏'], ['61', '篇内容沉淀']],
    blocks: [['我负责', '<strong>选题、封面、标题、图文组织与互动</strong>，并用 AI 工具完成视频素材的生成与剪辑。'], ['运营方式', '<strong>持续更新、观察反馈、调整表达</strong>，逐步沉淀可复用的内容模板。'], ['项目价值', '建立稳定的内容风格和账号识别度，把兴趣转化为可持续运营的内容资产。'], ['补充说明', '账号目前没有接入广告合作，数据用于体现<strong>内容生产与账号运营能力</strong>。']],
    images: ['assets/operations/xhs/xhs-account-metrics.svg']
  },
  visual: {
    kicker: 'VISUAL CONTENT · LAYOUT',
    title: '学院文创视觉与公众号互动排版',
    intro: '围绕学院文化、活动和项目信息，完成从主题梳理、视觉设计到图文发布的内容制作。使用可画处理海报、PPT和宣传物料，使用秀米完成公众号排版与互动组件配置，让内容更容易阅读、理解和传播。',
    visual: '<img src="assets/operations/visual/visual-content-workflow.svg" alt="主题视觉、互动排版与发布复盘工作流">',
    results: [['Canva', '海报 / PPT'], ['秀米', '互动排版'], ['PS', '视觉细化']],
    blocks: [['主题与视觉', '参与<strong>主题元素、应用场景和展示方案</strong>梳理，确定版式、配色与视觉重点。'], ['图文与PPT', '使用<strong>可画、Photoshop</strong>完成海报、PPT、宣传物料及项目展示页面。'], ['互动排版', '使用<strong>秀米</strong>制作图片轮播、滑动图文、信息卡片和引导按钮，增强公众号内容的阅读节奏。'], ['内容价值', '根据读者阅读顺序调整<strong>标题、封面、段落和视觉重点</strong>，让信息更容易被理解和记住。']],
    images: ['assets/operations/visual/visual-content-workflow.svg', 'assets/operations/brand/banner.jpg']
  },
  aigc: {
    kicker: 'AIGC · COMPETITION PROJECT',
    title: '穿越时空的色彩｜AIGC古画修复项目',
    intro: '围绕古画修复场景整理项目叙事，参与主题梳理、修复前后素材组织、竞赛文案与展示材料制作，把技术流程转译成观众能快速理解的视觉故事。',
    visual: '<div class="detail-compare" data-detail-compare><img src="assets/operations/aigc/mural-01-damaged.png" alt="修复前"><div class="detail-compare-after"><img src="assets/operations/aigc/mural-01-restored.png" alt="修复后"></div><input type="range" min="1" max="100" value="52" aria-label="调整修复前后对比"><span class="compare-tag before">修复前</span><span class="compare-tag after">修复后</span></div>',
    results: [['市级三等奖', 'CMIT AIGC赛道'], ['99张', '过程素材整理'], ['前后对比', '视觉化表达']],
    blocks: [['主题与叙事', '梳理古画修复的应用场景，明确<strong>“受损—生成—修复”</strong>的内容结构。'], ['素材整理', '从<strong>99张过程素材</strong>中整理工作流、参数、生成结果与前后对比。'], ['展示包装', '参与<strong>竞赛文案、项目说明、PPT和展示材料</strong>，突出修复效果、创作流程与文化价值。'], ['项目结果', '项目获得<strong>CMIT竞赛 AIGC 赛道市级三等奖</strong>。']],
    images: ['assets/operations/aigc/mural-01-damaged.png', 'assets/operations/aigc/mural-01-restored.png', 'assets/operations/aigc/workflow.jpg', 'assets/operations/aigc/parameter-panel.jpg']
  },
  food: {
    kicker: 'GAME OPERATION · UNITY',
    title: '美食创业家｜Unity经营模拟游戏',
    intro: '一款以餐厅经营为核心的 Unity 模拟游戏。玩家需要完成顾客点餐、菜品制作、出餐收款、环境清洁和营业时间管理，在时间压力与订单反馈中完成一轮经营。',
    visual: '<img src="assets/operations/video-frames/food/food-scene-32s.jpg" alt="美食创业家游戏实机场景">',
    results: [['Gameplay', '实机演示视频'], ['核心循环', '点餐—制作—交付'], ['Unity', '个人项目实现']],
    blocks: [['核心循环', '<strong>顾客点餐—菜品制作—出餐收款—环境清洁—营业时间管理</strong>，形成完整经营回路。'], ['反馈设计', '通过<strong>订单状态、按钮提示、金币变化和音效</strong>强化完成感与下一步目标。'], ['内容整理', '使用餐厅场景、金币反馈、汉堡/饮料/薯条图标呈现玩法信息，让核心流程一眼可读。'], ['运营视角', '关注<strong>玩家目标是否清楚、操作是否顺畅、反馈是否及时</strong>，从体验角度检查玩法表达。']],
    images: ['assets/operations/video-frames/food/food-scene-12s.jpg', 'assets/operations/video-frames/food/food-scene-32s.jpg', 'assets/operations/food/restaurant-scene.png', 'assets/operations/food/coin-feedback.png', 'assets/operations/food/burger-icon.png', 'assets/operations/food/drink-icon.png', 'assets/operations/food/fries-icon.png']
  },
  hollow: {
    kicker: 'GAMEPLAY · 2.5D PLATFORMER',
    title: 'Hollow Knight 2.5D 横版游戏 Demo',
    intro: '一款 2.5D 横版探索与动作游戏 Demo。玩家通过蹬墙跳、二段跳和平台跳跃探索场景，并在与敌人交互的过程中获得击打、受击、血量变化和击杀反馈。',
    visual: '<img src="assets/operations/video-frames/hollow/hollow-scene-28s.jpg" alt="2.5D横版游戏实机场景">',
    results: [['2.5D', '横版探索'], ['3组', '玩法重点图'], ['Unity', '场景与交互']],
    blocks: [['移动机制', '<strong>蹬墙跳、二段跳与跳跃平台</strong>共同构成连续移动路径，鼓励玩家观察并尝试。'], ['战斗反馈', '怪物击打、受击表现、血量变化和击杀特效形成<strong>即时反馈</strong>。'], ['关卡体验', '利用平台高差、障碍和敌人分布形成探索节奏，让移动与战斗互相穿插。'], ['内容表达', '<strong>截图</strong>用于快速浏览关键节点，<strong>视频</strong>用于完整体验玩法。']],
    images: ['assets/operations/video-frames/hollow/hollow-scene-10s.jpg', 'assets/operations/video-frames/hollow/hollow-scene-28s.jpg', 'assets/operations/hollow/combat.png', 'assets/operations/hollow/wall-jump.png', 'assets/operations/hollow/double-jump.png', 'assets/operations/hollow/jump-platform-01.png', 'assets/operations/hollow/jump-platform-02.png', 'assets/operations/hollow/health-kill-feedback.png']
  },
  mortise: {
    kicker: 'VR INTERACTION · META QUEST',
    title: '巧木天工｜基于虚拟现实与徒手交互的榫卯结构沉浸式拼装系统',
    intro: '基于 Meta Quest Pro 的榫卯结构拼装游戏。围绕“认识结构—选择部件—徒手拼插—完成反馈”组织体验，加入手部追踪和微手势交互，让传统结构知识转化为可观察、可操作、可验证的沉浸式体验。',
    visual: '<img src="assets/operations/video-frames/mortise/mortise-scene-35s.jpg" alt="巧木天工 VR 榫卯拼装实机场景">',
    results: [['72 FPS', '标准负载运行'], ['14.2 ms', '微手势响应'], ['67.6%', '操作负担下降']],
    blocks: [['交互亮点', '<strong>双手抓取、手部追踪与微手势导航</strong>，让悬空操作更轻、更自然。'], ['体验流程', '把榫卯部件、拼插吸附、步骤状态和 UI 反馈组织成<strong>连续引导</strong>。'], ['测试结果', '微手势推理延迟约<strong>14.2 ms</strong>，操作效率提升<strong>21.6%</strong>，操作负担下降<strong>67.6%</strong>。'], ['运行表现', '<strong>Meta Quest Pro</strong> 标准负载下约<strong>72 FPS</strong>，持续进行运行测试和体验迭代。']],
    images: ['assets/operations/video-frames/mortise/mortise-scene-08s.jpg', 'assets/operations/video-frames/mortise/mortise-scene-35s.jpg', 'assets/operations/mortise/mortise-ui.jpg', 'assets/operations/mortise/mortise-structure.jpg', 'assets/operations/mortise/mortise-hand-tracking.jpg', 'assets/operations/mortise/mortise-logo.png']
  },
  water: {
    kicker: 'VR INTERACTION · EDUCATIONAL GAME',
    title: '水之力｜中国古代水利工具徒手交互系统',
    intro: '将中国古代水利工具的结构与工作原理拆解为可操作的 VR 流程，让用户通过观察、操作和反馈理解工具如何工作，并在互动中建立对传统工程智慧的直观认识。',
    visual: '<img src="assets/operations/video-frames/water/water-scene-24s.jpg" alt="水之力 VR 水利工具交互场景">',
    results: [['VR', '沉浸式体验'], ['结构拆解', '知识可视化'], ['交互流程', '观察—操作—反馈']],
    blocks: [['项目重点', '围绕<strong>古代水利工具的结构、用途和工作原理</strong>组织内容。'], ['体验组织', '将知识点拆成<strong>观察结构—徒手操作—结果反馈</strong>三个步骤。'], ['交互表达', '通过场景、工具对象和触发反馈建立连续的体验流程，让抽象原理变得可操作。'], ['内容价值', '让专业知识拥有<strong>更低的理解门槛</strong>，适合展示、教学和科普表达。']],
    images: ['assets/operations/video-frames/water/water-scene-06s.jpg', 'assets/operations/video-frames/water/water-scene-24s.jpg', 'assets/operations/water/water-cover.png', 'assets/operations/water/water-intro.png', 'assets/operations/water/water-button.png', 'assets/operations/water/water-ui-01.png', 'assets/operations/water/water-ui-02.png', 'assets/operations/water/water-ui-03.png']
  }
};

function renderDetail(key) {
  const item = detailData[key];
  const results = item.results.map(([value, label]) => `<div class="detail-result"><b>${value}</b><span>${label}</span></div>`).join('');
  const blocks = item.blocks.map(([title, text]) => `<div class="detail-block"><b>${title}</b><p>${text}</p></div>`).join('');
  const images = (item.images || []).map((src, i) => `<img src="${src}" alt="${item.title}素材${i + 1}" loading="lazy">`).join('');
  detailMount.innerHTML = `<div class="detail-layout"><div class="detail-visual">${item.visual}</div><div class="detail-copy"><p class="detail-kicker">${item.kicker}</p><h2>${item.title}</h2><p>${item.intro}</p><div class="detail-results">${results}</div><div class="detail-blocks">${blocks}</div></div></div>${images ? `<div class="detail-gallery">${images}</div>` : ''}`;
  const nextButton = document.querySelector('[data-detail-next]');
  if (nextButton) {
    const nextKey = projectOrder[(projectOrder.indexOf(key) + 1) % projectOrder.length];
    nextButton.dataset.project = nextKey;
    nextButton.innerHTML = `下一个项目&nbsp; →`;
    nextButton.setAttribute('aria-label', `查看下一个项目：${detailData[nextKey].title}`);
  }
  bindCompare();
}

function showView(name, projectKey) {
  views.forEach((view) => { view.hidden = view.dataset.view !== name; });
  pageCount.textContent = viewNumbers[name] || '04 / 06';
  topbar.classList.toggle('has-back', name !== 'cover');
  topBack.dataset.page = backMap[name] || 'cover';
  window.scrollTo({top: 0, behavior: 'smooth'});
  if (name === 'detail' && projectKey) renderDetail(projectKey);
}

function goTo(name, projectKey = '') {
  const hash = projectKey ? `#project-${projectKey}` : `#${name}`;
  history.pushState({name, projectKey}, '', hash);
  showView(name, projectKey);
}

document.addEventListener('click', (event) => {
  const topBackButton = event.target.closest('[data-back]');
  if (topBackButton) goTo(topBack.dataset.page || 'cover');
  const pageButton = event.target.closest('[data-page]');
  if (pageButton) goTo(pageButton.dataset.page);
  const projectButton = event.target.closest('[data-project]');
  if (projectButton) goTo('detail', projectButton.dataset.project);
  const detailNext = event.target.closest('[data-detail-next]');
  if (detailNext?.dataset.project) goTo('detail', detailNext.dataset.project);
  const image = event.target.closest('.detail-gallery img');
  if (image) { lightboxImage.src = image.src; lightboxImage.alt = image.alt; lightbox.setAttribute('aria-hidden', 'false'); }
});

window.addEventListener('popstate', () => routeFromHash());
function routeFromHash() {
  const hash = window.location.hash.slice(1);
  if (hash.startsWith('project-')) { showView('detail', hash.replace('project-', '')); return; }
  showView(['profile', 'contents', 'end'].includes(hash) ? hash : 'cover');
}
routeFromHash();

function bindCompare() {
  const compare = document.querySelector('[data-detail-compare]');
  if (!compare) return;
  const input = compare.querySelector('input');
  const after = compare.querySelector('.detail-compare-after');
  const sync = () => { const value = Number(input.value); after.style.width = `${value}%`; after.querySelector('img').style.width = `${100 / (value / 100)}%`; };
  input.addEventListener('input', sync); sync();
}

const closeLightbox = () => { lightbox.setAttribute('aria-hidden', 'true'); lightboxImage.src = ''; };
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });

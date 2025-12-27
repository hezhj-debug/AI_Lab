/* 统一导航栏注入 */
fetch('img/sges-logo.png')
  .then(() => {}) // 预加载 logo，避免闪烁
  .catch(() => {});

//统一导航注入 
fetch('nav.html')
  .then(res => res.text())
  .then(data => document.body.insertAdjacentHTML('afterbegin', data))
  .catch(() => console.warn('nav.html 加载失败'));

/* ③ 启用率色主题 + 白卡片 */
document.documentElement.classList.add('theme-green');  

/* 访客地图（仅需要页面调用） */
window.initClustrmaps = function(key, path, id){
  var _clustrmaps = {key:key, path:path, id:id};
  if(document.getElementById(id)) document.body.appendChild(Object.assign(document.createElement('script'),{src:'https://cdn.clustrmaps.com/map_v2.js'}));
};

/* 语言切换占位 */
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('langBtn');
  if(btn) btn.addEventListener('click', () => alert(' bilingual switch demo - integrate i18n later.'));
});



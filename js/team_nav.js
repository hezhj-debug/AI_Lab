/* ========== 团队右侧导航平滑滚动 + 高亮 ========== */
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.side-team-nav .nav-link');
  if (!navLinks.length) return;

  /* 点击滚动 */
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.dataset.target);
      if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  /* 滚动高亮当前栏目 */
  const sections = ['faculty','phd','master','bachelor','graduate','visitor'];
  window.addEventListener('scroll', () => {
    let curr = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) curr = id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.dataset.target === '#' + curr);
    });
  });
});
/* tiny-webapp-kit · base.js
   每个小工具站都要的那点公共 JS：日夜切换 + 复制（带 http 兜底）。
   页面里只要有一个 id="theme" 的按钮，主题就自动生效。 */
(function(){
  var root = document.documentElement;

  // ---------- 日夜切换（三态：auto / dark / light） ----------
  var key = document.body.getAttribute('data-theme-key') || 'ui-theme';
  var saved = localStorage.getItem(key);
  if (saved) root.setAttribute('data-theme', saved);

  var btn = document.getElementById('theme');
  if (btn){
    btn.addEventListener('click', function(){
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem(key, next);
    });
  }

  // ---------- 复制 ----------
  // copyText('要复制的文字', 按钮元素, '原按钮文字')
  window.copyText = function(text, btn, orig){
    if (!text) return;
    var done = function(){
      if (!btn) return;
      btn.textContent = '已复制';
      setTimeout(function(){ btn.textContent = orig; }, 1200);
    };
    if (navigator.clipboard && window.isSecureContext){
      navigator.clipboard.writeText(text).then(done, fallback);
    } else { fallback(); }
    function fallback(){
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); } catch(e){ alert('复制失败，手动选中'); }
      document.body.removeChild(ta);
    }
  };

  // ---------- 小工具 ----------
  window.pad2 = function(n){ return n < 10 ? '0' + n : '' + n; };
  window.bytes = function(n){
    if (n < 1024) return n + ' B';
    if (n < 1048576) return (n / 1024).toFixed(1) + ' KB';
    return (n / 1048576).toFixed(1) + ' MB';
  };
})();

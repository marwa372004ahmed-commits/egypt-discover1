/////ت

setInterval(() => {
  const before = new Date().getTime();
  debugger;
  const after = new Date().getTime();

  if (after - before > 100) {
    document.body.innerHTML = "";
    window.location.href = "about:blank";
  }
}, 1000);

document.addEventListener('contextmenu', e => e.preventDefault());

document.onkeydown = function(e) {
  if (
    e.keyCode === 123 ||
    (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) ||
    (e.ctrlKey && e.key === 'U')
  ) {
    return false;
  }
};

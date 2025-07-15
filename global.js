const link = document.getElementById('qqun');
    let toggled = false;

    link.addEventListener('click', function (e) {
      e.preventDefault();
      toggled = !toggled;
      navigator.clipboard.writeText("1135829543");
      link.textContent = toggled ? '已复制' : 'QQ';
    });

fetch('./_header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('loadheader').innerHTML = data;
    });
fetch('./_footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('loadfooter').innerHTML = data;
    });
function qqun() {
	const link = document.getElementById('qqun');
      navigator.clipboard.writeText('1135829543');
      link.textContent = '已复制';
	}
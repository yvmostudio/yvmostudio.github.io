fetch('/pages/_header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('loadheader').innerHTML = data;
    });
fetch('/pages/_footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('loadfooter').innerHTML = data;
    });
function qqun() {
	const link = document.getElementById('qqun');
      navigator.clipboard.writeText('799859562');
      link.textContent = '✓  已复制';
	}
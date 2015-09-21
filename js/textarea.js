<script type="text/javascript">
			function countChar(textareaName, spanName) {
					document.getElementById(spanName).innerHTML = 150 - document.getElementById(textareaName).value.length;
					if (document.getElementById(textareaName).value.length >= 150) {
						window.alert("已经是最大字数了哦！");
						return false;
					}
				}
</script>
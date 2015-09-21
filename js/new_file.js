<script>
scHTML='<div id="selectcontent" class="selectdiv" style="visibility:hidden;"><iframe id=selframe frameborder=0 height=100%></iframe><div id="selecthtml" class="selectcontent">selectÁÐ±í</div></div>'
document.write(scHTML)
vDiv=selectcontent
vDivHtml=selecthtml
function editselect(name,size,defaulttext,width,height,readonly){
  var combo=this;
  this.options=new Array();
  this.name=name;
  this.divname=name+'_div';
  this.buttonname=name+'_button';
  this.tablename=name+'_table';
  this.htmltable=name+'_html'
  if (!height) this.height=0; else this.height=height
  if (width) this.width=width
  if (!size) size=8
  if (!defaulttext) defaulttext=""
  if (!readonly || readonly==0) {readonly="" }else {if (readonly==1) readonly="readonly style=cursor:Default";this.readonly=1}
  esHTML='<div id='+this.divname+'>'
         +'<table id='+this.tablename+' cellpadding=0 cellspacing=0 class=select><tr><td bgcolor=#FFFFFF>'
         +'<input type=text class=selecttext size="'+size+'" name='+name+' value="'+defaulttext+'" '+readonly+'><td><button class=selectbutton id='+this.buttonname+'>6</td></tr></table>'
         +'</div>'
  document.write(esHTML)
  this.sbutton=eval("document.all."+this.buttonname)
  if (this.readonly==1) eval(this.name).onclick=function(){combo.show()}
  this.sbutton.onclick=function(){combo.show()}
  this.show=function(){
    pDiv=eval(combo.divname)
    pTable=eval(combo.tablename)
    var vHTML='<table id=htmltable cellspacing="0" cellpadding="2" bgcolor="#ffffff" class="selecttable" width=100%>'
    for (i=0;i<combo.options.length;i++)
      {
       vHTML+='<tr onmouseover="mo(this)" onmouseout="mu(this)" onclick="document.all.'+combo.name+'.value=this.innerText;selectcontent.style.visibility=\'hidden\'"><td nowrap>'+combo.options[i]
      }
     vHTML+="</table>"
    vDivHtml.innerHTML=vHTML
    vtop=pDiv.offsetTop+pDiv.offsetHeight
    vleft=pDiv.offsetLeft+1
    vParent = pDiv.offsetParent;
     while (vParent.tagName.toUpperCase() != "BODY")
 {
  vleft += vParent.offsetLeft;
  vtop += vParent.offsetTop;
  vParent = vParent.offsetParent;
 }//欢迎来到站长特效网，我们的网址是www.zzjs.net，很好记，zz站长，js就是js特效，本站收集大量高质量js代码，还有许多广告代码下载。
   var redge=document.body.clientWidth-vleft
   var bedge=document.body.clientHeight-vtop
 if (!combo.width) {vDiv.style.width=pTable.offsetWidth} else {vDiv.style.width=combo.width}
    if (combo.height==0)
      {
        vDiv.style.pixelHeight=parseInt(htmltable.offsetHeight)+2
        vDivHtml.style.pixelHeight=parseInt(htmltable.offsetHeight)+2
      }
      else
      {
         if (htmltable.offsetHeight>combo.height)
          {
            vDiv.style.pixelHeight=combo.height
            vDivHtml.style.pixelHeight=combo.height
            }
           else
           {
              vDiv.style.pixelHeight=parseInt(htmltable.offsetHeight)+2
              vDivHtml.style.pixelHeight=parseInt(htmltable.offsetHeight)+2
           }
       }
    vDivHtml.scrollTop=0
    if (redge<vDiv.offsetWidth)
      vDiv.style.left=vleft-1-(vDiv.offsetWidth-redge)
        else
      vDiv.style.left=vleft-1
   if (bedge<vDiv.offsetHeight)
    //vDiv.style.top=vtop-vDiv.offsetHeight-pDiv.offsetHeight
    vDiv.style.top=vtop-vDiv.offsetHeight+bedge
         else
      vDiv.style.top=vtop
    vDivHtml.style.width=parseInt(vDiv.style.width)
      vDiv.style.visibility="visible"
  }
  this.add=function(text){
     combo.options[combo.options.length]=text
  }
  this.about=function(){
 }
}
function mo(obj){
obj.style.backgroundColor="#000099"
obj.style.color="#ffffff"
}
function mu(obj){
obj.style.backgroundColor=""
obj.style.color="#000000"
}//欢迎来到站长特效网，我们的网址是www.zzjs.net，很好记，zz站长，js就是js特效，本站收集大量高质量js代码，还有许多广告代码下载。
document.onmousedown=function(){
if (vDiv.style.visibility=="visible"){
mx=event.x + document.body.scrollLeft
my=event.y + document.body.scrollTop;
x1=vDiv.offsetLeft
y1=vDiv.offsetTop
x2=vDiv.offsetLeft+vDiv.offsetWidth
y2=vDiv.offsetTop+vDiv.offsetHeight
if (mx<x1 || my<y1 || x2<mx || y2<my)
   {
     vDiv.style.visibility='hidden'
   }
}
}
</script>
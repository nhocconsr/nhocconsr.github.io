window.variablesJS.divStatisticsShowData=document.getElementById("showStatisticsData"),window.variablesJS.divStatisticsTitle=document.getElementById("showStatisticsTitle"),window.statisticsJS={initStatisticsData:function(){window.commonJS.showLoading("showStatisticsLoading"),setTimeout((()=>{var t="selfBusiness"===window.variablesJS.typeDefault?window.variablesJS.TU_DOANH:window.variablesJS.KHOI_NGOAI;$.ajax({url:`${window.apiUrlDefined.STATISTICS_DATA_URL}/${t}`,async:!1,dataType:"json"}).done((function(t){if(t){var i=[],a=Object.keys(t);a&&a.length>0&&(a.forEach((a=>{"olderItem"===a?variablesJS.olderItem=t[a]:i.push(t[a])})),window.statisticsJS.processDataInput(i)),window.commonJS.hideLoading("showStatisticsLoading")}}))}),100)},processDataInput:function(t){if(window.variablesJS.divStatisticsShowData.innerHTML="",t&&t.length>0){t.forEach((i=>{window.variablesJS.dataJson?window.variablesJS.dataJson.items.push(i.items[0]):(window.variablesJS.dataJson=i,window.variablesJS.dataJson.totalCount=t.length)})),window.variablesJS.dataJson.items.sort((function(t,i){var a=new Date(t.today.toDate);return new Date(i.today.toDate)-a}));for(let t=0;t<window.variablesJS.dataJson.items.length;t++)window.statisticsJS.createStatisticsReport(window.variablesJS.currentPeriod,window.variablesJS.dataJson.items[t],t);window.statisticsJS.setStatisticsTitle()}window.commonJS.hideLoading("showStatisticsLoading")},resetStatisticsData:function(){window.commonJS.closePopover(),window.variablesJS.dataJson=null,window.variablesJS.mappingDataJson=null,window.variablesJS.divStatisticsShowData.innerHTML="",document.getElementById("fileInput").value=null},refreshStatisticsData:function(){window.statisticsJS.resetStatisticsData(),window.statisticsJS.initStatisticsData()},readFileAsText:function(t){return new Promise((function(i,a){let e=new FileReader;e.onload=function(){i(e.result)},e.onerror=function(){a(e)},e.readAsText(t)}))},changeStatisticsType:function(t){window.statisticsJS.resetStatisticsData(),window.variablesJS.typeDefault=t,window.statisticsJS.initStatisticsData()},changeStatisticsAction:function(t){window.commonJS.closePopover(),window.commonJS.showLoading("showStatisticsLoading"),window.variablesJS.actionDefault=t,window.statisticsJS.processStatisticsData(variablesJS.currentPeriod),window.commonJS.hideLoading("showStatisticsLoading")},processStatisticsData:function(t){if(window.variablesJS.currentPeriod=t,window.variablesJS.dataJson&&window.variablesJS.dataJson.items&&window.variablesJS.dataJson.items.length>0){window.variablesJS.divStatisticsShowData.innerHTML="";for(let i=0;i<window.variablesJS.dataJson.items.length;i++)window.statisticsJS.createStatisticsReport(t,window.variablesJS.dataJson.items[i],i)}window.statisticsJS.setStatisticsTitle()},createStatisticsReport:function(t,i,a){var e="netBuy"===window.variablesJS.actionDefault?i[t].netBuy:i[t].netSell,n=window.commonJS.getNetTradeValueColumn(),o=" ("+new Date(i[t].fromDate).toLocaleDateString(window.variablesJS.defaultLocale)+" - "+new Date(i[t].toDate).toLocaleDateString(window.variablesJS.defaultLocale)+") - Tổng Giá Trị "+("netBuy"===window.variablesJS.actionDefault?"Mua Ròng: ":"Bán Ròng: ")+new Intl.NumberFormat(window.variablesJS.numberLocale).format(i[t][n])+" đ",s=document.createElement("table");s.classList.add("left-position","table","table-bordered","table-striped","table-hover");var d=document.createElement("thead"),w=d.insertRow(-1),l=document.createElement("th");l.setAttribute("colspan",9),l.innerHTML=o,w.appendChild(l),d.appendChild(w),s.appendChild(d),w=d.insertRow(-1);for(var r=0;r<window.variablesJS.statisticsHeadTitle.length;r++){var c=document.createElement("th");c.innerHTML=window.variablesJS.statisticsHeadTitle[r],w.appendChild(c)}var S=document.createElement("tbody");for(S.setAttribute("id","table-statistics-popover"),r=0;r<e.length;r++){(w=S.insertRow(-1)).setAttribute("onClick",`window.commonJS.showTickerInfor("${e[r].ticker}")`),w.classList.add("tr-cursor");var m=0===a&&window.variablesJS.dataJson.items.length>1?window.variablesJS.dataJson.items[a+1]:window.variablesJS.olderItem,J=window.commonJS.getColumnName(),u=window.commonJS.getVolumeColumnName();if(m){var b="netBuy"===window.variablesJS.actionDefault?m[t].netBuy.findIndex((t=>t.ticker===e[r][window.variablesJS.statisticsCols[1]])):m[t].netSell.findIndex((t=>t.ticker===e[r][window.variablesJS.statisticsCols[1]]));b>-1?window.commonJS.addCell(w,Number(r+1)+window.commonJS.getPositionIcon(b,r)):window.commonJS.addCell(w,Number(r+1))}else window.commonJS.addCell(w,Number(r+1));var v=e[r].priceChange,f=100*e[r].percentPriceChange,p=f>0||f<0?(v/e[r].percentPriceChange).toFixed(0):e[r].matchPrice,h=e[r].matchPrice;window.commonJS.addCell(w,Number(r+1)<=10?'<b class="top10">'+e[r].ticker+"</b>":e[r].ticker),window.commonJS.addCell(w,'<div class="text-left">'+window.commonJS.getIcbNameBySymbol(e[r].ticker)+"</div>"),window.commonJS.addCell(w,""!==u?new Intl.NumberFormat(window.variablesJS.numberLocale).format(e[r][u]):"&#8722;"),window.commonJS.addCell(w,new Intl.NumberFormat(window.variablesJS.numberLocale).format(e[r][J])),window.commonJS.addCell(w,'<span class="'+(Number(v)>0?"up":Number(v)<0?"down":"reference")+'">'+new Intl.NumberFormat(window.variablesJS.numberLocale).format(h)+"</span>"),window.commonJS.addCell(w,'<span class="'+(Number(v)>0?"up":Number(v)<0?"down":"reference")+'">'+new Intl.NumberFormat(window.variablesJS.numberLocale).format(v)+"</span>"),window.commonJS.addCell(w,'<span class="'+(Number(f)>0?"up":Number(f)<0?"down":"reference")+'">'+Number(f).toFixed(2)+"%</span>"),window.commonJS.addCell(w,new Intl.NumberFormat(window.variablesJS.numberLocale).format(p))}s.appendChild(S),window.variablesJS.divStatisticsShowData.appendChild(s)},setStatisticsTitle:function(){var t=(new Date).toLocaleDateString(window.variablesJS.defaultLocale),i=new Date(window.variablesJS.dataJson.items[0].today.toDate).toLocaleDateString(window.variablesJS.defaultLocale),a=` ${window.variablesJS.dataJson&&window.variablesJS.dataJson.items.length>0?"- Dữ liệu ngày "+i:""} `;i===t?(window.variablesJS.divStatisticsTitle.classList.remove("bg-out-of-date"),window.variablesJS.divStatisticsTitle.classList.add("bg-latest")):(window.variablesJS.divStatisticsTitle.classList.remove("bg-latest"),window.variablesJS.divStatisticsTitle.classList.add("bg-out-of-date")),window.variablesJS.divStatisticsTitle.innerHTML="Thống Kê ".concat("selfBusiness"===window.variablesJS.typeDefault?"Tự Doanh ":"Khối Ngoại ","netBuy"===window.variablesJS.actionDefault?"Mua Ròng":"Bán Ròng")+a,window.commonJS.closePopover(),window.commonJS.initIndustriesSelectionPopover("statistics-popover")}},document.addEventListener("DOMContentLoaded",(function(t){window.statisticsJS.initStatisticsData()})),window.addEventListener("load",(function(){var t=document.getElementById("fileInput");t&&t.addEventListener("change",(function(){if(t.files.length>0){window.variablesJS.dataJson=null,window.variablesJS.divStatisticsShowData.innerHTML="",window.commonJS.showLoading("showStatisticsLoading");let i=[];for(let a=0;a<=t.files.length-1;a++)i.push(window.statisticsJS.readFileAsText(t.files[a]));Promise.all(i).then((t=>{var i=t.map((t=>JSON.parse(t)));window.variablesJS.olderItem=null,window.statisticsJS.processDataInput(i)}))}}),!1)}));
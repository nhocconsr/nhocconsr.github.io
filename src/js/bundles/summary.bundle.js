window.variablesJS.divSummaryShowData=document.getElementById("showSummaryData"),window.variablesJS.divSummaryTitle=document.getElementById("showSummaryTitle"),window.summaryJS={resetDataSummary:function(){window.variablesJS.summaryDataJson=null,window.variablesJS.divSummaryShowData.innerHTML=""},refreshSummaryData:function(){window.summaryJS.resetDataSummary(),window.summaryJS.initSummaryData()},initSummaryData:function(){window.summaryJS.resetDataSummary(),window.commonJS.showLoading("showSummaryLoading"),Promise.all([window.commonJS.fetchContentByUrl(window.apiUrlDefined.SYNTHESIS_DATA_URL)]).then((a=>{a&&a.length>0&&window.summaryJS.setSummaryDataGlobal(a),window.commonJS.hideLoading("showSummaryLoading")})).then((()=>{})).catch((a=>{console.error(a)}))},setSummaryDataGlobal:function(a){window.summaryJS.resetDataSummary(),a&&a.length>0&&(window.variablesJS.summaryDataJson=a[0],window.summaryJS.processSummaryDataInput())},processSummaryDataInput:function(){var a=[],e=window.variablesJS.summaryDataJson.selfBusiness[variablesJS.currentSummaryPeriod][variablesJS.actionSummaryDefault],n=window.variablesJS.summaryDataJson.foreign[variablesJS.currentSummaryPeriod][variablesJS.actionSummaryDefault],r=e.map((a=>a.ticker)),t=n.map((a=>a.ticker)),i=r.filter((a=>-1!==t.indexOf(a)));i&&i.length>0&&i.forEach((r=>{var t=e.find((a=>a.ticker===r)),i=n.find((a=>a.ticker===r));if(t&&i){var o={ticker:r,totalNetBuyTradeValue:t.totalNetBuyTradeValue,selfBusinessPercentPriceChange:t.percentPriceChange,selfBusinessPriceChange:t.priceChange,selfBusinessMatchPrice:t.matchPrice,foreignNetBuyValue:i.foreignNetBuyValue,foreignPercentPriceChange:i.percentPriceChange,foreignPriceChange:i.priceChange,foreignMatchPrice:i.matchPrice,sumValue:0};o.sumValue=o.totalNetBuyTradeValue+o.foreignNetBuyValue,a.push(o)}})),a&&a.length>0&&a.sort((function(a,e){return e.sumValue-a.sumValue})),window.summaryJS.createSummaryReport(a),window.summaryJS.setSummaryTitle(),window.commonJS.hideLoading("showSummaryLoading")},createSummaryReport:function(a){var e="Thống Kê Từ "+new Date(window.variablesJS.summaryDataJson.foreign[variablesJS.currentSummaryPeriod].fromDate).toLocaleDateString(window.variablesJS.defaultLocale)+" - "+new Date(window.variablesJS.summaryDataJson.foreign[variablesJS.currentSummaryPeriod].toDate).toLocaleDateString(window.variablesJS.defaultLocale),n=document.createElement("table");n.classList.add("left-position","table","table-bordered","table-striped","table-hover");var r=document.createElement("thead"),t=r.insertRow(-1),i=document.createElement("th");i.setAttribute("colspan",10),i.innerHTML=e,t.appendChild(i),r.appendChild(t),n.appendChild(r),t=r.insertRow(-1);for(var o=0;o<variablesJS.summaryHeadTitle.length;o++){var m=document.createElement("th");o==variablesJS.summaryHeadTitle.length-2?m.setAttribute("colspan",2):m.setAttribute("rowspan",2),m.innerHTML=variablesJS.summaryHeadTitle[o],t.appendChild(m)}t=r.insertRow(-1);for(var s=0;s<variablesJS.subSummaryHeadTitle.length;s++)(m=document.createElement("th")).innerHTML=variablesJS.subSummaryHeadTitle[s],t.appendChild(m);var l=document.createElement("tbody");if(l.setAttribute("id","table-summary-popover"),a.length>0)for(o=0;o<a.length;o++){(t=l.insertRow(-1)).setAttribute("onClick",`window.commonJS.showTickerInfor("${a[o].ticker}")`),t.classList.add("tr-cursor");var d=a[o].foreignMatchPrice,u=a[o].foreignPriceChange,w=100*a[o].foreignPercentPriceChange,c=w>0||w<0?u/a[o].foreignPercentPriceChange:a[o].foreignMatchPrice;window.commonJS.addCell(t,Number(o+1)),window.commonJS.addCell(t,`<b class="top10">${a[o].ticker}</span>`),window.commonJS.addCell(t,'<div class="text-left">'+window.commonJS.getIcbNameBySymbol(a[o].ticker)+"</div>"),window.commonJS.addCell(t,`<span class='${window.commonJS.getClassByValue(u)}'>${new Intl.NumberFormat(window.variablesJS.numberLocale).format(d)}</span>`),window.commonJS.addCell(t,`<span class='${window.commonJS.getClassByValue(u)}'>${new Intl.NumberFormat(window.variablesJS.numberLocale).format(u)}</span>`),window.commonJS.addCell(t,`<span class='${window.commonJS.getClassByValue(w)}'>${w.toFixed(2)}%</span>`),window.commonJS.addCell(t,new Intl.NumberFormat(window.variablesJS.numberLocale).format(c.toFixed(0))),window.commonJS.addCell(t,`<span class='text-right'>${new Intl.NumberFormat(window.variablesJS.numberLocale).format(a[o].totalNetBuyTradeValue)}</span>`),window.commonJS.addCell(t,`<span class='text-right'>${new Intl.NumberFormat(window.variablesJS.numberLocale).format(a[o].foreignNetBuyValue)}</span>`),window.commonJS.addCell(t,`<span class='bold text-right top10'>${new Intl.NumberFormat(window.variablesJS.numberLocale).format(a[o].sumValue)}</span>`)}else(t=l.insertRow(-1)).insertCell(-1).innerHTML="Không có dữ liệu.",cell.colSpan=10;n.appendChild(l),window.variablesJS.divSummaryShowData.appendChild(n)},changePeriodAction:function(a){variablesJS.currentSummaryPeriod=a,null!==window.variablesJS.summaryDataJson?(window.variablesJS.divSummaryShowData.innerHTML="",window.commonJS.showLoading("showSummaryLoading"),window.summaryJS.processSummaryDataInput()):window.summaryJS.initSummaryData()},changeSummaryAction:function(a){variablesJS.actionSummaryDefault=a,null!==window.variablesJS.summaryDataJson?(window.variablesJS.divSummaryShowData.innerHTML="",window.commonJS.showLoading("showSummaryLoading"),window.summaryJS.processSummaryDataInput()):window.summaryJS.initSummaryData()},setSummaryTitle:function(){var a=(new Date).toLocaleDateString(window.variablesJS.defaultLocale),e=new Date(window.variablesJS.summaryDataJson.foreign[variablesJS.currentSummaryPeriod].toDate).toLocaleDateString(window.variablesJS.defaultLocale),n=` ${window.variablesJS.dataJson&&window.variablesJS.dataJson.items.length>0?"- Dữ liệu ngày "+e:""} `;e===a?(window.variablesJS.divSummaryTitle.classList.remove("bg-out-of-date"),window.variablesJS.divSummaryTitle.classList.add("bg-latest")):(window.variablesJS.divSummaryTitle.classList.remove("bg-latest"),window.variablesJS.divSummaryTitle.classList.add("bg-out-of-date")),window.variablesJS.divSummaryTitle.innerHTML=`Mã CP Được Tự Doanh & Khối Ngoại ${"netBuy"===variablesJS.actionSummaryDefault?"Mua Ròng":"Bán Ròng"}${n}`,window.commonJS.closePopover(),window.commonJS.initIndustriesSelectionPopover("summary-popover")}},document.addEventListener("DOMContentLoaded",(function(a){window.summaryJS.initSummaryData()}));
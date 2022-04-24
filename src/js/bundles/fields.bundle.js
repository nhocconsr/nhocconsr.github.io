window.fieldsJS={loadFieldsData:function(){window.variablesJS.sortFieldDefault="changePercent1D";var e=window.commonJS.getLoadingHTML();$("#showFieldsData").html(`</br>${e}`),setTimeout((()=>{var e=encodeURIComponent(`${window.apiUrlDefined.FIALDA_API_V1_URL}${window.apiUrlDefined.FIALDA_GET_FIELDS_REPORT_PATH}`),t=window.variablesJS.headFields;$.ajax({url:`${window.apiUrlDefined.CORS_PROXY_URL}/${e}`,async:!1,dataType:"json"}).done((function(e){e&&e.result?(window.variablesJS.fieldsDataJson=e,t+=window.fieldsJS.processFieldsDataInput("changePercent1D","desc")):t+='<tr><td colspan="12">Không có dữ liệu. Vui lòng thử lại sau!</td></tr>',t+="</tbody></table>",$("#showFieldsData").html(t),window.commonJS.initTooltips()})).fail((function(e,t,n){$("#showFieldsData").html("Có lỗi khi tải dữ liệu. Vui lòng thử lại sau!")}))}),100)},processFieldsDataInput:function(e,t){window.variablesJS.sortFieldDefault=e;var n="";return window.variablesJS.fieldsDataJson?(window.variablesJS.fieldsDataJson.result.sort((function(n,d){var a=null!==n[e]?n[e]:0,s=null!==d[e]?d[e]:0;return"desc"===t?s-a:a-s})),window.variablesJS.fieldsDataJson.result.forEach((e=>{var t=$.isNumeric(e.eps_ttm)?new Intl.NumberFormat(window.variablesJS.numberLocale).format(e.eps_ttm.toFixed(0)):"N/A",d=$.isNumeric(e.pe)?e.pe.toFixed(2):"N/A",a=$.isNumeric(e.ps)?e.ps.toFixed(2):"N/A",s=$.isNumeric(e.pb)?e.pb.toFixed(2):"N/A",o=$.isNumeric(e.mE_ROA)?`${(100*e.mE_ROA).toFixed(2)}%`:"N/A",i=$.isNumeric(e.mE_ROE)?`${(100*e.mE_ROE).toFixed(2)}%`:"N/A",l=$.isNumeric(e.changePercent1D)?(100*e.changePercent1D).toFixed(2):"0",r=$.isNumeric(e.changePercent1W)?(100*e.changePercent1W).toFixed(2):"N/A",c=$.isNumeric(e.changePercent1M)?(100*e.changePercent1M).toFixed(2):"N/A",w=$.isNumeric(e.changePercent3M)?(100*e.changePercent3M).toFixed(2):"N/A",h=$.isNumeric(e.changePercent6M)?(100*e.changePercent6M).toFixed(2):"N/A",f=$.isNumeric(e.changePercent1Y)?(100*e.changePercent1Y).toFixed(2):"N/A",p=$.isNumeric(e.changePercentYTD)?(100*e.changePercentYTD).toFixed(2):"N/A";n+=`<tr class="tr-cursor" action="collapsed" onclick="window.fieldsJS.showDetailField('${e.icbName}', '${e.icbCode}', this)">\n                            <td class="text-left filter-sort"><b class="top10">${e.icbName}</b> &nbsp; <span class="sort arrow-right"></span></td>\n                            <td class="top10">${t}</td>\n                            <td class="top10">${d}</td>\n                            <td class="top10">${a}</td>\n                            <td class="top10">${s}</td>\n                            <td class="top10">${o}</td>\n                            <td class="top10">${i}</td>\n                            <td class="${l>0?"up":l<0?"down":"reference"} bold">${l}%</td>\n                            <td class="${r>0?"up":r<0?"down":"reference"} bold">${r}%</td>\n                            <td class="${c>0?"up":c<0?"down":"reference"} bold">${c}%</td>\n                            <td class="${w>0?"up":w<0?"down":"reference"} bold">${w}%</td>\n                            <td class="${h>0?"up":h<0?"down":"reference"} bold">${h}%</td>\n                            <td class="${f>0?"up":f<0?"down":"reference"} bold">${f}%</td>\n                            <td class="${p>0?"up":p<0?"down":"reference"} bold">${p}%</td>\n                        </tr>`}))):n+='<tr><td colspan="12">Không có dữ liệu. Vui lòng thử lại sau!</td></tr>',n},refreshFieldsData:function(){window.fieldsJS.loadFieldsData()},sortTable:function(e,t){window.variablesJS.sortFieldType="desc",$(t).find("span").hasClass("desc")&&(window.variablesJS.sortFieldType="asc");var n=window.variablesJS.headFields;n+=window.fieldsJS.processFieldsDataInput(e,window.variablesJS.sortFieldType),n+="</tbody></table>",$("#showFieldsData").html(n),window.commonJS.initTooltips(),window.fieldsJS.removeAllSortClass(),$("#"+e).addClass(window.variablesJS.sortFieldType)},removeAllSortClass:function(){$("span.sort").removeClass("desc"),$("span.sort").removeClass("asc")},showDetailField:function(e,t,n){var d=`<tr class="append-field-data"><td colspan="14">${window.commonJS.getLoadingHTML()}</td></tr>`,a=$(n).attr("action"),s=$(n).find("td:eq(0) span");if($(".append-field-data").remove(),window.fieldsJS.resetFieldExpendIcon(),$(n).after(d),"collapsed"===a){s.removeClass("arrow-right"),s.addClass("desc"),$(n).attr("action","expanded");var o=window.stockData.filter((e=>e.icbCode===t)).map((e=>{let t={};return t.symbol=e.symbol,t}));$.ajax({url:`${window.apiUrlDefined.STOCK_INFOR_DATA_OF_FIELD_URL}`,method:"POST",data:JSON.stringify(o),headers:{"content-type":"application/json;charset=UTF-8"}}).done((function(e){if(e&&e.length>0){e=e.sort((function(e,t){var n=null!==e[window.variablesJS.sortFieldDefault]?e[window.variablesJS.sortFieldDefault]:0,d=null!==t[window.variablesJS.sortFieldDefault]?t[window.variablesJS.sortFieldDefault]:0;return"desc"===window.variablesJS.sortFieldType?d-n:n-d})),d="";for(let n=0;n<e.length;n++){var t=null!==e[n]?e[n]:null;if(t){var a=-99999999999!==t.changePercent1D?`${t.changePercent1D.toFixed(2)}`:"0",s=-99999999999!==t.changePercent1W?t.changePercent1W.toFixed(2):"N/A",o=-99999999999!==t.changePercent1M?t.changePercent1M.toFixed(2):"N/A",i=-99999999999!==t.changePercent3M?t.changePercent3M.toFixed(2):"N/A",l=-99999999999!==t.changePercent6M?t.changePercent6M.toFixed(2):"N/A",r=-99999999999!==t.changePercentYTD?t.changePercentYTD.toFixed(2):"N/A",c=-99999999999!==t.changePercent1Y?t.changePercent1Y.toFixed(2):"N/A";d+=`<tr class="append-field-data tr-cursor" onclick="window.commonJS.showTickerInfor('${t.symbol}')" style="background-color: #f0f8ffb0;">\n                                            <td class="bold-text">${t.symbol}</td>\n                                            <td colspan="6" class="text-left">${t.name}</td>\n                                            <td class="${a>0?"up":a<0?"down":"reference"} bold">${a}%</td>\n                                            <td class="${s>0?"up":s<0?"down":"reference"} bold">${s}%</td>\n                                            <td class="${o>0?"up":o<0?"down":"reference"} bold">${o}%</td>\n                                            <td class="${i>0?"up":i<0?"down":"reference"} bold">${i}%</td>\n                                            <td class="${l>0?"up":l<0?"down":"reference"} bold">${l}%</td>\n                                            <td class="${c>0?"up":c<0?"down":"reference"} bold">${c}%</td>\n                                            <td class="${r>0?"up":r<0?"down":"reference"} bold">${r}%</td>\n                                        </tr>`}}$(".append-field-data").remove(),$(n).after(d)}else $(".append-field-data").remove()})).fail((function(e,t,n){$(".append-field-data").remove()}))}else $(".append-field-data").remove(),s.removeClass("desc"),s.addClass("arrow-right"),$(n).attr("action","collapsed");n.scrollIntoView(!0)},resetFieldExpendIcon:function(){$(".filter-sort").find("span:eq(0)").removeClass("desc"),$(".filter-sort").find("span:eq(0)").addClass("arrow-right")},processFielDetailData:function(e){$("#detailModalContent").html(`</br>${window.commonJS.getLoadingHTML()}`);var t='<table class="table table-bordered table-responsive">\n                                <thead class="table-light">\n                                    <tr><th>#</th><th>Mã</th><th>Tên Doanh Nghiệp</th><th>1 Tuần</th><th>2 Tuần</th><th>1 Tháng</th><th>3 Tháng</th><th>6 Tháng</th><th>YTD</th><th>1 Năm</th><th>3 Năm</th></tr>              \n                                </thead>\n                                <tbody>';setTimeout((()=>{var n=window.stockData.filter((t=>t.icbCode===e));if(n&&n.length>0)for(let e=0;e<n.length;e++)t+=`<tr>\n                                    <td>${e+1}</td>                \n                                    <td class="top10 bold">${n[e].symbol}</td>\n                                    <td class="text-left">${n[e].name}</td>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>`;else t+='<tr><td colspan="11">Không có dữ liệu. Vui lòng thử lại sau!</td></tr>';t+="<tbody></table>",$("#detailModalContent").html(t)}),100)}},document.addEventListener("DOMContentLoaded",(function(e){window.fieldsJS.refreshFieldsData()}));
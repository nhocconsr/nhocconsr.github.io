/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/summary.js":
/*!***************************!*\
  !*** ./src/js/summary.js ***!
  \***************************/
/***/ (() => {

eval("window.variablesJS.divSummaryShowData = document.getElementById('showSummaryData');\r\nwindow.variablesJS.divSummaryTitle = document.getElementById('showSummaryTitle');\r\n\r\nwindow.summaryJS = {\r\n    resetDataSummary : function () {\r\n        window.variablesJS.summaryDataJson = null;\r\n        window.variablesJS.divSummaryShowData.innerHTML = \"\";\r\n    },\r\n    \r\n    refreshSummaryData : function () {\r\n        window.summaryJS.resetDataSummary();\r\n        window.summaryJS.initSummaryData();\r\n    },\r\n    \r\n    initSummaryData : function () {\r\n        window.summaryJS.resetDataSummary();\r\n        window.commonJS.showLoading(\"showSummaryLoading\");\r\n        Promise.all([\r\n            window.commonJS.fetchContentByUrl(window.apiUrlDefined.SYNTHESIS_DATA_URL)\r\n        ]).then((values) => {\r\n            if (values && values.length > 0) {\r\n                window.summaryJS.setSummaryDataGlobal(values);\r\n            }\r\n            window.commonJS.hideLoading(\"showSummaryLoading\");\r\n        }).then(() => {\r\n            //console.log('Done fetching content via JavaScript');\r\n        }).catch((err) => {\r\n            console.error(err);\r\n        });\r\n    },\r\n    \r\n    setSummaryDataGlobal : function (values) {\r\n        window.summaryJS.resetDataSummary();\r\n        if (values && values.length > 0) {\r\n            window.variablesJS.summaryDataJson = values[0];\r\n            window.summaryJS.processSummaryDataInput();\r\n        }\r\n    },\r\n    \r\n    processSummaryDataInput : function () {\r\n        var data = [];\r\n        var selfBusinessData = window.variablesJS.summaryDataJson.selfBusiness[window.variablesJS.currentSummaryPeriod][window.variablesJS.actionSummaryDefault];\r\n        var foreignData = window.variablesJS.summaryDataJson.foreign[window.variablesJS.currentSummaryPeriod][window.variablesJS.actionSummaryDefault];\r\n        var selfBusinessCodes = selfBusinessData.map(x => x.ticker);\r\n        var foreignCodes = foreignData.map(x => x.ticker);\r\n        var codes = selfBusinessCodes.filter(x => foreignCodes.indexOf(x) !== -1);\r\n        if (codes && codes.length > 0) {\r\n            codes.forEach(code => {\r\n                var selfBusinessDataObject = selfBusinessData.find(x => x.ticker === code);\r\n                var foreignDataObject = foreignData.find(x => x.ticker === code);\r\n                if (selfBusinessDataObject && foreignDataObject) {\r\n                    var dataObject = {\r\n                        ticker: code,\r\n                        totalNetBuyTradeValue: selfBusinessDataObject.totalNetBuyTradeValue,\r\n                        selfBusinessPercentPriceChange: selfBusinessDataObject.percentPriceChange,\r\n                        selfBusinessPriceChange: selfBusinessDataObject.priceChange,\r\n                        selfBusinessMatchPrice: selfBusinessDataObject.matchPrice,\r\n                        foreignNetBuyValue: foreignDataObject.foreignNetBuyValue,\r\n                        foreignPercentPriceChange: foreignDataObject.percentPriceChange,\r\n                        foreignPriceChange: foreignDataObject.priceChange,\r\n                        foreignMatchPrice: foreignDataObject.matchPrice,\r\n                        sumValue: 0,\r\n                    }\r\n                    dataObject.sumValue = dataObject.totalNetBuyTradeValue + dataObject.foreignNetBuyValue;\r\n                    data.push(dataObject);\r\n                }\r\n            });\r\n        }\r\n        if (data && data.length > 0) {\r\n            // Sort data\r\n            data.sort(function (a, b) {\r\n                return b.sumValue - a.sumValue;\r\n            });\r\n        }\r\n        window.summaryJS.createSummaryReport(data);\r\n        window.summaryJS.setSummaryTitle();\r\n        window.commonJS.hideLoading(\"showSummaryLoading\");\r\n    },\r\n    \r\n    createSummaryReport : function (data) {\r\n        var title = \"Thống Kê Từ \" + new Date(window.variablesJS.summaryDataJson[\"foreign\"][window.variablesJS.currentSummaryPeriod].fromDate).toLocaleDateString(window.variablesJS.defaultLocale) + \" - \" + new Date(window.variablesJS.summaryDataJson[\"foreign\"][window.variablesJS.currentSummaryPeriod].toDate).toLocaleDateString(window.variablesJS.defaultLocale);\r\n        var table = document.createElement(\"table\");\r\n        table.classList.add(\"left-position\", \"table\", \"table-bordered\", \"table-striped\", \"table-hover\");\r\n        var thead = document.createElement(\"thead\");\r\n        var tr = thead.insertRow(-1);                    // table row.\r\n        var thTime = document.createElement(\"th\");\r\n        thTime.setAttribute(\"colspan\", 10);\r\n        thTime.innerHTML = title;\r\n        tr.appendChild(thTime);\r\n        thead.appendChild(tr);\r\n        table.appendChild(thead);\r\n        tr = thead.insertRow(-1);\r\n        for (var i = 0; i < variablesJS.summaryHeadTitle.length; i++) {\r\n            var th = document.createElement(\"th\");      // table header.\r\n            if (i == variablesJS.summaryHeadTitle.length - 2) {\r\n                th.setAttribute(\"colspan\", 2);\r\n            } else {\r\n                th.setAttribute(\"rowspan\", 2);\r\n            }\r\n            th.innerHTML = variablesJS.summaryHeadTitle[i];\r\n            tr.appendChild(th);\r\n        }\r\n    \r\n        // create span column\r\n        tr = thead.insertRow(-1);\r\n        for (var k = 0; k < variablesJS.subSummaryHeadTitle.length; k++) {\r\n            var th = document.createElement(\"th\");\r\n            th.innerHTML = variablesJS.subSummaryHeadTitle[k];\r\n            tr.appendChild(th);\r\n        }\r\n    \r\n        var tbody = document.createElement(\"tbody\");\r\n        tbody.setAttribute(\"id\",\"table-summary-popover\");\r\n        if (data.length > 0) {\r\n            // add json data to the table as rows.\r\n            for (var i = 0; i < data.length; i++) {\r\n                tr = tbody.insertRow(-1);\r\n                tr.setAttribute(\"onClick\", `window.commonJS.showTickerInfor(\"${data[i][\"ticker\"]}\")`);\r\n                tr.classList.add(\"tr-cursor\");\r\n                //var selfBusinessClosePrice = data[i][\"selfBusinessMatchPrice\"];\r\n                //var selfBusinessPriceChange = data[i][\"selfBusinessPriceChange\"];\r\n                //var selfBusinessPercentChange = data[i][\"selfBusinessPercentPriceChange\"] * 100;\r\n                //var selfBusinessPrice = selfBusinessPercentChange > 0 || selfBusinessPercentChange < 0 ? (selfBusinessPriceChange/data[i][\"selfBusinessPercentPriceChange\"]) : data[i][\"selfBusinessMatchPrice\"];\r\n                var foreignClosePrice = data[i][\"foreignMatchPrice\"];\r\n                var foreignPriceChange = data[i][\"foreignPriceChange\"];\r\n                var foreignPercentChange = data[i][\"foreignPercentPriceChange\"] * 100;\r\n                var foreignPrice = foreignPercentChange > 0 || foreignPercentChange < 0 ? (foreignPriceChange/data[i][\"foreignPercentPriceChange\"]) : data[i][\"foreignMatchPrice\"];\r\n                //var avgPrice = (selfBusinessPrice + foreignPriceChange)/2;\r\n                window.commonJS.addCell(tr, Number(i + 1));\r\n                window.commonJS.addCell(tr, `<b class=\"top10\">${data[i][\"ticker\"]}</span>`);\r\n                window.commonJS.addCell(tr, '<div class=\"text-left\">' + window.commonJS.getIcbNameBySymbol(data[i][\"ticker\"]) + '</div>');\r\n                // window.commonJS.addCell(tr, `<span class='text-right'>${new Intl.NumberFormat(window.variablesJS.numberLocale).format(data[i][\"totalNetBuyTradeValue\"])}</span>`);\r\n                // window.commonJS.addCell(tr, `<span class='${window.commonJS.getClassByValue(selfBusinessPriceChange)}'>${new Intl.NumberFormat(window.variablesJS.numberLocale).format(selfBusinessClosePrice)}</span>`);\r\n                // window.commonJS.addCell(tr, `<span class='${window.commonJS.getClassByValue(selfBusinessPriceChange)}'>${new Intl.NumberFormat(window.variablesJS.numberLocale).format(selfBusinessPriceChange)}</span>`);\r\n                // window.commonJS.addCell(tr, `<span class='${window.commonJS.getClassByValue(selfBusinessPercentChange)}'>${selfBusinessPercentChange.toFixed(2)}%</span>`);\r\n                \r\n                window.commonJS.addCell(tr, `<span class='${window.commonJS.getClassByValue(foreignPriceChange)}'>${new Intl.NumberFormat(window.variablesJS.numberLocale).format(foreignClosePrice)}</span>`);\r\n                window.commonJS.addCell(tr, `<span class='${window.commonJS.getClassByValue(foreignPriceChange)}'>${new Intl.NumberFormat(window.variablesJS.numberLocale).format(foreignPriceChange)}</span>`);\r\n                window.commonJS.addCell(tr, `<span class='${window.commonJS.getClassByValue(foreignPercentChange)}'>${foreignPercentChange.toFixed(2)}%</span>`);\r\n                window.commonJS.addCell(tr, new Intl.NumberFormat(window.variablesJS.numberLocale).format(foreignPrice.toFixed(0)));\r\n                window.commonJS.addCell(tr, `<span class='text-right'>${new Intl.NumberFormat(window.variablesJS.numberLocale).format(data[i][\"totalNetBuyTradeValue\"])}</span>`);\r\n                window.commonJS.addCell(tr, `<span class='text-right'>${new Intl.NumberFormat(window.variablesJS.numberLocale).format(data[i][\"foreignNetBuyValue\"])}</span>`);\r\n                window.commonJS.addCell(tr, `<span class='bold text-right top10'>${new Intl.NumberFormat(window.variablesJS.numberLocale).format(data[i][\"sumValue\"])}</span>`);\r\n            }\r\n        } else {\r\n            tr = tbody.insertRow(-1);\r\n            var tabCell = tr.insertCell(-1);\r\n            tabCell.innerHTML = \"Không có dữ liệu.\";\r\n            tabCell.colSpan = 10;\r\n        }\r\n    \r\n        table.appendChild(tbody);\r\n        // Now, add the newly created table with json data, to a container.\r\n        window.variablesJS.divSummaryShowData.appendChild(table);\r\n    },\r\n    \r\n    changePeriodAction : function (period) {\r\n        window.variablesJS.currentSummaryPeriod = period;\r\n        if (window.variablesJS.summaryDataJson !== null) {\r\n            window.variablesJS.divSummaryShowData.innerHTML = \"\";\r\n            window.commonJS.showLoading(\"showSummaryLoading\");\r\n            window.summaryJS.processSummaryDataInput();\r\n        } else {\r\n            window.summaryJS.initSummaryData();\r\n        }\r\n    },\r\n    \r\n    changeSummaryAction : function (action) {\r\n        window.variablesJS.actionSummaryDefault = action;\r\n        if (window.variablesJS.summaryDataJson !== null) {\r\n            window.variablesJS.divSummaryShowData.innerHTML = \"\";\r\n            window.commonJS.showLoading(\"showSummaryLoading\");\r\n            window.summaryJS.processSummaryDataInput();\r\n        } else {\r\n            window.summaryJS.initSummaryData();\r\n        }\r\n    },\r\n    \r\n    setSummaryTitle : function () {\r\n        var today = new Date().toLocaleDateString(window.variablesJS.defaultLocale);\r\n        var updateDate = new Date(window.variablesJS.summaryDataJson[\"foreign\"][window.variablesJS.currentSummaryPeriod].toDate).toLocaleDateString(window.variablesJS.defaultLocale);\r\n        var updateDateStr = ` ${window.variablesJS.dataJson && window.variablesJS.dataJson.items.length > 0 ? \"- Dữ liệu ngày \" + updateDate : \"\"} `;\r\n        if (updateDate === today) {\r\n            window.variablesJS.divSummaryTitle.classList.remove(\"bg-out-of-date\");\r\n            window.variablesJS.divSummaryTitle.classList.add(\"bg-latest\");\r\n        } else {\r\n            window.variablesJS.divSummaryTitle.classList.remove(\"bg-latest\");\r\n            window.variablesJS.divSummaryTitle.classList.add(\"bg-out-of-date\");\r\n        }\r\n        window.variablesJS.divSummaryTitle.innerHTML = `Mã CP Được Tự Doanh & Khối Ngoại ${variablesJS.actionSummaryDefault === \"netBuy\" ? \"Mua Ròng\" : \"Bán Ròng\"}${updateDateStr}`;\r\n        // Init Industries Filter Popover\r\n        window.commonJS.closePopover();\r\n        window.commonJS.initIndustriesSelectionPopover('summary-popover');\r\n    }\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function(e) {\r\n    window.summaryJS.initSummaryData();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/summary.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/summary.js"]();
/******/ 	
/******/ })()
;
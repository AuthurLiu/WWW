/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = '';
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};
var color = ["red","green","black","yellow"];
var dataList = [];
// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: "北京",
  nowGraTime: "month"
}
//获取表单DOM
var form = document.forms[0];

/**
 * 渲染图表
 */
function renderChart() {
  
  var aqiChartWrap = document.getElementById("aqi-chart-wrap");
  var tempData = chartData[pageState.nowSelectCity][pageState.nowGraTime];
  var innerHTML = "";
  for(var key in tempData){
    innerHTML+="<div style='background:red;width:10px;height:"+tempData[key]+"px;display:inline-block;margin-right:2px;'></div>"
  }
  aqiChartWrap.innerHTML = innerHTML;
  
  // var max = Math.max.apply(Math, dataList);
  // aqiChartWrap.innerHTML = "<div style = 'height :"+max+" ; display:inline-block'></div>";
  // var i = 0;
  // dataList.forEach(function(item){
  //   var newNode = document.createElement('div');
  //   newNode.style.display = "inline-block";
  //   newNode.style.height = item+"px";
  //   newNode.style.background = color[i];
  //   newNode.style.verticalAlign = "bottom";
  //   i = (i<3)?i+1:0;
  //   switch (pageState.nowGraTime){
  //     case "day" : 
  //      newNode.style.width = "8px";
  //      newNode.style.marginRight = "2px";
  //      break;
  //     case "week":
  //       newNode.style.width = "16px";
  //       newNode.style.marginRight = "4px";
  //       break;
  //     case "month":
  //       newNode.style.width = "32px";
  //       newNode.style.marginRight = "8px";
  //       break;

  //   }
  //   aqiChartWrap.appendChild(newNode);

  // });
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化 
  var graTime = form.elements["gra-time"].value;
  if(pageState.nowGraTime != graTime ){
    // 设置对应数据
    pageState.nowGraTime = graTime;
      
    // 调用图表渲染函数

    renderChart();
  }
  
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 

  var citySelect = document.getElementById("city-select");
  var cityOption = citySelect.options[citySelect.selectedIndex].text;
  if(pageState.nowSelectCity !=  cityOption){
    // 设置对应数据
    pageState.nowSelectCity =  cityOption;
    // 调用图表渲染函数
    renderChart();
  }
  
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {

  var radio = form.elements["gra-time"];
  pageState.nowGraTime = radio.value;
  var i,len;
  for(i=0,len = radio.length;i<len;i++){
    radio[i].addEventListener('change',graTimeChange);
  }
  
  
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  var citySelect = document.getElementById("city-select");

  for(var key in aqiSourceData){
    var newOption = new Option(key,key);
    citySelect.add(newOption);
  }

  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  citySelect.addEventListener("change",citySelectChange);
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
  for(var cityKey in aqiSourceData){
    
    var tempCityData = aqiSourceData[cityKey];//单个城市的数据
    
    var dataCount = 0;
    var dayCount = 1;
    var weekCount = 1;
    var monthCount = new Date(Object.getOwnPropertyNames(tempCityData)[0]).getMonth()+1;
    var weekDayCount =1;
    var monthDayCount = 1;
    //日数据
    var dayData = {};
    dayData.day = tempCityData;
    chartData[cityKey] = dayData;
    
        

    //周数据 
   
    var weekData = {};
    for(var dateKey in tempCityData){
      dataCount += tempCityData[dateKey];
      //汇总记录每周数据
      if(new Date(dateKey).getDay()==6){
        var tempWeekKey = "第"+weekCount+"周";
        weekData[tempWeekKey] = Math.round(dataCount/weekDayCount);
       
        //重置数据集 增加周数
        dataCount = 0;
        weekCount++;
        weekDayCount = 1;
      }
      //记录残余天数
      if(dayCount == Object.getOwnPropertyNames(tempCityData).length&&dataCount!=0){
        var tempWeekKey = "第"+weekCount+"周";
        weekData[tempWeekKey] = Math.round(dataCount/weekDayCount);
      }
      dayCount++;
      weekDayCount++;
    }
  
    chartData[cityKey].week = weekData;

    //月数据
    var monthData = {};
    for(var dateKey in tempCityData){
      
     
      if(new Date(dateKey).getMonth()+1!=monthCount){
        
        var tempMonthKey = "第"+monthCount+"月";
        monthData[tempMonthKey] = Math.round(dataCount/monthDayCount);

       
        //重置数据集 重置月份计数 增加月份计数
        dataCount = 0;monthCount++;
        monthDayCount = 1;
        
      }

      //汇总记录每月数据
      dataCount += tempCityData[dateKey];
      //记录残余天数
      if(dayCount == Object.getOwnPropertyNames(tempCityData).length&&dataCount!=0){
        var tempMonthKey = "第"+monthCount+"月";
        monthData[tempMonthKey] = Math.round(dataCount/monthDayCount);
      }
      dayCount++;
      monthDayCount++;
    }
  
    chartData[cityKey].month = monthData;

    }
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm();
  initCitySelector();
  initAqiChartData();
  renderChart();
}

init();


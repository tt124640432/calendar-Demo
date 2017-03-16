;(function($){
	$.fn.calendar=function(opt){
	var obj={
		table:'',
		sel1:'',
		sel2:''
	}
	var set=$.extend(obj,opt);
	var date=new Date(),
		today=date.getDate(),//今天几号
		year=date.getFullYear(),//今年
		month = date.getMonth(),//本月
		moreday=35,//设置一个不符合每月天数的日期
		day2=new Date(year,month,moreday),//修正后日期
		allday=day2.getDate(),//修正后为几号
		dyrq=moreday-allday,//相减得到本月天数
	    	//new Date(year,month,0);就可获得本月天数
	    	day3=new Date(year,month,1),//日期为本月1号
		benyue1=day3.getDay();//本月1号星期几

		addDay()
		sel()
		function addDay(){//添加日期
			set.td.html('')
			for(i=0;i<dyrq;i++){
				if((i+1)==today){
					set.td.eq(i+benyue1).html('<b>'+(i+1)+'</b>')
				}else{
					set.td.eq(i+benyue1).html(i+1)
				}				
			}
		}
		function sel(){//添加下拉列表
			var y=''
			for(i=1990;i<2051;i++){
				if(i==year){
					y+='<option selected>'+i+'</option>'	
				}else{
					y+='<option>'+i+'</option>'					
				}	
				set.sel1.html(y);			
			}
			set.sel2.html('')
			for(i=1;i<=12;i++){
				var mn=('<option>'+i+'</option>')
				set.sel2.append($(mn))
			}
			set.sel2.children().eq(month).attr('selected','selected')
		}

		set.sel2.on('change',sc2)
		set.sel1.on('change',sc2)

		function sc2(){
			month=set.sel2.val()-1;
			year=set.sel1.val()
			day2=new Date(year,month,moreday),//修正后日期
			allday=day2.getDate(),//修正后为几号
			dyrq=moreday-allday;//相减得到本月天数
			day3=new Date(year,month,1);//日期为本月1号
			benyue1=day3.getDay();//本月1号星期几
			addDay()
		}
		
	}
})(jQuery)




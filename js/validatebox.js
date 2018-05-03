$.extend($.fn.validatebox.defaults.rules, {     
	minLength: {     
		validator: function(value, param){   //value 为需要校验的输入框的值 , param为使用此规则时存入的参数  
			return value.length >= param[0];     
		},     
		message: '请输入最小{0}位字符.'    
	}     
});   
  
$.extend($.fn.validatebox.defaults.rules, {     
	maxLength: {     
		validator: function(value, param){     
			return param[0] >= value.length;     
		},     
		message: '请输入最大{0}位字符.'    
	}     
});   
  
$.extend($.fn.validatebox.defaults.rules, {     
	length: {     
		validator: function(value, param){     
			return value.length >= param[0] && param[1] >= value.length;     
		},     
		message: '请输入{0}-{1}位字符.'    
	}     
});   

// extend the 'equals' rule     
$.extend($.fn.validatebox.defaults.rules, {     
	equals: {     
		validator: function(value,param){     
			return value == $(param[0]).val();     
		},     
		message: '字段不相同.'    
	}     
});    
  
$.extend($.fn.validatebox.defaults.rules, {     
	web : {     
		validator: function(value){     
			return /^(http[s]{0,1}|ftp):\/\//i.test($.trim(value));     
		},     
		message: '网址格式错误.'    
	}     
});   
			  
$.extend($.fn.validatebox.defaults.rules, {     
   mobile : {     
		validator: function(value){     
			return /^1[0-9]{10}$/i.test($.trim(value));     
		},     
		message: '手机号码格式错误.'    
	}     
});  
 
$.extend($.fn.validatebox.defaults.rules, {     
   date : {     
		validator: function(value){     
			return /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/i.test($.trim(value));     
		},     
		message: '曰期格式错误,如2012-09-11.'    
	}     
});   
 
$.extend($.fn.validatebox.defaults.rules, {     
   email : {     
		validator: function(value){     
			return /^[a-zA-Z0-9_+.-]+\@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/i.test($.trim(value));     
		},     
		message: '电子邮箱格式错误.'    
	}     
});

$.extend($.fn.validatebox.defaults.rules, {     
   number:{     
		validator: function(value){     
			return /^\d+$/.test(value);    
		},     
		message: '只能输入数字'    
	}     
});

$.extend($.fn.validatebox.defaults.rules, {     
   chinese: {     
		validator: function(value){     
			return /^[\u0391-\uFFE5]+$/.test(value);    
		},     
		message: '只能输入中文字符 '    
	}     
}); 

$.extend($.fn.validatebox.defaults.rules, {     
   english:{     
		validator: function(value){     
			return /^[A-Za-z]+$/.test(value);    
		},     
		message: '只能输入英文字符'    
	}     
}); 
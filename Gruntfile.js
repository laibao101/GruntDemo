//包装函数
module.exports = function(grunt){

	//任务配置
	grunt.initConfig({
		//获取package.json里面的信息
		pkg:grunt.file.readJSON('package.json')

	})；


	//执行函数
	grunt.regisiterTask("default",[])

}



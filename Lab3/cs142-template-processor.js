function Cs142TemplateProcessor (template) {
	this.template = template;
}
Cs142TemplateProcessor.prototype.fillIn = function(dict) {
	var str = this.template;
	var regex = /{{[^{}]*}}/g;
	var words = str.match(regex);
	for(var i = 0; i < words.length; i++) {
		var word = words[i].replace("{{", "").replace("}}", "");
		str = str.replace(words[i], dict[word]);
	}
	return str;
};
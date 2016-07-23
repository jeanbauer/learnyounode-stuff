const getDependencies = (tree = {}, result = []) => {
 	if(!tree.dependencies) return [];

 	Object.keys(tree.dependencies).map(dep => {
 		const depStr = dep + "@" + tree.dependencies[dep].version;
 		if(result.indexOf(depStr) < 0) result.push(depStr);
 		getDependencies(tree.dependencies[dep], result);
 	})
 	return result.sort();
}

module.exports = getDependencies;

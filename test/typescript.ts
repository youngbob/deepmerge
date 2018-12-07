import * as merge from '../';

const x = {
	foo: 'abc',
	bar: 'def',
	wat: 42,
}

const y = {
	foo: 'cba',
	bar: 'fed',
	wat: 42,
}

const z = {
	baz: '123',
	quux: '456',
	wat: 42,
}

let merged1 = merge(x, y);
let merged2 = merge(x, z);
let merged3 = merge.all<{wat: number}>([ x, y, z ]);

merged1.foo;
merged1.bar;
merged2.foo;
merged2.baz;
merged3.wat;


const options1: merge.Options = {
	clone: true,
	isMergeableObject (obj) {
		return false;
	},
};

const options2: merge.Options = {
	arrayMerge (target, source, options) {
		target.length;
		source.length;
		options.isMergeableObject(target);

		return [];
	},
	clone: true,
	isMergeableObject (obj) {
		return false;
	},
};

merged1 = merge(x, y, options1);
merged2 = merge(x, z, options2);
merged3 = merge.all<{wat: number}>([x, y, z], options1);

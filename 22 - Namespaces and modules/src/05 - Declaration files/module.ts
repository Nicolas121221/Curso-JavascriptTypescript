import _ from "lodash";

_.mul = function (array: number[]): number {
	return array.reduce((ac, value) => ac * value, 1);
};

global.MYGLOBAL = "wow";
export default _;

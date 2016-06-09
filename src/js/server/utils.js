import path from 'path'

let distFolder = path.join(__dirname, '../../../dist');
export function getDistFolder(){
	return distFolder;
}
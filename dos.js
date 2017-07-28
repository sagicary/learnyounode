var largo = (process.argv).length;
var suma = 0;
for (var x=2; x<largo; x++){
	//console.log (process.argv[x]);

	suma = suma + (Number(process.argv[x]));
}

console.log(suma);
//console.log(process.argv);


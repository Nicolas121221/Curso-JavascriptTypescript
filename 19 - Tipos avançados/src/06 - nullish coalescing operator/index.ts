// Encadeamento opicional e Operado de coalescência nula
type Documento = {
	titulo: string;
	texto: string;
	data?: Date;
};

const documento: Documento = {
	titulo: "O titulo",
	texto: "O texto",
};

console.log(documento.data?.toDateString() ?? "Ixi, não existe data.");

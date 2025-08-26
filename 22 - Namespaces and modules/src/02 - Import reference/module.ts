/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNamespace {
	export const namespaceName = "Nícolas";

	export class NamespacePerson {
		constructor(public name: string) {}
	}

	const person = new NamespacePerson("Nícolas");
	console.log(person);

    export namespace OtherNamespace{
        export const namespaceName = 'Guedes'
    }
}

const person = new MyNamespace.NamespacePerson("Nícolas");
console.log(person);
console.log(MyNamespace.namespaceName)
console.log(MyNamespace.OtherNamespace.namespaceName)

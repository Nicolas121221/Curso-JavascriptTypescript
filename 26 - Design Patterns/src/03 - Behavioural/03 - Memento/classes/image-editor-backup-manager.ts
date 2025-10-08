import type { ImageEditor } from "./image-editor.ts";
import type { Memento } from "./Memento.ts";

export class ImageEditorBackupManager {
	private mementos: Memento[] = [];

	constructor(private readonly imageEditor: ImageEditor) {}

	backup(): void {
		console.log(`Backup: saving the current state of ImageEditor`);
		this.mementos.push(this.imageEditor.save());
	}

	undo(): void {
		const memento = this.mementos.pop();

		if (!memento) return console.log("Backup: no mementos");

		this.imageEditor.restore(memento);
		console.log(`Backup: ${memento.getName()} was restore successfully`);
	}

	showMemenot(): void {
		for (const memento of this.mementos) {
			console.log(memento);
		}
	}
}

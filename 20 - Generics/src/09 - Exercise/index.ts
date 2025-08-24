type ElectionOption = {
	votes: number;
	option: string;
};

export class Election {
	private _electionOptions: ElectionOption[] = [];
	constructor(public title: string) {}

	addElectionOption(electionOption: ElectionOption): void {
		this._electionOptions.push(electionOption);
	}

	vote(electionIndex: number): void {
		if (!this._electionOptions[electionIndex]) return;
		this._electionOptions[electionIndex].votes += 1;
	}

	get electionOption(): ElectionOption[] {
		return this._electionOptions;
	}
}

export class ElectionApp {
	private votations: Votation[] = [];

	addVotation(votation: Votation): void {
		this.votations.push(votation);
	}

	showVotations(): void {
		for (const votation of this.votations) {
			console.log(votation.title);

			for (const votationOption of votation.votationOption) {
				console.log(
					` ${votationOption.votes} | ${votationOption.option}`,
				);
			}

			console.log();
		}
	}
}

const votation1 = new Votation("What is your favorite programming language? ");
votation1.addVotationOption({ votes: 0, option: "Python" });
votation1.addVotationOption({ votes: 0, option: "Javascript" });
votation1.addVotationOption({ votes: 0, option: "Typescript" });
votation1.addVotationOption({ votes: 0, option: "GoLang" });
votation1.addVotationOption({ votes: 0, option: "Java" });
votation1.addVotationOption({ votes: 0, option: "C" });
votation1.addVotationOption({ votes: 0, option: "C++" });
votation1.addVotationOption({ votes: 0, option: "C#" });

votation1.vote(1);
votation1.vote(1);
votation1.vote(1);
votation1.vote(2);
votation1.vote(0);
votation1.vote(0);

const votation2 = new Votation("What is your favorite color? ");
votation2.addVotationOption({votes: 0 , option:'Red'})
votation2.addVotationOption({votes: 0 , option:'Green'})
votation2.addVotationOption({votes: 0 , option:'Blue'})
votation2.addVotationOption({votes: 0 , option:'Brown'})

votation2.vote(1)
votation2.vote(2)
votation2.vote(0)
votation2.vote(1)
votation2.vote(3)

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();

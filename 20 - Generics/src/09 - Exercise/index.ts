type VotingOption = {
	votes: number;
	option: string;
};

export class Voting {
	private _votingOptions: VotingOption[] = [];
	constructor(public title: string) {}

	addVotingOption(votingOption: VotingOption): void {
		this._votingOptions.push(votingOption);
	}

	vote(votingIndex: number): void {
		if (!this._votingOptions[votingIndex]) return;
		this._votingOptions[votingIndex].votes += 1;
	}

	get votingOption(): VotingOption[] {
		return this._votingOptions;
	}
}

export class VotingApp {
	private votingSessions: Voting[] = [];

	addVotingSection(voting: Voting): void {
		this.votingSessions.push(voting);
	}

	showVotingSessions(): void {
		for (const voting of this.votingSessions) {
			console.log(voting.title);

			for (const votingOption of voting.votingOption) {
				console.log(
					` ${votingOption.votes} | ${votingOption.option}`,
				);
			}

			console.log();
		}
	}
}

const voting1 = new Voting("What is your favorite programming language? ");
voting1.addVotingOption({ votes: 0, option: "Python" });
voting1.addVotingOption({ votes: 0, option: "Javascript" });
voting1.addVotingOption({ votes: 0, option: "Typescript" });
voting1.addVotingOption({ votes: 0, option: "GoLang" });
voting1.addVotingOption({ votes: 0, option: "Java" });
voting1.addVotingOption({ votes: 0, option: "C" });
voting1.addVotingOption({ votes: 0, option: "C++" });
voting1.addVotingOption({ votes: 0, option: "C#" });

voting1.vote(1);
voting1.vote(1);
voting1.vote(1);
voting1.vote(2);
voting1.vote(0);
voting1.vote(0);

const voting2 = new Voting("What is your favorite color? ");
voting2.addVotingOption({votes: 0 , option:'Red'})
voting2.addVotingOption({votes: 0 , option:'Green'})
voting2.addVotingOption({votes: 0 , option:'Blue'})
voting2.addVotingOption({votes: 0 , option:'Brown'})

voting2.vote(1)
voting2.vote(2)
voting2.vote(0)
voting2.vote(1)
voting2.vote(3)

const votingApp = new VotingApp();
votingApp.addVotingSection(voting1);
votingApp.addVotingSection(voting2);

votingApp.showVotingSessions();

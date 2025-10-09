import { BaseBudgetHandler } from "./base-budget-handler.ts";
import type { CustomerBudget } from "./customer-budget.ts";

export class DirectorBudgetHandler extends BaseBudgetHandler {
	handle(budget: CustomerBudget): CustomerBudget {
		if (budget.total <= 50000) {
			console.log("The director approved the budget.");
            budget.isApproved = true;
            return budget;
		}

		return super.handle(budget);
	}
}

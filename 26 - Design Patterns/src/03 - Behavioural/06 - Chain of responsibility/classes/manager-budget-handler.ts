import { BaseBudgetHandler } from "./base-budget-handler.ts";
import type { CustomerBudget } from "./customer-budget.ts";

export class ManagerBudgetHandler extends BaseBudgetHandler {
	handle(budget: CustomerBudget): CustomerBudget {
		if (budget.total <= 5000) {
			console.log("The manager approved the budget.");
            budget.isApproved = true;
            return budget;
		}

		return super.handle(budget);
	}
}

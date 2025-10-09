import { BaseBudgetHandler } from "./base-budget-handler.ts";
import type { CustomerBudget } from "./customer-budget.ts";

export class SellerBudgetHandler extends BaseBudgetHandler {
	handle(budget: CustomerBudget): CustomerBudget {
		if (budget.total <= 1000) {
			console.log("The seller approved the budget.");
			budget.isApproved = true;
			return budget;
		}

		return super.handle(budget);
	}
}

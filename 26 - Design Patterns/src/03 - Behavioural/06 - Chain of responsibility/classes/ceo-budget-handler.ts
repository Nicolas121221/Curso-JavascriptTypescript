import { BaseBudgetHandler } from "./base-budget-handler.ts";
import type { CustomerBudget } from "./customer-budget.ts";

export class CEOBudgetHandler extends BaseBudgetHandler {
	handle(budget: CustomerBudget): CustomerBudget {
		console.log("The CEO approved the budget.");
		budget.isApproved = true;
		return budget;
	}
}

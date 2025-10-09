import { CEOBudgetHandler } from "./classes/ceo-budget-handler.ts";
import { CustomerBudget } from "./classes/customer-budget.ts";
import { DirectorBudgetHandler } from "./classes/director-budget-handler.ts";
import { ManagerBudgetHandler } from "./classes/manager-budget-handler.ts";
import { SellerBudgetHandler } from "./classes/seller-budget-handler.ts";

const customerBudget = new CustomerBudget(100000);

const seller = new SellerBudgetHandler();
seller
	.setNextHandler(new ManagerBudgetHandler())
	.setNextHandler(new DirectorBudgetHandler())
	.setNextHandler(new CEOBudgetHandler());

seller.handle(customerBudget)
console.log(customerBudget)

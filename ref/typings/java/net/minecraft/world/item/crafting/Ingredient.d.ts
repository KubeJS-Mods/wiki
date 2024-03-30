import {ItemStack} from "../ItemStack";

export interface Ingredient {
	readonly empty: boolean
	readonly items: ItemStack[]

	test(itemStack: ItemStack): boolean

	toJson(): any
}
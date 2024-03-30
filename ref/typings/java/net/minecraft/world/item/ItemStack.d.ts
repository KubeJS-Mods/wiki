import {Item, UseAnim} from "./Item";
import {CompoundTag} from "../../nbt/NBT";

export interface ItemStack {
	readonly item: Item
	nbt?: CompoundTag
	count: int

	readonly empty: boolean
	readonly maxStackSize: int
	readonly stackable: boolean
	readonly damageableItem: boolean
	readonly damaged: boolean
	damageValue: int
	readonly barVisible: boolean
	readonly barWidth: int
	readonly batColor: int
	readonly useDuration: int
	readonly useAnimation: UseAnim

	copy(): this

	copyWithCount(count: int): this
}
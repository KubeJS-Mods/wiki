export type UseAnim = "none" | "eat" | "drink" | "block" | "bow" | "spear" | "crossbow" | "spyglass" | "toot_horn" | "brush"

export interface ItemLike {
	asItem(): Item
}

export interface Item extends ItemLike {
	/*
	static getId(item: Item): int

	static byId(id: int): Item

	static byBlock(block: Block): Item
	 */
}
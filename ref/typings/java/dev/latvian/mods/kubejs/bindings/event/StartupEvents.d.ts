import {EventHandler, EventJS} from "./EventJS";
import {BuilderBase} from "../../registry/BuilderBase";
import {Block} from "@java/net/minecraft/world/level/block/Block";
import {BlockBuilder} from "../../block/BlockBuilder";
import {ItemStack} from "@java/net/minecraft/world/item/ItemStack";
import {Ingredient} from "@java/net/minecraft/world/item/crafting/Ingredient";
import {TextComponent} from "@java/net/minecraft/network/chat/TextComponent";

export interface StartupEventJS extends EventJS {
}

export interface RegistryEventJS<E, T extends BuilderBase<E>> extends EventJS {
	create(id: string, type?: string): T

	createCustom(id: string, object: () => E);
}

export interface RecipeSchemaRegistryEventJS extends EventJS {
	readonly components: Map<string, any>

	namespace(namespace: string): any

	register(id: ID, schema: any)

	mapRecipe(name: string, type: ID)
}

export type CreativeTabVisibility = 'parent_and_search_tabs' | 'parent_tab_only' | 'search_tab_only'

export interface CreativeTabEventJS extends EventJS {
	displayName: TextComponent
	icon: ItemStack

	add(items: ItemStack[], visibility: CreativeTabVisibility = 'parent_and_search_tabs')

	addAfter(order: ItemStack, items: ItemStack[], visibility: CreativeTabVisibility = 'parent_and_search_tabs')

	addBefore(order: ItemStack, items: ItemStack[], visibility: CreativeTabVisibility = 'parent_and_search_tabs')

	removeDisplay(filter: Ingredient)

	removeSearch(filter: Ingredient)

	remove(filter: Ingredient)
}

export interface StartupEventsGroup {
	init(callback: EventHandler<StartupEventJS>)

	postInit(callback: EventHandler<StartupEventJS>)

	registry(registry: string, callback: EventHandler<RegistryEventJS<any, BuilderBase<any>>>)

	registry(registry: 'block', callback: EventHandler<RegistryEventJS<Block, BlockBuilder>>)

	recipeSchemaRegistry(callback: EventHandler<RecipeSchemaRegistryEventJS>)

	modifyCreativeTab(id: ID, callback: EventHandler<CreativeTabEventJS>)
}
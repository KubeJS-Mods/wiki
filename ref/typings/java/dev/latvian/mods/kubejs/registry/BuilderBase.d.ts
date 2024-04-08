import {RegistryInfo} from "@java/dev/latvian/mods/kubejs/registry/RegistryInfo"
import {TextComponent} from "@java/net/minecraft/network/chat/TextComponent"

export interface BuilderBase<T> {
	readonly id: ResourceLocation
	readonly registryType: RegistryInfo<T>

	get(): T

	constructor(id: ID)

	translationKey(key: string): this

	displayName(name: TextComponent): this

	formattedDisplayName(): this

	formattedDisplayName(name: TextComponent): this

	tag(tag: ID): this
}
import {StartupEventsGroup} from "./java/dev/latvian/mods/kubejs/bindings/event/StartupEvents";
import {ConsoleJS} from "./java/dev/latvian/mods/kubejs/util/ConsoleJS";
import {TextWrapper} from "./java/net/minecraft/network/chat/TextComponent";

export {}

declare global {
	export type byte = number
	export type short = number
	export type int = number
	export type long = number
	export type float = number
	export type double = number

	export type char = string

	const SECOND = 1000
	const MINUTE = SECOND * 60
	const HOUR = MINUTE * 60

	const console: ConsoleJS

	export interface JavaClass<T> {
		readonly name: string
	}

	export interface ResourceLocation {
		/**
		 * The namespace of the resource location
		 */
		readonly namespace: string

		/**
		 * The path of the resource location
		 */
		readonly path: string

		/**
		 * @param namespace The namespace of the resource location
		 * @param path The path of the resource location
		 */
		constructor(namespace: string, path: string)

		constructor(string: string)
	}

	export type ID = string | ResourceLocation;

	export interface ResourceKey<T> {
		location(): ResourceLocation

		registry(): ResourceLocation
	}

	const StartupEvents: StartupEventsGroup

	/**
	 * The hub for all things text components. Format text to your hearts content!
	 * */
	const Text: TextWrapper
}
export type TextComponent = Component | string | TextComponent[];

export interface Component extends Iterable<Component> {
	readonly empty: boolean

	toJson(): any

	hasStyle(): boolean

	hasSiblings(): boolean

	append(component: Component): Component;

	black(): Component

	darkBlue(): Component

	darkGreen(): Component

	darkAqua(): Component

	darkRed(): Component

	darkPurple(): Component

	gold(): Component

	gray(): Component

	darkGray(): Component

	blue(): Component

	green(): Component

	aqua(): Component

	red(): Component

	lightPurple(): Component

	yellow(): Component

	white(): Component

	color(color: string | int): Component

	noColor(): Component

	bold(value?: boolean): Component

	italic(value?: boolean): Component

	underlined(value?: boolean): Component

	strikethrough(value?: boolean): Component

	obfuscated(value?: boolean): Component

	insertion(text: string): Component

	font(text: ID): Component

	clickRunCommand(command: string): Component

	clickSuggestCommand(command: string): Component

	clickCopy(text: string): Component

	clickChangePage(page: string): Component

	clickOpenUrl(url: string): Component

	clickOpenFile(path: string): Component

	hover(hover: TextComponent): Component
}

export interface TextWrapper {
	/** Returns a Component of the input */
	of(text: TextComponent): Component

	/** Returns a plain component of the string, or empty if it is an empty string */
	ofString(text: string): Component

	/** Checks if the passed in component, and all its children are empty */
	isEmpty(component: Component): boolean

	/** Returns an empty component */
	empty(): Component

	/** Joins all components in the list with the separator component */
	join(separator: TextComponent, texts: TextComponent[])

	/** Joins all components */
	join(...texts: TextComponent): Component

	/** Returns a translatable component of the input key, with args of the objects */
	translate(key: string, ...args: TextComponent[]): Component

	/** Returns a keybinding component of the input keybinding descriptor */
	keybind(keybind: string): Component

	/** Returns a score component of the input objective, for the provided selector */
	score(selector: string, objective: string): Component

	/** Returns a component displaying all entities matching the input selector, with a custom separator */
	selector(selector: string, separator?: TextComponent): Component

	/** Returns a component of the input, colored black */
	black(text: any): Component

	/** Returns a component of the input, colored dark blue */
	darkBlue(text: any): Component

	/** Returns a component of the input, colored dark green */
	darkGreen(text: any): Component

	/** Returns a component of the input, colored dark aqua */
	darkAqua(text: any): Component

	/** Returns a component of the input, colored dark red */
	darkRed(text: any): Component

	/** Returns a component of the input, colored dark purple */
	darkPurple(text: any): Component

	/** Returns a component of the input, colored gold */
	gold(text: any): Component

	/** Returns a component of the input, colored gray */
	gray(text: any): Component

	/** Returns a component of the input, colored dark gray */
	darkGray(text: any): Component

	/** Returns a component of the input, colored blue */
	blue(text: any): Component

	/** Returns a component of the input, colored green */
	green(text: any): Component

	/** Returns a component of the input, colored aqua */
	aqua(text: any): Component

	/** Returns a component of the input, colored red */
	red(text: any): Component

	/** Returns a component of the input, colored light purple */
	lightPurple(text: any): Component

	/** Returns a component of the input, colored yellow */
	yellow(text: any): Component

	/** Returns a component of the input, colored white */
	white(text: any): Component
}
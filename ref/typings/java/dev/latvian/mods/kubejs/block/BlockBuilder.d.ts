import {BuilderBase} from "@java/dev/latvian/mods/kubejs/registry/BuilderBase";
import {Block} from "@java/net/minecraft/world/level/block/Block";

export interface BlockBuilder extends BuilderBase<Block> {
	constructor(id: ID);

	material(material: Material): this;
}

export type Material =
	'air' |
	'amethyst' |
	'bamboo' |
	'bamboo_sapling' |
	'barrier' |
	'bubble_column' |
	'buildable_glass' |
	'cactus' |
	'cake' |
	'clay' |
	'cloth_decoration' |
	'decoration' |
	'dirt' |
	'egg' |
	'explosive' |
	'fire' |
	'froglight' |
	'frogspawn' |
	'glass' |
	'grass' |
	'heavy_metal' |
	'ice' |
	'ice_solid' |
	'lava' |
	'leaves' |
	'metal' |
	'moss' |
	'nether_wood' |
	'piston' |
	'plant' |
	'portal' |
	'powder_snow' |
	'replaceable_fireproof_plant' |
	'replaceable_plant' |
	'replaceable_water_plant' |
	'sand' |
	'sculk' |
	'shulker_shell' |
	'snow' |
	'sponge' |
	'stone' |
	'structural_air' |
	'top_snow' |
	'vegetable' |
	'water' |
	'water_plant' |
	'web' |
	'wood' |
	'wool';
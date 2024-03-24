import {BlockState} from "./state/BlockState";
import {ItemLike} from "../../item/Item";

export interface Block extends ItemLike {
	/*
	static getId(blockState: BlockState): int;

	static getBlockState(id: int): BlockState;

	static byItem(item: Item): Block;

	static box(minX: double, minY: double, minZ: double, maxX: double, maxY: double, maxZ: double): any; // FIXME: VoxelShape
	 */

	defaultBlockState(): BlockState
}
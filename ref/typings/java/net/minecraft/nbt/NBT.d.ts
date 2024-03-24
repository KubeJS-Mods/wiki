export interface Tag {
}

export interface CompoundTag extends Map<string, Tag>, Tag {
}

export interface ListTag extends Array<Tag>, Tag {
}
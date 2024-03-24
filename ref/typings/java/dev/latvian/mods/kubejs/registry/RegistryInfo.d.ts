export interface RegistryInfo<T> implements Iterable<T> {
	readonly key: ResourceKey<T>;
	readonly objectBaseClass: JavaClass<T>;
	readonly objects: Map<ResourceLocation, T>;

	getId(value: T): ResourceLocation;

	getValue(id: ID): T;

	hasValue(id: ID): boolean;
}
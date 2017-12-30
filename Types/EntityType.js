var EntityType;
(function (EntityType) {
    EntityType[EntityType["Moon"] = 1] = "Moon";
    EntityType[EntityType["Planet"] = 2] = "Planet";
    EntityType[EntityType["Star"] = 3] = "Star";
    EntityType[EntityType["StarSystem"] = 4] = "StarSystem";
    EntityType[EntityType["StarCluster"] = 5] = "StarCluster";
})(EntityType || (EntityType = {}));

module.exports = EntityType;

/*
enum EntityType {
    Moon = 1,
    Planet, 
    Star,
    StarSystem,
    StarCluster
}
*/
var StarTypes;
(function (StarTypes) {
    StarTypes[StarTypes["OB"] = 1] = "OB";
    StarTypes[StarTypes["AF"] = 2] = "AF";
    StarTypes[StarTypes["G"] = 3] = "G";
    StarTypes[StarTypes["K"] = 4] = "K";
    StarTypes[StarTypes["M"] = 5] = "M";
    StarTypes[StarTypes["C"] = 6] = "C";
    StarTypes[StarTypes["Pulsar_Neutron"] = 7] = "Pulsar_Neutron";
    StarTypes[StarTypes["WhiteDwarf"] = 8] = "WhiteDwarf";
    StarTypes[StarTypes["Back_hole"] = 9] = "Back_hole";
})(StarTypes || (StarTypes = {}));

module.exports = StarTypes;

/*
enum StarTypes {
    OB = 1,
    AF,
    G,
    K,
    M,
    C, 
    Pulsar_Neutron,
    WhiteDwarf,
    Back_hole
}
*/